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

// ─── Chatbot API Route (Local/SSR) ─────────────────────────────────────────────
// This handles the chatbot logic when running locally or during SSR
app.post('/api/bot', express.json(), async (req, res) => {
  const apiKey = process.env['GROQ_API_KEY'];

  if (!apiKey) {
    return res.status(500).json({ error: 'GROQ_API_KEY missing in environment variables.' });
  }

  const { messages } = req.body;
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Invalid payload: messages array required.' });
  }

  try {
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

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...messages
        ],
        temperature: 0.7,
        max_tokens: 500
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      return res.status(response.status).json({ error: 'Groq API error', details: errorData });
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content ?? 'Désolé, je n\'ai pas pu obtenir de réponse.';
    return res.json({ reply });

  } catch (error: any) {
    console.error('[LOCAL API ERROR]:', error);
    return res.status(500).json({ error: 'Internal server error', message: error.message });
  }
});

// ─── Angular SSR Handler ─────────────────────────────────────────────────────

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
