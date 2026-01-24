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
    {
      name: 'Banque Atlantique Cameroun',
      initials: 'BAC'
    },
    {
      name: 'Ministère des Arts et de la Culture',
      initials: 'MINAC'
    },
    {
      name: 'StartUp Nation',
      initials: 'SN'
    },
    {
      name: 'Agence Française de Développement',
      initials: 'AFD'
    },
    {
      name: 'Canal+ Afrique',
      initials: 'C+'
    },
    {
      name: 'African Business Forum',
      initials: 'ABF'
    }
  ];
}
