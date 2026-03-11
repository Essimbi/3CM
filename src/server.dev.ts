import express from 'express';
import Groq from 'groq-sdk';
import { config as dotenvConfig } from 'dotenv';
import { join } from 'node:path';

// Load .env variables
dotenvConfig({ path: join(process.cwd(), '.env') });

const app = express();
const port = process.env['PORT'] || 4000;

// Parse JSON bodies for API routes
app.use(express.json());

// Log all requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

// System prompt for the chatbot
const SYSTEM_PROMPT = `Tu es l'assistant virtuel de 3CM (Communication Conseil Cameroun), une agence de communication et de conseil en stratégie basée à Yaoundé, Cameroun, avec un bureau en France.

TON RÔLE : Accueillir les visiteurs, répondre à leurs questions sur 3CM, qualifier leurs besoins et les orienter vers un devis ou un contact humain.

INFORMATIONS CLÉ SUR 3CM :
- Nom complet : 3CM Communication et Technologies SARL
- Siège : 54, rue 6085, Bastos, Yaoundé, Cameroun
- Bureau France : 269 Av. Général de Gaulle, 94170 Le Perreux-sur-Marne
- Téléphone Cameroun : +237 696 805 074
- Téléphone France : +33 6 34 20 83 68
- Email : info@3-c-m.com
- Page contact : /contact

NOS SERVICES :
1. Corporate : Stratégie de communication institutionnelle, conseil en image
2. Branding : Identité visuelle, création de marque, charte graphique
3. Digital : Création de sites web, applications, stratégie digitale, réseaux sociaux
4. Influence : Relations presse, e-réputation, marketing d'influence
5. Events : Organisation d'événements, conférences, cérémonies, activations
6. Workspace : Aménagement et design d'espaces de travail

POSTURE :
- Sois chaleureux, professionnel et concis (max 3 phrases par réponse)
- Réponds toujours en français sauf si le visiteur écrit dans une autre langue
- Si quelqu'un demande un devis, un tarif ou souhaite démarrer un projet, invite-le à remplir le formulaire sur /contact
- Si la question dépasse tes connaissances sur 3CM, oriente vers info@3-c-m.com
- Ne pas inventer de prix ; toujours proposer un devis personnalisé`;

// Health check endpoint
app.get('/api/test', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString(), env: !!process.env['GROQ_API_KEY'] });
});

// Chat endpoint
app.post('/api/chat', async (req, res) => {
  const apiKey = process.env['GROQ_API_KEY'];
  console.log('[/api/chat] Request received');

  if (!apiKey || apiKey === 'your-groq-api-key-here' || apiKey === 'your-gemini-api-key-here') {
    console.error('[/api/chat] Error: GROQ_API_KEY is not set or is the default value.');
    res.status(500).json({ error: 'Groq API key not configured.' });
    return;
  }

  const { messages } = req.body as {
    messages: { role: 'user' | 'assistant'; content: string }[];
  };

  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    console.error('[/api/chat] Error: Invalid or empty messages payload.', req.body);
    res.status(400).json({ error: 'Invalid messages payload.' });
    return;
  }

  try {
    const groq = new Groq({ apiKey });

    const formattedMessages = messages.map((m) => ({
      role: (m.role === 'assistant' ? 'assistant' : 'user') as 'assistant' | 'user',
      content: m.content,
    }));

    console.log(`[/api/chat] Sending ${formattedMessages.length} messages to Groq...`);

    const completion = await groq.chat.completions.create({
      messages: [
        { role: 'system' as const, content: SYSTEM_PROMPT },
        ...formattedMessages,
      ],
      model: 'llama-3.3-70b-versatile',
      temperature: 0.7,
      max_tokens: 500,
    });

    const reply = completion.choices[0]?.message?.content ?? 'Je suis désolé, je n\'ai pas pu traiter votre message.';
    console.log('[/api/chat] Groq response received successfully');
    res.json({ reply });
  } catch (err: any) {
    console.error('[/api/chat] Groq detailed error:', err.message || err);
    res.status(500).json({ error: 'Une erreur est survenue pendant l\'appel à l\'IA.' });
  }
});

// 404 handler
app.use((req, res) => {
  console.log(`[404] Endpoint not found: ${req.method} ${req.path}`);
  res.status(404).json({ error: 'Endpoint not found' });
});

// Error handler
app.use((err: any, req: any, res: any, next: any) => {
  console.error('[ERROR]', err);
  res.status(500).json({ error: 'Internal server error' });
});

// Start the server
const server = app.listen(port, () => {
  console.log(`\n[✓ Dev Server] API server listening on http://localhost:${port}\n`);
});

// Handle graceful shutdown
server.on('error', (err: any) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`[ERROR] Port ${port} is already in use`);
  } else {
    console.error('[ERROR]', err);
  }
  process.exit(1);
});

process.on('SIGTERM', () => {
  console.log('[SIGTERM] Shutting down gracefully...');
  server.close(() => {
    console.log('[✓] Server closed');
    process.exit(0);
  });
});

