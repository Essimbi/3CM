import { VercelRequest, VercelResponse } from '@vercel/node';
import Groq from 'groq-sdk';
import { ChatCompletionMessageParam } from 'groq-sdk/resources/chat';
import { config as dotenvConfig } from 'dotenv';

// Load .env variables
dotenvConfig();

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
- Professionnel mais accessible
- Enthousiaste sur les capacités et services de 3CM
- Préoccupé par la satisfaction du visiteur
- Honnête sur les délais et processus`;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Messages array is required' });
  }

  try {
    const groqApiKey = process.env['GROQ_API_KEY'];
    console.log('[/api/chat] Request received', { messagesCount: messages.length });
    
    if (!groqApiKey) {
      console.error('[/api/chat] GROQ_API_KEY is not configured');
      return res.status(500).json({ error: 'GROQ_API_KEY not configured on Vercel. Please add it to environment variables.' });
    }

    const groq = new Groq({ apiKey: groqApiKey });

    // Convert chat history to Groq format with proper typing
    const groqMessages: ChatCompletionMessageParam[] = messages.map((msg: any) => ({
      role: msg.role === 'user' ? ('user' as const) : ('assistant' as const),
      content: msg.content,
    }));

    console.log('[/api/chat] Calling Groq API...');
    
    const response = await groq.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages: [
        { role: 'system' as const, content: SYSTEM_PROMPT },
        ...groqMessages,
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    const assistantMessage = response.choices?.[0]?.message?.content || 'Je suis désolé, je n\'ai pas pu traiter votre message.';
    console.log('[/api/chat] Groq response received successfully');

    return res.status(200).json({ reply: assistantMessage });
  } catch (error: any) {
    console.error('[/api/chat] Error:', error.message || error);
    return res.status(500).json({ 
      error: 'Failed to generate response',
      details: process.env['NODE_ENV'] === 'development' ? error.message : undefined
    });
  }
}
