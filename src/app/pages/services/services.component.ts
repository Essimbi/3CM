import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-services',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="page-container">
      <header class="page-header">
        <div class="header-content">
          <h1 class="page-title">Nos Services</h1>
          <p class="page-subtitle">Expertise 360° pour vos projets d'envergure.</p>
        </div>
      </header>
      
      <main class="page-content">
        <div class="content-section">
          <h2>Stratégie & Conseil</h2>
          <p>Nous vous accompagnons dans la définition de votre vision et de vos objectifs de communication.</p>
        </div>
        <!-- Plus de contenu sera ajouté ici -->
      </main>
    </div>
  `,
    styles: [`
    .page-container {
      padding-top: 100px;
    }
    .page-header {
      background: linear-gradient(135deg, #31a3dd 0%, #0d5c86 100%);
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
export class ServicesComponent { }
