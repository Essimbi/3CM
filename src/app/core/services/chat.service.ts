import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface ChatMessage {
    role: 'user' | 'assistant' | 'system';
    content: string;
}

@Injectable({
    providedIn: 'root',
})
export class ChatService {
    private readonly apiUrl = '/api/bot';
    private history: ChatMessage[] = [];
    private readonly systemPrompt = `Tu es l'assistant virtuel de 3CM (Communication Conseil Cameroun), une agence de communication et de conseil en stratégie basée à Yaoundé, Cameroun, avec un bureau en France.

TON RÔLE : Accueillir les visiteurs, répondre à leurs questions sur 3CM, qualifier leurs besoins et les orienter vers un devis ou un contact humain.

INFORMATIONS CLÉ SUR 3CM :
- Nom complet : 3CM Communication et Technologies SARL
- Siège : 54, rue 6085, Bastos, Yaoundé, Cameroun
- Bureau France : 269 Av. Général de Gaulle, 94170 Le Perreux-sur-Marne
- Téléphone Cameroun : +237 696 805 074
- Téléphone France : +33 6 34 20 83 68
- Email : info@3-c-m.com
- Page contact : Buton démarrer un projet sur la barre de navigation

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

    constructor(private http: HttpClient) { }

    /**
     * Send a user message to the AI and get a reply.
     * The full conversation history is sent each time to maintain context.
     */
    sendMessage(userText: string): Observable<string> {
        const userMessage: ChatMessage = { role: 'user', content: userText };
        this.history = [...this.history, userMessage];

        const headers = new HttpHeaders({
            'Authorization': `Bearer ${environment.groqApiKey}`,
            'Content-Type': 'application/json'
        });

        const body = {
            model: 'llama-3.3-70b-versatile',
            messages: [
                { role: 'system', content: this.systemPrompt },
                ...this.history
            ],
            temperature: 0.7,
            max_tokens: 500
        };

        return this.http
            .post<{ reply: string }>(this.apiUrl, { messages: this.history }, { headers })
            .pipe(
                map((res) => {
                    const reply = res.reply ?? 'Désolé, je n\'ai pas pu obtenir de réponse.';
                    const botMessage: ChatMessage = { role: 'assistant', content: reply };
                    this.history = [...this.history, botMessage];
                    return reply;
                }),
            );
    }

    /** Clear conversation history (e.g. when chat window is closed) */
    clearHistory(): void {
        this.history = [];
    }
}
