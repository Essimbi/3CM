import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../../../core/directives/scroll-reveal.directive';
import { ScrollAnimationDirective } from '../../../../core/directives/scroll-animation.directive';

interface Project {
    title: string;
    category: string;
    description: string;
    image: string;
    tags: string[];
}

@Component({
    selector: 'app-portfolio-section',
    standalone: true,
    imports: [CommonModule, ScrollRevealDirective, ScrollAnimationDirective],
    template: `
    <section class="portfolio-section" id="portfolio">
      <div class="portfolio-container">
        <div class="section-header" appScrollAnimation [animationType]="'fade-up'" [duration]="800">
          <div class="eyebrow">Nos Réalisations</div>
          <h2 class="section-title">Projets Récents</h2>
          <p class="section-subtitle">
            Découvrez quelques-uns des projets que nous avons eu le plaisir de réaliser pour nos clients.
          </p>
        </div>

        <div class="portfolio-grid" appScrollReveal [stagger]="120">
          @for (project of projects; track project.title) {
            <article class="project-card stagger-item">
              <div class="project-image">
                <img 
                  [src]="project.image" 
                  [alt]="project.title"
                  loading="lazy"
                />
                <div class="image-overlay">
                  <div class="overlay-content">
                    <span class="category-badge">{{ project.category }}</span>
                  </div>
                </div>
              </div>
              <div class="project-content">
                <h3>{{ project.title }}</h3>
                <p>{{ project.description }}</p>
                <div class="project-tags">
                  @for (tag of project.tags; track tag) {
                    <span class="tag">{{ tag }}</span>
                  }
                </div>
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
    styleUrl: './portfolio-section.component.scss'
})
export class PortfolioSectionComponent {
    projects: Project[] = [
        {
            title: 'Lancement Produit Tech',
            category: 'Événementiel',
            description: 'Organisation d\'un événement de lancement pour une startup tech avec 200+ participants.',
            image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop&q=80',
            tags: ['Événement', 'Digital', 'Médias']
        },
        {
            title: 'Campagne Institutionnelle',
            category: 'Communication',
            description: 'Stratégie de communication complète pour une institution publique camerounaise.',
            image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop&q=80',
            tags: ['Stratégie', 'Relations Presse', 'Branding']
        },
        {
            title: 'Festival Culturel',
            category: 'Événementiel',
            description: 'Production et gestion d\'un festival culturel de 3 jours avec artistes internationaux.',
            image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop&q=80',
            tags: ['Événement', 'Production', 'Logistique']
        },
        {
            title: 'Rebranding Corporate',
            category: 'Branding',
            description: 'Refonte complète de l\'identité visuelle d\'une entreprise leader dans son secteur.',
            image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop&q=80',
            tags: ['Branding', 'Design', 'Stratégie']
        },
        {
            title: 'Campagne Digitale',
            category: 'Digital',
            description: 'Campagne social media multicanale avec +2M d\'impressions en 3 mois.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80',
            tags: ['Social Media', 'Contenu', 'Analytics']
        },
        {
            title: 'Conférence Internationale',
            category: 'Événementiel',
            description: 'Organisation d\'une conférence hybride avec 500+ participants en présentiel et virtuel.',
            image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop&q=80',
            tags: ['Événement', 'Hybride', 'Tech']
        }
    ];
}
