import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-container mt-4">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-overlay"></div>
        <div class="container">
          <div class="hero-content">
            <h1 class="hero-title">Nos Réalisations</h1>
            <p class="hero-subtitle">
              Nous transformons des idées audacieuses en expériences mémorables. 
              Découvrez comment nous accompagnons nos clients vers l'excellence.
            </p>
          </div>
        </div>
      </section>

      <main class="container page-content">
        <!-- Filters -->
        <div class="filter-section">
          <div class="filter-container">
            <button 
              *ngFor="let cat of categories" 
              (click)="selectedCategory = cat"
              [class.active]="selectedCategory === cat"
              class="filter-btn">
              {{ cat }}
            </button>
          </div>
        </div>

        <!-- Project Grid -->
        <div class="projects-grid">
          <div 
            *ngFor="let project of filteredProjects" 
            class="project-card"
            [attr.data-category]="project.category">
            <div class="card-image-wrapper">
              <img [src]="project.image" [alt]="project.title" class="project-image">
              <div class="card-overlay">
                <span class="category-tag">{{ project.category }}</span>
                <p class="project-desc">{{ project.description }}</p>
              </div>
            </div>
            <div class="card-info">
              <h3 class="project-title">{{ project.title }}</h3>
            </div>
          </div>
        </div>

        <!-- CTA Section -->
        <section class="cta-section">
          <div class="cta-card">
            <h2 class="cta-title">Prêt à donner vie à vos projets ?</h2>
            <p class="cta-text">
              Que vous soyez une start-up ambitieuse ou une entreprise établie, 
              notre équipe est prête à vous accompagner dans votre transformation digitale.
            </p>
            <button class="cta-btn">Parlons de votre projet</button>
          </div>
        </section>
      </main>
    </div>
  `,
  styles: [`
    @import '../../../styles/variables';

    .page-container {
      background-color: $background-light;
      min-height: 100vh;
    }

    // Hero Section
    .hero-section {
      position: relative;
      height: 60vh;
      min-height: 400px;
      display: flex;
      align-items: center;
      background: url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2070') center/cover no-repeat;
      margin-top: 0;
      color: white;

      .hero-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, rgba($secondary-color, 0.9) 0%, rgba($primary-color, 0.7) 100%);
        z-index: 1;
      }

      .container {
        position: relative;
        z-index: 2;
        max-width: $container-max-width;
        margin: 0 auto;
        padding: 0 $container-padding;
      }

      .hero-content {
        max-width: 800px;
        animation: fadeInUp 1s ease-out;
      }

      .hero-title {
        font-family: $font-family-heading;
        font-size: clamp($font-size-h1-mobile, 8vw, $font-size-h1);
        font-weight: $font-weight-bold;
        margin-bottom: $spacing-lg;
        line-height: $line-height-tight;
      }

      .hero-subtitle {
        font-size: clamp(1.1rem, 2vw, 1.4rem);
        opacity: 0.9;
        line-height: $line-height-relaxed;
        max-width: 600px;
      }
    }

    // Content Section
    .container {
      max-width: $container-max-width;
      margin: 0 auto;
      padding: 0 $container-padding;
    }

    .page-content {
      padding: $spacing-4xl 0;
    }

    // Filters
    .filter-section {
      margin-bottom: $spacing-4xl;
      display: flex;
      justify-content: center;
    }

    .filter-container {
      display: flex;
      flex-wrap: wrap;
      gap: $spacing-md;
      background: $background-accent;
      padding: $spacing-sm;
      border-radius: $radius-full;
      box-shadow: $shadow-sm;

      @media (max-width: $breakpoint-mobile) {
        border-radius: $radius-xl;
        justify-content: center;
      }
    }

    .filter-btn {
      padding: $spacing-sm $spacing-xl;
      border-radius: $radius-full;
      border: none;
      background: transparent;
      color: $text-muted;
      font-weight: $font-weight-medium;
      cursor: pointer;
      transition: $transition-base;

      &:hover {
        color: $primary-color;
      }

      &.active {
        background: $primary-color;
        color: white;
        box-shadow: $shadow-md;
      }
    }

    // Projects Grid
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: $spacing-2xl;

      @media (max-width: $breakpoint-mobile) {
        grid-template-columns: 1fr;
      }
    }

    .project-card {
      background: white;
      border-radius: $radius-xl;
      overflow: hidden;
      box-shadow: $shadow-md;
      transition: $transition-slow;
      cursor: pointer;
      border: 1px solid $gray-200;

      &:hover {
        transform: translateY(-10px);
        box-shadow: $shadow-xl;

        .project-image {
          transform: scale(1.1);
        }

        .card-overlay {
          opacity: 1;
        }
      }
    }

    .card-image-wrapper {
      position: relative;
      height: 250px;
      overflow: hidden;

      .project-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
      }

      .card-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba($secondary-color, 0.85);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: $spacing-xl;
        opacity: 0;
        transition: $transition-base;
        color: white;
        text-align: center;
      }

      .category-tag {
        position: absolute;
        top: $spacing-md;
        left: $spacing-md;
        background: $primary-color;
        color: white;
        padding: $spacing-xs $spacing-md;
        border-radius: $radius-full;
        font-size: $font-size-tiny;
        font-weight: $font-weight-bold;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }

      .project-desc {
        font-size: $font-size-small;
        line-height: $line-height-normal;
      }
    }

    .card-info {
      padding: $spacing-xl;
      
      .project-title {
        font-family: $font-family-heading;
        font-size: $font-size-h4;
        font-weight: $font-weight-bold;
        color: $text-dark;
        margin: 0;
      }
    }

    // CTA Section
    .cta-section {
      margin-top: $spacing-5xl;
      animation: fadeInUp 1s ease-out 0.4s both;
    }

    .cta-card {
      background: $primary-gradient;
      border-radius: $radius-2xl;
      padding: $spacing-4xl;
      text-align: center;
      color: white;
      box-shadow: $shadow-2xl;
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
        pointer-events: none;
      }
    }

    .cta-title {
      font-family: $font-family-heading;
      font-size: clamp($font-size-h3, 4vw, $font-size-h2);
      font-weight: $font-weight-bold;
      margin-bottom: $spacing-md;
      color: #ffffff;
    }

    .cta-text {
      font-size: $font-size-body;
      max-width: 600px;
      margin: 0 auto $spacing-2xl;
      opacity: 0.9;
      line-height: $line-height-relaxed;
    }

    .cta-btn {
      background: white;
      color: $secondary-color;
      padding: $spacing-md $spacing-4xl;
      border-radius: $radius-full;
      border: none;
      font-weight: $font-weight-bold;
      font-size: $font-size-body;
      cursor: pointer;
      transition: $transition-base;
      box-shadow: $shadow-lg;

      &:hover {
        transform: translateY(-3px);
        box-shadow: $shadow-xl;
        background: $gray-100;
      }
      
      &:active {
        transform: translateY(-1px);
      }
    }

    // Animations
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `]
})
export class PortfolioComponent implements OnInit {
  selectedCategory: string = 'Tous';
  categories: string[] = ['Tous', 'Digital', 'Branding', 'Print', 'Event', 'Marketing'];

  projects: Project[] = [
    {
      id: 1,
      title: 'Dovaslink',
      category: 'Digital',
      description: 'Développement d’une plateforme web complexe orientée expérience utilisateur.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 2,
      title: 'Campagne Scolaire 2020',
      category: 'Print',
      description: 'Conception d’une plaquette événementielle et supports de communication pour la rentrée.',
      image: 'https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 3,
      title: 'Missolia Pôle Tech',
      category: 'Digital',
      description: 'Accompagnement technologique et développement de solutions innovantes.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 4,
      title: 'Branding Institutionnel',
      category: 'Branding',
      description: 'Création d’une identité visuelle forte et cohérente pour un acteur majeur.',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 5,
      title: 'Sacs Promotionnels',
      category: 'Branding',
      description: 'Packaging et objets promotionnels haut de gamme pour renforcer l’image de marque.',
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 6,
      title: 'Stratégie Digitale Globale',
      category: 'Marketing',
      description: 'Mise en place d’une stratégie de visibilité et d’achat médias sur le web.',
      image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 7,
      title: 'Supports Événementiels',
      category: 'Event',
      description: 'Roll-ups, fonds de scène et signalétique pour salons internationaux.',
      image: 'https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&q=80&w=800'
    }
  ];

  ngOnInit() { }

  get filteredProjects(): Project[] {
    if (this.selectedCategory === 'Tous') {
      return this.projects;
    }
    return this.projects.filter(p => p.category === this.selectedCategory);
  }
}
