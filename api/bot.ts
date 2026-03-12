import { VercelRequest, VercelResponse } from '@vercel/node';
import Groq from 'groq-sdk';

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

export default async function handler(req: VercelRequest, res: VercelResponse) {
    try {
        // CORS
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

        if (req.method === 'OPTIONS') {
            return res.status(200).end();
        }

        // Diagnostic GET
        if (req.method === 'GET') {
            return res.status(200).json({
                status: 'diagnostic_ok',
                version: '1.0.3',
                message: 'API is alive. Use POST for chat.',
                env_health: {
                    has_groq_key: !!process.env['GROQ_API_KEY'],
                    node_version: process.version
                }
            });
        }

        if (req.method !== 'POST') {
            return res.status(405).json({ error: 'Method not allowed' });
        }

        const { messages } = req.body;
        const apiKey = process.env['GROQ_API_KEY'];

        if (!apiKey) {
            console.error('[API BOT] Missing API KEY');
            return res.status(500).json({ error: 'GROQ_API_KEY missing on production environment.' });
        }

        if (!messages || !Array.isArray(messages)) {
            return res.status(400).json({ error: 'Invalid payload: messages array required.' });
        }

        const groq = new Groq({ apiKey });
        const completion = await groq.chat.completions.create({
            messages: [
                { role: 'system' as const, content: SYSTEM_PROMPT },
                ...messages.map((m: any) => ({
                    role: (m.role === 'assistant' ? 'assistant' : 'user') as 'assistant' | 'user',
                    content: m.content
                }))
            ],
            model: 'llama-3.3-70b-versatile',
            temperature: 0.7,
            max_tokens: 500,
        });

        const reply = completion.choices[0]?.message?.content ?? 'Désolé, je n\'ai pas pu traiter votre demande.';
        return res.status(200).json({ reply });

    } catch (error: any) {
        console.error('[API BOT CRITICAL ERROR]:', error);
        return res.status(500).json({
            error: 'CRITICAL_FUNCTION_ERROR',
            message: error.message || 'Unknown error',
            stack: process.env['NODE_ENV'] === 'development' ? error.stack : undefined
        });
    }
}
