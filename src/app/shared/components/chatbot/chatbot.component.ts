import { Component, signal, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroChatBubbleLeftEllipsis, heroXMark, heroPaperAirplane } from '@ng-icons/heroicons/outline';
import { FormsModule } from '@angular/forms';

interface Message {
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, NgIconComponent, FormsModule],
  providers: [provideIcons({ heroChatBubbleLeftEllipsis, heroXMark, heroPaperAirplane })],
  template: `
    <div class="chatbot-wrapper" [class.open]="isOpen()">
      <!-- Chat Bubble Trigger -->
      <button class="chat-trigger" (click)="toggleChat()" [attr.aria-label]="isOpen() ? 'Fermer le chat' : 'Ouvrir le chat'">
        <ng-icon [name]="isOpen() ? 'heroXMark' : 'heroChatBubbleLeftEllipsis'" size="28"></ng-icon>
        <span class="notification-badge" *ngIf="!isOpen() && !hasOpenedOnce">1</span>
      </button>

      <!-- Chat Window -->
      <div class="chat-window">
        <header class="chat-header">
          <div class="bot-info">
            <div class="bot-avatar">
              <img src="assets/logo.jpg" alt="3CM Assistant">
            </div>
            <div class="bot-status">
              <span class="bot-name">3CM Assistant</span>
              <span class="status-indicator">En ligne</span>
            </div>
          </div>
          <button class="close-btn" (click)="toggleChat()">
            <ng-icon name="heroXMark" size="20"></ng-icon>
          </button>
        </header>

        <div class="messages-container" #scrollContainer>
          @for (msg of messages(); track msg.timestamp) {
            <div class="message-wrapper" [class.user]="msg.sender === 'user'">
              <div class="message-bubble">
                {{ msg.text }}
                <span class="timestamp">{{ msg.timestamp | date:'HH:mm' }}</span>
              </div>
            </div>
          }
          @if (isTyping()) {
            <div class="message-wrapper">
              <div class="message-bubble typing">
                <span>.</span><span>.</span><span>.</span>
              </div>
            </div>
          }
        </div>

        <form class="chat-input-area" (submit)="sendMessage(); $event.preventDefault()">
          <input 
            type="text" 
            [(ngModel)]="newMessage" 
            name="newMessage"
            placeholder="Écrivez votre message..."
            autocomplete="off"
          >
          <button type="submit" [disabled]="!newMessage().trim()">
            <ng-icon name="heroPaperAirplane" size="20"></ng-icon>
          </button>
        </form>
      </div>
    </div>
  `,
  styleUrl: './chatbot.component.scss'
})
export class ChatbotComponent implements AfterViewChecked {
  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;

  isOpen = signal(false);
  hasOpenedOnce = false;
  isTyping = signal(false);
  messages = signal<Message[]>([
    {
      text: 'Bonjour ! Je suis l\'assistant virtuel de 3CM. Comment puis-je vous aider à propulser votre communication aujourd\'hui ?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  newMessage = signal('');

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  toggleChat() {
    this.isOpen.update(v => !v);
    this.hasOpenedOnce = true;
  }

  private scrollToBottom(): void {
    try {
      this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

  sendMessage() {
    const text = this.newMessage().trim();
    if (!text) return;

    this.messages.update(msgs => [...msgs, {
      text,
      sender: 'user',
      timestamp: new Date()
    }]);
    this.newMessage.set('');

    this.simulateResponse(text);
  }

  private simulateResponse(userText: string) {
    this.isTyping.set(true);

    setTimeout(() => {
      let response = "Je transmets votre demande à nos experts. Souhaitez-vous laisser vos coordonnées pour être recontacté ?";
      const text = userText.toLowerCase();

      if (text.includes('service') || text.includes('faire')) {
        response = "3CM vous accompagne en Stratégie, Événementiel, Relations Presse et Digital. Quel domaine vous intéresse ?";
      } else if (text.includes('prix') || text.includes('tarif') || text.includes('combien')) {
        response = "Nos tarifs sont sur mesure selon vos besoins. Parlons de votre projet pour établir un devis précis !";
      } else if (text.includes('contact') || text.includes('appel')) {
        response = "Vous pouvez nous joindre au +237 696 805 074 ou via le formulaire sur notre page Contact.";
      } else if (text.includes('merci') || text.includes('ciao') || text.includes('bye')) {
        response = "Avec plaisir ! 3CM reste à votre entière disposition. Excellente journée !";
      }

      this.messages.update(msgs => [...msgs, {
        text: response,
        sender: 'bot',
        timestamp: new Date()
      }]);
      this.isTyping.set(false);
    }, 1500);
  }
}
