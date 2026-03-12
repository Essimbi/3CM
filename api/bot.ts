export const config = {
    runtime: 'edge',
};

export default async function handler(req) {
    try {
        // Check key
        const apiKey = process.env.GROQ_API_KEY;
        if (!apiKey) {
            return new Response(JSON.stringify({ error: 'GROQ_API_KEY is not set' }), { status: 500 });
        }

        if (req.method === 'OPTIONS') {
            return new Response(null, {
                status: 200,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                },
            });
        }

        if (req.method !== 'POST') {
            return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405 });
        }

        const { messages } = await req.json();

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
                'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                model: 'llama-3.3-70b-versatile',
                messages: [
                    { role: 'system', content: SYSTEM_PROMPT },
                    ...messages,
                ],
                temperature: 0.7,
                max_tokens: 500,
            }),
        });

        const data = await response.json();
        const reply = data.choices?.[0]?.message?.content ?? 'Désolé, je n\'ai pas pu obtenir de réponse.';

        return new Response(JSON.stringify({ reply }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('[EDGE ERROR]:', error);
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
