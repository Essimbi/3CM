import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { join } from 'node:path';
import Groq from 'groq-sdk';
import { config as dotenvConfig } from 'dotenv';

// Load .env variables (using absolute path to be sure)
dotenvConfig({ path: join(process.cwd(), '.env') });

const browserDistFolder = join(import.meta.dirname, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine();

// ─── Parse JSON bodies for API routes ────────────────────────────────────────
app.use(express.json());

// ─── Test Endpoint ───────────────────────────────────────────────────────────
app.get('/api/test', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString(), env: !!process.env['GROQ_API_KEY'] });
});

// ─── System prompt: 3CM context ──────────────────────────────────────────────
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

// ─── POST /api/chat ───────────────────────────────────────────────────────────
app.post('/api/chat', async (req, res) => {
  const apiKey = process.env['GROQ_API_KEY'];
  console.log('[/api/chat] Request received');

  if (!apiKey || apiKey === 'your-groq-api-key-here' || apiKey === 'your-gemini-api-key-here') {
    console.error('[/api/chat] Error: GROQ_API_KEY is not set or is the default value.');
    res.status(500).json({
      error: 'Groq API key not configured.',
      debug: { hasKey: !!apiKey, env: process.env['NODE_ENV'] }
    });
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
    console.error('[/api/chat] Groq detailed error:', err);
    res.status(500).json({ error: 'Une erreur est survenue pendant l\'appel à l\'IA.' });
  }
});

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

/**
 * Start the server if this module is the main entry point, or it is ran via PM2.
 */
if (isMainModule(import.meta.url) || process.env['pm_id']) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, (error) => {
    if (error) {
      throw error;
    }
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);
