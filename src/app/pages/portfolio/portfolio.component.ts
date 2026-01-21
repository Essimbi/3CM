import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-portfolio',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="page-container">
      <header class="page-header">
        <div class="header-content">
          <h1 class="page-title">Nos Réalisations</h1>
          <p class="page-subtitle">Découvrez l'impact de nos stratégies à travers nos projets.</p>
        </div>
      </header>
      
      <main class="page-content">
        <p>Le portfolio complet arrive bientôt...</p>
      </main>
    </div>
  `,
    styles: [`
    .page-container {
      padding-top: 100px;
    }
    .page-header {
      background: linear-gradient(135deg, #0d5c86 0%, #31a3dd 100%);
      color: white;
      padding: 100px 20px;
      text-align: center;
    }
    .page-title {
      font-size: 3.5rem;
      margin-bottom: 1rem;
    }
    .page-content {
      padding: 80px 20px;
      max-width: 1200px;
      margin: 0 auto;
    }
  `]
})
export class PortfolioComponent { }
