import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="page-container">
      <header class="page-header">
        <div class="header-content">
          <h1 class="page-title">À Propos de 3CM</h1>
          <p class="page-subtitle">Une passion pour la communication, un engagement pour l'excellence.</p>
        </div>
      </header>
      
      <main class="page-content">
        <p>Notre histoire commence ici...</p>
      </main>
    </div>
  `,
    styles: [`
    .page-container {
      padding-top: 100px;
    }
    .page-header {
      background: linear-gradient(135deg, #1a1a1a 0%, #333 100%);
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
export class AboutComponent { }
