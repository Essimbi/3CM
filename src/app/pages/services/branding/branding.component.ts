import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroChevronRight, heroSwatch, heroSpeakerWave, heroPaintBrush, heroRocketLaunch, heroCube } from '@ng-icons/heroicons/outline';
import { CtaSectionComponent } from '../../../pages/home/sections/cta/cta-section.component';

@Component({
  selector: 'app-branding',
  standalone: true,
  imports: [CommonModule, NgIconComponent, CtaSectionComponent],
  providers: [
    provideIcons({
      heroChevronRight,
      heroSwatch,
      heroSpeakerWave,
      heroPaintBrush,
      heroRocketLaunch,
      heroCube
    })
  ],
  template: `
    <div class="service-page mt-4">
      <header class="service-header branding">
        <div class="header-overlay"></div>
        <div class="container">
          <div class="header-text">
            <span class="eyebrow">3CM BRANDING</span>
            <h1>Marketing, Publicité & Design</h1>
            <p class="lead">La réussite commerciale passe par une politique de communication active, pertinente et efficace. Maximisez vos ventes et visez le leadership.</p>
          </div>
        </div>
      </header>

      <section class="content-section">
        <div class="container">
          <div class="grid">
            <div class="main-content">
              <div class="visual-wrapper creative">
                <div class="blob-mask">
                  <img src="assets/services/branding_hero.png" alt="Creative Studio" class="featured-img" />
                </div>
                <div class="floating-dots"></div>
              </div>

              <h2>Forger l'identité de demain</h2>
              <p>Nous vous accompagnons pour définir les caractéristiques de marché, évaluer l’environnement concurrentiel, déterminer une stratégie de positionnement et de différenciation.</p>
              
              <div class="expertises-grid">
                <div class="expertise-card creative-card">
                  <div class="card-icon-wrapper">
                    <ng-icon name="heroPaintBrush" class="icon"></ng-icon>
                  </div>
                  <h3>Design Graphique</h3>
                  <ul>
                    <li>Identité visuelle & sonore</li>
                    <li>Logotypes & Pictogrammes</li>
                    <li>Charte graphique complète</li>
                    <li>Supports d'édition (Brochures, Plaquettes)</li>
                  </ul>
                </div>
                <div class="expertise-card creative-card">
                  <div class="card-icon-wrapper">
                    <ng-icon name="heroRocketLaunch" class="icon"></ng-icon>
                  </div>
                  <h3>Marketing & Publicité</h3>
                  <ul>
                    <li>Stratégie de marque (Off/On-line)</li>
                    <li>Campagnes publicitaires multi-supports</li>
                    <li>Lancement de produits</li>
                    <li>Web marketing & Marketing viral</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <aside class="sidebar">
              <div class="sidebar-block brand-accent">
                <h3>Expertises Créatives</h3>
                <ul class="check-list">
                  <li><ng-icon name="heroChevronRight"></ng-icon> Branding & Re-branding</li>
                  <li><ng-icon name="heroChevronRight"></ng-icon> Publicité Média (TV, Radio, Print)</li>
                  <li><ng-icon name="heroChevronRight"></ng-icon> Packaging & Signalétique</li>
                  <li><ng-icon name="heroChevronRight"></ng-icon> Motion Design & Vidéo</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section class="pillar-section bg-light">
        <div class="container">
          <div class="pillar-grid">
            <div class="pillar-item">
              <div class="pillar-icon-box">
                <ng-icon name="heroSwatch" size="32"></ng-icon>
              </div>
              <h3>Identité de Marque</h3>
              <p>Nous révélons votre univers et vous démarquons par une symbologie et une sémantique adaptée. Le fond définit la forme.</p>
            </div>
            <div class="pillar-item">
              <div class="pillar-icon-box">
                <ng-icon name="heroSpeakerWave" size="32"></ng-icon>
              </div>
              <h3>Publicité Créative</h3>
              <p>Des procédés alliant rigueur et créativité pour séduire, convaincre et fidéliser vos consommateurs.</p>
            </div>
            <div class="pillar-item">
              <div class="pillar-icon-box">
                <ng-icon name="heroCube" size="32"></ng-icon>
              </div>
              <h3>Packaging & Design</h3>
              <p>De la conception à la réalisation, nous sublimons vos produits pour les rendre remarquables en point de vente.</p>
            </div>
          </div>
        </div>
      </section>

      <app-cta-section></app-cta-section>
    </div>
  `,
  styles: [`
    .service-page {
      padding-top: 80px;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }
    .service-header {
      background: linear-gradient(135deg, rgba(230, 57, 70, 0.9) 0%, rgba(168, 34, 46, 0.8) 100%), url('/assets/services/branding_hero.png');
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      color: white;
      padding: 120px 0;
      position: relative;
    }
    .header-overlay {
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: radial-gradient(circle at 70% 50%, rgba(230, 57, 70, 0.2), transparent);
    }
    .eyebrow {
      display: inline-block;
      font-weight: 700;
      letter-spacing: 2px;
      margin-bottom: 20px;
      background: rgba(255,255,255,0.1);
      padding: 5px 15px;
      border-radius: 5px;
      backdrop-filter: blur(5px);
    }
    h1 {
      font-size: clamp(2.5rem, 5vw, 3.5rem);
      font-weight: 800;
      line-height: 1.1;
      margin-bottom: 30px;
    }
    .lead {
      font-size: 1.25rem;
      opacity: 0.9;
      max-width: 800px;
      line-height: 1.6;
    }
    .content-section {
      padding: 100px 0;
    }
    .grid {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 80px;
    }
    .visual-wrapper.creative {
      position: relative;
      margin-bottom: 60px;
    }
    .blob-mask {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
      overflow: hidden;
      box-shadow: 0 30px 60px rgba(230, 57, 70, 0.2);
      animation: blob-morph 20s ease-in-out infinite alternate;
      border: 8px solid white;
    }
    @keyframes blob-morph {
      0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
      50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
      100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
    }
    .featured-img {
      width: 100%;
      display: block;
      transition: transform 0.5s ease;
    }
    .featured-img:hover {
      transform: scale(1.05);
    }
    .floating-dots {
      position: absolute;
      top: -20px;
      right: -20px;
      width: 150px;
      height: 150px;
      background-image: radial-gradient(#e63946 2px, transparent 2px);
      background-size: 20px 20px;
      opacity: 0.3;
      z-index: -1;
    }
    h2 {
      font-size: 2.5rem;
      margin-bottom: 30px;
      color: #1a1a1a;
      letter-spacing: -0.5px;
    }
    .expertises-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 30px;
      margin-top: 50px;
    }
    .creative-card {
      background: white;
      padding: 40px;
      border-radius: 24px;
      border: 1px solid #f0f0f0;
      box-shadow: 0 20px 40px rgba(0,0,0,0.05);
      transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    .creative-card:hover {
      transform: translateY(-10px) rotate(2deg);
      box-shadow: 0 40px 80px rgba(230, 57, 70, 0.1);
      border-color: rgba(230, 57, 70, 0.3);
    }
    .card-icon-wrapper {
      width: 60px;
      height: 60px;
      background: rgba(230, 57, 70, 0.05);
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 25px;
    }
    .card-icon-wrapper .icon {
      font-size: 2rem;
      color: #e63946;
    }
    .creative-card h3 {
      font-size: 1.5rem;
      margin-bottom: 25px;
      color: #1a1a1a;
    }
    .creative-card ul {
      list-style: none;
      padding: 0;
    }
    .creative-card li {
      margin-bottom: 12px;
      color: #444;
      display: flex;
      align-items: center;
      font-weight: 500;
    }
    .creative-card li::before {
      content: "→";
      color: #e63946;
      margin-right: 12px;
      font-weight: bold;
    }
    .brand-accent {
      background: linear-gradient(135deg, #e63946 0%, #a8222e 100%);
      color: white;
      padding: 40px;
      border-radius: 24px;
      position: sticky;
      top: 120px;
      box-shadow: 0 40px 80px rgba(230, 57, 70, 0.2);
    }
    .brand-accent h3 {
      margin-bottom: 30px;
      font-size: 1.5rem;
    }
    .check-list {
      list-style: none;
      padding: 0;
    }
    .check-list li {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 20px;
      font-weight: 500;
      transition: transform 0.2s ease;
    }
    .check-list li:hover {
      transform: translateX(10px);
    }
    .bg-light {
      background: #fffdfd;
    }
    .pillar-section {
      padding: 100px 0;
    }
    .pillar-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 40px;
    }
    .pillar-item {
      background: white;
      padding: 50px 40px;
      border-radius: 30px;
      text-align: center;
      transition: all 0.3s ease;
      border: 1px solid #fef2f2;
    }
    .pillar-item:hover {
      background: #e63946;
      color: white;
    }
    .pillar-item:hover p { color: rgba(255,255,255,0.8); }
    .pillar-item:hover .pillar-icon-box { background: rgba(255,255,255,0.1); color: white; }
    
    .pillar-icon-box {
      width: 80px;
      height: 80px;
      background: #fef2f2;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 30px;
      color: #e63946;
      transition: all 0.3s ease;
    }
    .pillar-item h3 {
      margin-bottom: 15px;
      font-size: 1.5rem;
    }
    .pillar-item p {
      color: #64748b;
      line-height: 1.6;
    }
    @media (max-width: 968px) {
      .grid {
        grid-template-columns: 1fr;
      }
      .sidebar { order: -1; }
      .brand-accent { position: relative; top: 0; margin-bottom: 40px; }
      h1 { font-size: 2.8rem; }
    }
  `]
})
export class BrandingComponent { }
