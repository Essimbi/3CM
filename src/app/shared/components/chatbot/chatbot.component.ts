import { Component, signal, ElementRef, ViewChild, AfterViewChecked, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroChatBubbleLeftEllipsis, heroXMark, heroPaperAirplane, heroExclamationCircle } from '@ng-icons/heroicons/outline';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ChatService } from '../../../core/services/chat.service';

interface Message {
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  isError?: boolean;
}

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, NgIconComponent, FormsModule],
  providers: [provideIcons({ heroChatBubbleLeftEllipsis, heroXMark, heroPaperAirplane, heroExclamationCircle })],
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
              <div class="message-bubble" [class.error]="msg.isError">
                {{ msg.text }}
                <span class="timestamp">{{ msg.timestamp | date:'HH:mm' }}</span>
              </div>
            </div>
          }
          @if (isTyping()) {
            <div class="message-wrapper">
              <div class="message-bubble typing">
                <span></span><span></span><span></span>
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
            [disabled]="isTyping()"
          >
          <button type="submit" [disabled]="!newMessage().trim() || isTyping()">
            <ng-icon name="heroPaperAirplane" size="20"></ng-icon>
          </button>
        </form>
      </div>
    </div>
  `,
  styleUrl: './chatbot.component.scss'
})
export class ChatbotComponent implements AfterViewChecked, OnDestroy {
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

  private sub?: Subscription;
  private readonly isBrowser: boolean;

  constructor(
    private chatService: ChatService,
    @Inject(PLATFORM_ID) platformId: object,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
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
    if (!text || !this.isBrowser) return;

    // Add user message
    this.messages.update(msgs => [...msgs, {
      text,
      sender: 'user',
      timestamp: new Date()
    }]);
    this.newMessage.set('');
    this.isTyping.set(true);

    this.sub = this.chatService.sendMessage(text).subscribe({
      next: (reply) => {
        this.messages.update(msgs => [...msgs, {
          text: reply,
          sender: 'bot',
          timestamp: new Date()
        }]);
        this.isTyping.set(false);
      },
      error: () => {
        this.messages.update(msgs => [...msgs, {
          text: 'Désolé, une erreur est survenue. Contactez-nous directement au +237 696 805 074 ou via info@3-c-m.com',
          sender: 'bot',
          timestamp: new Date(),
          isError: true,
        }]);
        this.isTyping.set(false);
      }
    });
  }
}
