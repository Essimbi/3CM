import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { HeroSectionComponent } from './sections/hero/hero-section.component';
import { ServicesSectionComponent } from './sections/services/services-section.component';
import { PortfolioSectionComponent } from './sections/portfolio/portfolio-section.component';
import { StatsSectionComponent } from './sections/stats/stats-section.component';
import { CtaSectionComponent } from './sections/cta/cta-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroSectionComponent,
    ServicesSectionComponent,
    PortfolioSectionComponent,
    StatsSectionComponent,
    CtaSectionComponent
  ],
  template: `
    <!-- <a href="#main-content" class="skip-link">Aller au contenu principal</a> -->
    
    <main id="main-content" role="main">
      <app-hero-section />
      <app-services-section />
      <app-portfolio-section />
      <app-stats-section />
      <app-cta-section />
    </main>
  `,
  styles: [`
    main {
      padding-top: 0;
    }
  `]
})
export class HomeComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title
  ) { }

  ngOnInit() {
    // SEO Meta Tags
    this.title.setTitle('3CM | Agence de Communication au Cameroun - Stratégie, Événementiel, Relations Presse');

    this.meta.updateTag({
      name: 'description',
      content: 'Agence de conseil en stratégie et communication au Cameroun. Expertise en gestion d\'événements, relations presse, branding et digital. Accompagnement des entreprises et institutions.'
    });

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: '3CM Communication - Agence au Cameroun' });
    this.meta.updateTag({ property: 'og:description', content: 'Transformez votre communication avec 3CM' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: 'https://3-c-m.com' });

    // Twitter Card
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: '3CM Communication' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Agence de communication au Cameroun' });

    // Keywords
    this.meta.updateTag({
      name: 'keywords',
      content: 'agence communication yaoundé, stratégie communication cameroun, gestion événement cameroun, relations presse yaoundé, branding cameroun'
    });
  }
}
