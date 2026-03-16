import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../../../core/directives/scroll-reveal.directive';
import { ScrollAnimationDirective } from '../../../../core/directives/scroll-animation.directive';

interface TrustedPartner {
  name: string;
  initials: string;
  logoSrc?: string;
}

@Component({
  selector: 'app-trust-section',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective, ScrollAnimationDirective],
  template: `
    <section class="trust-section" id="trust">
      <div class="trust-background" aria-hidden="true">
        <div class="floating-orb orb-1"></div>
        <div class="floating-orb orb-2"></div>
        <div class="floating-orb orb-3"></div>
        <div class="gradient-mesh"></div>
      </div>
      <div class="trust-container">
        <div class="trust-header" appScrollAnimation [animationType]="'fade-up'" [duration]="800">
          <h2 class="trust-title">Ils nous ont fait confiance</h2>
        </div>

        <div class="logo-grid" appScrollReveal>
          @for (partner of partners; track partner.name) {
            <div class="logo-tile" [attr.aria-label]="partner.name">
              @if (partner.logoSrc) {
                <img class="logo-image" [src]="partner.logoSrc" [alt]="partner.name" loading="lazy" />
              } @else {
                <div class="logo-fallback" aria-hidden="true">{{ partner.initials }}</div>
                <span class="sr-only">{{ partner.name }}</span>
              }
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styleUrl: './trust-section.component.scss'
})
export class TrustSectionComponent {
  readonly partners: TrustedPartner[] = [
    { name: 'CAMWATER', initials: 'CW', logoSrc: 'assets/partners/camwater.png' },
    { name: 'CFCE', initials: 'CFCE', logoSrc: 'assets/partners/cfce.png' },
    { name: 'Guinness', initials: 'GN', logoSrc: 'assets/partners/guiness.png' },
    { name: 'MINPMESSA', initials: 'MINPMESSA', logoSrc: 'assets/partners/minpmessa.png' },
    { name: 'NFC Bank', initials: 'NFC', logoSrc: 'assets/partners/nfc.png' },
    { name: 'Ministère du Commerce', initials: 'MINCOMMERCE', logoSrc: 'assets/partners/omc.png' },
    { name: 'SNH', initials: 'SNH', logoSrc: 'assets/partners/snh.png' },
    { name: 'Total', initials: 'TOT', logoSrc: 'assets/partners/total.png' }
  ];
}
