import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../../../core/directives/scroll-reveal.directive';
import { ScrollAnimationDirective } from '../../../../core/directives/scroll-animation.directive';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroAcademicCap,
  heroBolt,
  heroChartBar,
  heroCursorArrowRays,
  heroGlobeAlt,
  heroMegaphone,
  heroPhoto,
  heroSparkles,
  heroSwatch
} from '@ng-icons/heroicons/outline';

interface Service {
  title: string;
  tagline: string;
  description: string;
  cta: string;
  icon: string;
  category: 'spotlight' | 'core';
  link: string;
}

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective, ScrollAnimationDirective, NgIconComponent],
  providers: [
    provideIcons({
      heroAcademicCap,
      heroBolt,
      heroChartBar,
      heroCursorArrowRays,
      heroGlobeAlt,
      heroMegaphone,
      heroPhoto,
      heroSparkles,
      heroSwatch
    })
  ],
  template: `
    <section class="services-section" id="services">
      <div class="services-background" aria-hidden="true"></div>
      <div class="services-container">
        <div class="section-header" appScrollAnimation [animationType]="'fade-up'" [duration]="800">
          <div class="eyebrow">Expertises intégrées</div>
          <h2 class="section-title">Nos Services</h2>
          <p class="section-subtitle">
            Une équipe pluridisciplinaire qui transforme vos idées en expériences mémorables et performantes.
          </p>
        </div>

        <div class="services-grid">
          <div class="services-spotlight" appScrollReveal [stagger]="150">
            @for (service of spotlightServices; track service.title; let i = $index) {
              <article class="service-card spotlight stagger-item">
                <div class="icon-wrapper">
                  <ng-icon [name]="service.icon" size="28"></ng-icon>
                </div>
                <div class="card-content">
                  <h3>{{ service.title }}</h3>
                  <p class="tagline">{{ service.tagline }}</p>
                  <p class="description">{{ service.description }}</p>
                </div>
                <a class="card-cta" [href]="service.link">
                  <span>{{ service.cta }}</span>
                  <div class="cta-indicator"></div>
                </a>
              </article>
            }
          </div>

          <div class="services-core" appScrollReveal [stagger]="100" [delay]="200">
            <div class="core-grid">
              @for (service of coreServices; track service.title) {
                <article class="core-card stagger-item">
                  <div class="core-icon">
                    <ng-icon [name]="service.icon" size="20"></ng-icon>
                  </div>
                  <div class="core-body">
                    <h4>{{ service.title }}</h4>
                    <a [href]="service.link">{{ service.cta }}</a>
                  </div>
                </article>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './services-section.component.scss'
})
export class ServicesSectionComponent {
  services: Service[] = [
    {
      title: 'Stratégie de Communication',
      tagline: 'Positionnez votre marque avec clarté',
      description: 'Analyse, planning stratégique et plateformes de marque pour guider vos décisions et fédérer vos publics.',
      cta: 'Co-construire ma stratégie',
      icon: 'heroSparkles',
      category: 'spotlight',
      link: '/services/strategie'
    },
    {
      title: 'Gestion d\'Événements',
      tagline: 'Des expériences qui marquent',
      description: 'Conception, production et logistique d\'événements physiques, digitaux ou hybrides, de la scénographie à la diffusion.',
      cta: 'Imaginer mon expérience',
      icon: 'heroMegaphone',
      category: 'spotlight',
      link: '/services/evenements'
    },
    {
      title: 'Relations Publiques & Presse',
      tagline: 'Amplifiez votre influence',
      description: 'Gestion des relations médias, influence et communication de crise pour renforcer votre crédibilité et visibilité.',
      cta: 'Activer mes relations presse',
      icon: 'heroChartBar',
      category: 'spotlight',
      link: '/services/relations-presse'
    },
    {
      title: 'Branding & Identité',
      tagline: '',
      description: '',
      cta: 'Créer mon identité',
      icon: 'heroSwatch',
      category: 'core',
      link: '/services/branding'
    },
    {
      title: 'Production Multimédia',
      tagline: '',
      description: '',
      cta: 'Produire du contenu',
      icon: 'heroPhoto',
      category: 'core',
      link: '/services/multimedia'
    },
    {
      title: 'Campagnes Média',
      tagline: '',
      description: '',
      cta: 'Amplifier mon message',
      icon: 'heroBolt',
      category: 'core',
      link: '/services/campagnes'
    },
    {
      title: 'Marketing & Activation',
      tagline: '',
      description: '',
      cta: 'Activer ma campagne',
      icon: 'heroCursorArrowRays',
      category: 'core',
      link: '/services/marketing'
    },
    {
      title: 'Édition & Print',
      tagline: '',
      description: '',
      cta: 'Concevoir mes supports',
      icon: 'heroAcademicCap',
      category: 'core',
      link: '/services/edition'
    },
    {
      title: 'Digital & Web',
      tagline: '',
      description: '',
      cta: 'Développer ma présence',
      icon: 'heroGlobeAlt',
      category: 'core',
      link: '/services/digital'
    }
  ];

  get spotlightServices(): Service[] {
    return this.services.filter(service => service.category === 'spotlight');
  }

  get coreServices(): Service[] {
    return this.services.filter(service => service.category === 'core');
  }
}
