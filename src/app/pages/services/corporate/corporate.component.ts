import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroChevronRight, heroLightBulb, heroPresentationChartLine, heroUserGroup, heroChatBubbleLeftRight, heroShieldCheck } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-corporate',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  providers: [
    provideIcons({
      heroChevronRight,
      heroLightBulb,
      heroPresentationChartLine,
      heroUserGroup,
      heroChatBubbleLeftRight,
      heroShieldCheck
    })
  ],
  template: `
    <div class="service-page mt-4">
      <header class="service-header corporate">
        <div class="header-overlay"></div>
        <div class="container">
          <div class="header-grid">
            <div class="header-text">
              <span class="eyebrow">3CM CORPORATE</span>
              <h1>Conseil Stratégique & Management</h1>
              <p class="lead">Penser les moyens avant les finalités est l’un des travers majeurs de la communication aujourd’hui. Nous vous assistons pour poser en amont une vision d’ensemble.</p>
            </div>
          </div>
        </div>
      </header>

      <section class="content-section">
        <div class="container">
          <div class="grid">
            <div class="main-content">
              <div class="visual-wrapper">
                <div class="image-mask">
                  <img src="assets/services/corporate_hero.png" alt="Strategic Strategy" class="featured-img" />
                </div>
                <div class="accent-shape geometric"></div>
              </div>

              <h2>L'excellence stratégique au service de votre vision</h2>
              <p>Nous vous assistons pour mettre en place une réflexion stratégique, destinée à poser en amont une vision d’ensemble et un objectif global, fondement préalable à toute tentative de planification cohérente de la communication.</p>
              
              <div class="expertises-grid">
                <div class="expertise-card glass-card">
                  <div class="card-icon-wrapper">
                    <ng-icon name="heroPresentationChartLine" class="icon"></ng-icon>
                  </div>
                  <h3>Audit & Conseil</h3>
                  <ul>
                    <li>Audit de situation</li>
                    <li>Études de perception</li>
                    <li>Conception et planification stratégique</li>
                    <li>Définition de positionnement</li>
                  </ul>
                </div>
                <div class="expertise-card glass-card">
                  <div class="card-icon-wrapper">
                    <ng-icon name="heroShieldCheck" class="icon"></ng-icon>
                  </div>
                  <h3>Image & Réputation</h3>
                  <ul>
                    <li>Construction d’image et de réputation</li>
                    <li>Stratégies d’information</li>
                    <li>Dispositifs d’influence</li>
                    <li>Lancement de marque</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <aside class="sidebar">
              <div class="sidebar-block sticky-card">
                <h3>Nos domaines d'intervention</h3>
                <ul class="check-list">
                  <li><ng-icon name="heroChevronRight"></ng-icon> Business Intelligence</li>
                  <li><ng-icon name="heroChevronRight"></ng-icon> Communication Institutionnelle</li>
                  <li><ng-icon name="heroChevronRight"></ng-icon> Communication Interne</li>
                  <li><ng-icon name="heroChevronRight"></ng-icon> Coaching Dirigeant</li>
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
                <ng-icon name="heroLightBulb" size="32"></ng-icon>
              </div>
              <h3>Business Intelligence</h3>
              <p>Maîtriser l'information pour anticiper les risques et saisir les opportunités. Notre cellule de veille offre une vision 360° de votre environnement.</p>
            </div>
            <div class="pillar-item">
              <div class="pillar-icon-box">
                <ng-icon name="heroUserGroup" size="32"></ng-icon>
              </div>
              <h3>Communication Interne</h3>
              <p>Fédérer vos équipes autour d'un projet commun. Nous favorisons l'écoute et la motivation au sein de votre organisation.</p>
            </div>
            <div class="pillar-item">
              <div class="pillar-icon-box">
                <ng-icon name="heroChatBubbleLeftRight" size="32"></ng-icon>
              </div>
              <h3>Coaching Dirigeant</h3>
              <p>Postures de leadership, prise de parole en public et gestion de crise. Nous accompagnons les dirigeants dans leur excellence managériale.</p>
            </div>
          </div>
        </div>
      </section>
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
      background: linear-gradient(135deg, rgba(13, 92, 134, 0.9) 0%, rgba(49, 163, 221, 0.8) 100%), url('/assets/services/corporate_hero.png');
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      color: white;
      padding: 120px 0;
      position: relative;
      overflow: hidden;
    }
    .header-overlay {
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: radial-gradient(circle at 70% 50%, rgba(49, 163, 221, 0.2), transparent);
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
      text-shadow: 0 10px 20px rgba(0,0,0,0.2);
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
    .visual-wrapper {
      position: relative;
      margin-bottom: 60px;
    }
    .image-mask {
      border-radius: 30px;
      overflow: hidden;
      box-shadow: 0 30px 60px rgba(0,0,0,0.15);
      transform: perspective(1000px) rotateY(-5deg);
      transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
    .image-mask:hover {
      transform: perspective(1000px) rotateY(0deg) scale(1.02);
    }
    .featured-img {
      width: 100%;
      display: block;
    }
    .accent-shape.geometric {
      position: absolute;
      bottom: -30px;
      right: -30px;
      width: 200px;
      height: 200px;
      background: linear-gradient(135deg, #31a3dd 0%, #0d5c86 100%);
      z-index: -1;
      border-radius: 20% 80% 80% 20% / 20% 20% 80% 80%;
      opacity: 0.2;
      animation: morph 15s ease-in-out infinite alternate;
    }
    @keyframes morph {
      0% { border-radius: 20% 80% 80% 20% / 20% 20% 80% 80%; }
      50% { border-radius: 50% 50% 50% 50% / 30% 70% 30% 70%; }
      100% { border-radius: 80% 20% 20% 80% / 80% 80% 20% 20%; }
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
    .glass-card {
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(10px);
      padding: 40px;
      border-radius: 24px;
      border: 1px solid rgba(255, 255, 255, 0.5);
      box-shadow: 0 20px 40px rgba(0,0,0,0.05);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .glass-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 30px 60px rgba(0,0,0,0.1);
    }
    .card-icon-wrapper {
      width: 60px;
      height: 60px;
      background: rgba(49, 163, 221, 0.1);
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 25px;
    }
    .card-icon-wrapper .icon {
      font-size: 2rem;
      color: #31a3dd;
    }
    .expertise-card h3 {
      font-size: 1.5rem;
      margin-bottom: 25px;
      color: #1a1a1a;
    }
    .expertise-card ul {
      list-style: none;
      padding: 0;
    }
    .expertise-card li {
      margin-bottom: 12px;
      color: #444;
      display: flex;
      align-items: center;
      font-weight: 500;
    }
    .expertise-card li::before {
      content: "";
      width: 6px;
      height: 6px;
      background: #31a3dd;
      border-radius: 50%;
      margin-right: 12px;
    }
    .sticky-card {
      background: #0d5c86;
      color: white;
      padding: 40px;
      border-radius: 24px;
      position: sticky;
      top: 120px;
      box-shadow: 0 40px 80px rgba(13, 92, 134, 0.2);
    }
    .sticky-card h3 {
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
    .check-list li ng-icon {
      color: #31a3dd;
      background: white;
      border-radius: 50%;
      padding: 4px;
    }
    .bg-light {
      background: #f8faff;
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
      border: 1px solid #f0f4f8;
    }
    .pillar-item:hover {
      background: #0d5c86;
      color: white;
    }
    .pillar-item:hover p { color: rgba(255,255,255,0.8); }
    .pillar-item:hover .pillar-icon-box { background: rgba(255,255,255,0.1); color: white; }
    
    .pillar-icon-box {
      width: 80px;
      height: 80px;
      background: #f0f7ff;
      border-radius: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 30px;
      color: #31a3dd;
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
      .sticky-card { position: relative; top: 0; margin-bottom: 40px; }
      h1 { font-size: 2.8rem; }
    }
  `]
})
export class CorporateComponent { }
