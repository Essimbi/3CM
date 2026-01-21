import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-cookie-consent',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div *ngIf="isVisible()" class="cookie-overlay">
      <div class="cookie-modal">
        <div class="cookie-content">
          <div class="cookie-icon">🍪</div>
          <div class="cookie-text">
            <h3>Gestion des cookies</h3>
            <p>Nous utilisons des cookies pour améliorer votre expérience de navigation et analyser notre trafic. Votre confidentialité est importante pour nous.</p>
          </div>
        </div>
        <div class="cookie-actions">
          <button (click)="refuse()" class="btn-refuse">Refuser</button>
          <button (click)="accept()" class="btn-accept">Accepter</button>
        </div>
      </div>
    </div>
  `,
    styleUrl: './cookie-consent.component.scss'
})
export class CookieConsentComponent implements OnInit {
    isVisible = signal(false);

    ngOnInit() {
        // Check if user has already made a choice
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            // Small delay for smooth entrance
            setTimeout(() => {
                this.isVisible.set(true);
            }, 1000);
        }
    }

    accept() {
        localStorage.setItem('cookieConsent', 'accepted');
        this.close();
    }

    refuse() {
        localStorage.setItem('cookieConsent', 'refused');
        this.close();
    }

    private close() {
        const modal = document.querySelector('.cookie-modal');
        modal?.classList.add('closing');

        setTimeout(() => {
            this.isVisible.set(false);
        }, 400);
    }
}
