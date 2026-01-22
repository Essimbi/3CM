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
  heroSwatch,
  heroBuildingOffice2
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
      heroSwatch,
      heroBuildingOffice2
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

        <!-- <div class="services-footer" appScrollAnimation [animationType]="'fade-up'" [delay]="400">
          <a routerLink="/services" class="btn-outline">
            <span>Découvrir toutes nos expertises</span>
            <ng-icon name="heroBolt" size="18"></ng-icon>
          </a>
        </div> -->
      </div>
    </section>
  `,
  styleUrl: './services-section.component.scss'
})
export class ServicesSectionComponent {
  services: Service[] = [
    {
      title: '3CM Corporate',
      tagline: 'Conseil Stratégique & Management',
      description: 'Audit, planning stratégique, intelligence économique et communication interne pour poser une vision d’ensemble.',
      cta: 'Découvrir nos conseils',
      icon: 'heroSparkles',
      category: 'spotlight',
      link: '/services/corporate'
    },
    {
      title: '3CM Branding',
      tagline: 'Marketing, Publicité & Design',
      description: 'Maximisez vos ventes et visez le leadership par une identité forte et des campagnes publicitaires percutantes.',
      cta: 'Forger mon image',
      icon: 'heroSwatch',
      category: 'spotlight',
      link: '/services/branding'
    },
    {
      title: '3CM Influence',
      tagline: 'Relations Médias & Presse',
      description: 'Gestion de réputation, média-training et communication de crise pour amplifier votre influence.',
      cta: 'Activer mon influence',
      icon: 'heroChartBar',
      category: 'spotlight',
      link: '/services/influence'
    },
    {
      title: '3CM Digital',
      tagline: 'Stratégie & Création Web',
      description: 'Sites internet, SEO, E-réputation et transformation digitale pour exister avec force sur le web.',
      cta: 'Démarrer ma transition',
      icon: 'heroGlobeAlt',
      category: 'core',
      link: '/services/digital'
    },
    {
      title: 'Adrénaline (IA)',
      tagline: 'L’Agence IA qui booste votre créativité',
      description: 'Génération visuelle, automation ChatGPT et personnalités virtuelles pour le futur de votre communication.',
      cta: 'Explorer le futur',
      icon: 'heroBolt',
      category: 'core',
      link: '/services/digital'
    },
    {
      title: '3CM Events',
      tagline: 'Expériences & Production',
      description: 'Conception et réalisation technique de séminaires, congrès et opérations grand public d\'envergure.',
      cta: 'Imaginer mon event',
      icon: 'heroMegaphone',
      category: 'core',
      link: '/services/events'
    },
    {
      title: 'Aménagement (Workspace)',
      tagline: 'Design & Ergonomie',
      description: 'Conception d’espaces de travail inspirants et fonctionnels pour booster la productivité et le bien-être.',
      cta: 'Repenser mes bureaux',
      icon: 'heroBuildingOffice2',
      category: 'core',
      link: '/services/workspace'
    }
  ];

  get spotlightServices(): Service[] {
    return this.services.filter(service => service.category === 'spotlight');
  }

  get coreServices(): Service[] {
    return this.services.filter(service => service.category === 'core');
  }
}
