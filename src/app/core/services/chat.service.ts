import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface ChatMessage {
    role: 'user' | 'assistant';
    content: string;
}

@Injectable({
    providedIn: 'root',
})
export class ChatService {
    private readonly apiUrl = '/bot-api/v1/chat';
    private history: ChatMessage[] = [];

    constructor(private http: HttpClient) { }

    /**
     * Send a user message to the AI and get a reply.
     * The full conversation history is sent each time to maintain context.
     */
    sendMessage(userText: string): Observable<string> {
        const userMessage: ChatMessage = { role: 'user', content: userText };
        this.history = [...this.history, userMessage];

        return this.http
            .post<{ reply: string }>(this.apiUrl, { messages: this.history })
            .pipe(
                map((res) => {
                    const botMessage: ChatMessage = { role: 'assistant', content: res.reply };
                    this.history = [...this.history, botMessage];
                    return res.reply;
                }),
            );
    }

    /** Clear conversation history (e.g. when chat window is closed) */
    clearHistory(): void {
        this.history = [];
    }
}
