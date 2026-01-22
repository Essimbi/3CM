import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../../../core/directives/scroll-reveal.directive';
import { ScrollAnimationDirective } from '../../../../core/directives/scroll-animation.directive';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroCheckBadge, heroSparkles, heroArrowTrendingUp } from '@ng-icons/heroicons/outline';

interface TrustMetric {
  label: string;
  value: string;
}

interface TrustHighlight {
  quote: string;
  author: string;
  role: string;
  metrics: TrustMetric[];
}

interface TrustedClient {
  name: string;
  initials: string;
  sector: string;
  scope: string;
  accent: string;
}

@Component({
  selector: 'app-trust-section',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective, ScrollAnimationDirective, NgIconComponent],
  providers: [provideIcons({ heroCheckBadge, heroSparkles, heroArrowTrendingUp })],
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
          <div class="trust-eyebrow">
            <ng-icon name="heroSparkles" size="18"></ng-icon>
            <span>Ils nous ont fait confiance</span>
          </div>
          <h2 class="trust-title">Des marques exigeantes nous confient leur image</h2>
          <p class="trust-subtitle">
            Institutions, acteurs financiers, scale-ups et industries créatives nous choisissent pour orchestrer des dispositifs
            qui concilient émotion, impact business et rayonnement médiatique.
          </p>
        </div>

        <div class="trust-grid">
          <article class="testimonial-card" appScrollReveal>
            <div class="testimonial-glow" aria-hidden="true"></div>
            <div class="card-shine" aria-hidden="true"></div>
            <div class="testimonial-badge">
              <ng-icon name="heroCheckBadge" size="28"></ng-icon>
              <span>Signature 3CM</span>
            </div>
            <p class="testimonial-quote">"{{ highlight.quote }}"</p>
            <div class="testimonial-author">
              <span class="author-name">{{ highlight.author }}</span>
              <span class="author-role">{{ highlight.role }}</span>
            </div>
            <div class="testimonial-metrics">
              @for (metric of highlight.metrics; track metric.label) {
                <div class="metric-pill" [style.animation-delay]="$index * 0.1 + 's'">
                  <div class="metric-icon">
                    <ng-icon name="heroArrowTrendingUp" size="16"></ng-icon>
                  </div>
                  <span class="metric-value">{{ metric.value }}</span>
                  <span class="metric-label">{{ metric.label }}</span>
                </div>
              }
            </div>
          </article>

          <div class="brand-panel" appScrollReveal [delay]="140">
            <div class="panel-shine" aria-hidden="true"></div>
            <div class="panel-header">
              <span class="panel-eyebrow">Partenariats clés</span>
              <h3>Un portefeuille multi-sectoriel, du public au privé</h3>
              <p>
                Chaque collaboration est pilotée avec un noyau conseil, création et production intégré. Résultat :
                des campagnes orchestrées à l'échelle, une cohérence de marque et une activation mesurable sur tous les points de contact.
              </p>
            </div>

            <div class="brand-grid">
              @for (client of clients; track client.name; let i = $index) {
                <article class="brand-tile" [style.animation-delay]="i * 0.08 + 's'">
                  <div class="tile-shine" aria-hidden="true"></div>
                  <div class="tile-header">
                    <div class="tile-emblem" [style.background]="client.accent" aria-hidden="true">
                      <span>{{ client.initials }}</span>
                    </div>
                    <div class="tile-meta">
                      <span class="tile-name">{{ client.name }}</span>
                      <span class="tile-sector">{{ client.sector }}</span>
                    </div>
                  </div>
                  <p class="tile-scope">{{ client.scope }}</p>
                </article>
              }
            </div>

            <div class="brand-ribbon">
              <span>+ de 100 clients accompagnés sur 12 territoires</span>
              <span class="dot" aria-hidden="true"></span>
              <span>Engagement moyen x3 post-activation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './trust-section.component.scss'
})
export class TrustSectionComponent {
  readonly highlight: TrustHighlight = {
    quote: '3CM a su orchestrer notre repositionnement avec une maîtrise remarquable des enjeux multi-publics.',
    author: 'Mireille N.',
    role: 'Directrice Communication – Groupe bancaire CEMAC',
    metrics: [
      { value: '+42%', label: "notoriété post-campagne" },
      { value: '3 pays', label: 'activation simultanée' },
      { value: '6 semaines', label: 'mise en œuvre complète' }
    ]
  };

  readonly clients: TrustedClient[] = [
    {
      name: 'Banque Atlantique Cameroun',
      initials: 'BAC',
      sector: 'Finance & Assurance',
      scope: 'Convention annuelle, plans médias et relations presse régionales',
      accent: 'linear-gradient(135deg, rgba(49,163,221,0.12) 0%, rgba(13,92,134,0.2) 100%)'
    },
    {
      name: 'Ministère des Arts et de la Culture',
      initials: 'MINAC',
      sector: 'Institutionnel',
      scope: 'Festival culturel, production audiovisuelle et couverture médiatique',
      accent: 'linear-gradient(135deg, rgba(240,167,0,0.18) 0%, rgba(240,247,251,0.25) 100%)'
    },
    {
      name: 'StartUp Nation',
      initials: 'SN',
      sector: 'Tech & Innovation',
      scope: 'Lancement produit, funnel digital et contenus influenceurs',
      accent: 'linear-gradient(135deg, rgba(76,29,149,0.16) 0%, rgba(49,163,221,0.18) 100%)'
    },
    {
      name: 'Agence Française de Développement',
      initials: 'AFD',
      sector: 'Coopération internationale',
      scope: 'Programme RSE, conférence hybride et stratégie éditoriale',
      accent: 'linear-gradient(135deg, rgba(13,92,134,0.18) 0%, rgba(240,247,251,0.22) 100%)'
    },
    {
      name: 'Canal+ Afrique',
      initials: 'C+',
      sector: 'Médias & Divertissement',
      scope: 'Tournées promotionnelles, activation terrain et social media',
      accent: 'linear-gradient(135deg, rgba(235,64,52,0.18) 0%, rgba(49,163,221,0.18) 100%)'
    },
    {
      name: 'African Business Forum',
      initials: 'ABF',
      sector: 'Business & Réseaux',
      scope: 'Sommet international, keynote speakers et production live',
      accent: 'linear-gradient(135deg, rgba(15,118,110,0.16) 0%, rgba(240,247,251,0.25) 100%)'
    }
  ];
}
