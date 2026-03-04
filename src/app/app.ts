import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ChatbotComponent } from './shared/components/chatbot/chatbot.component';
import { CookieConsentComponent } from './shared/components/cookie-consent/cookie-consent.component';
import { TechFloatingButtonComponent } from './shared/components/tech-floating-button/tech-floating-button.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, ChatbotComponent, CookieConsentComponent, TechFloatingButtonComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App { }

