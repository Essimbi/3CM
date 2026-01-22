import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroChevronRight, heroGlobeAlt, heroMagnifyingGlass, heroDevicePhoneMobile, heroBolt, heroSparkles, heroCpuChip, heroChatBubbleLeftRight } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-digital',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  providers: [
    provideIcons({
      heroChevronRight,
      heroGlobeAlt,
      heroMagnifyingGlass,
      heroDevicePhoneMobile,
      heroBolt,
      heroSparkles,
      heroCpuChip,
      heroChatBubbleLeftRight
    })
  ],
  template: `
    <div class="service-page mt-4">
      <header class="service-header digital">
        <div class="header-overlay"></div>
        <div class="container">
          <div class="header-text">
            <span class="eyebrow">3CM DIGITAL & IA</span>
            <h1>Transformation & Innovation Numérique</h1>
            <p class="lead">L'internet change profondément les relations entre une entreprise et ses publics. Nous vous aidons à concevoir une stratégie digitale adaptée à vos ambitions.</p>
          </div>
        </div>
      </header>

      <section class="content-section">
        <div class="container">
          <div class="grid">
            <div class="main-content">
              <div class="visual-wrapper digital-viz">
                <div class="glow-container">
                  <img src="assets/services/digital_ai_hero.png" alt="Digital AI" class="featured-img" />
                </div>
                <div class="data-particles"></div>
              </div>

              <h2>Exister sur internet est un enjeu de taille</h2>
              <p>Audit de l’existant, benchmark concurrentiel, étude de positionnement, spécificités du marketing digital, stratégies de contenu, analyses et mesures de la performance.</p>
              
              <div class="expertises-grid">
                <div class="expertise-card digital-card">
                  <div class="card-icon-wrapper">
                    <ng-icon name="heroGlobeAlt" class="icon"></ng-icon>
                  </div>
                  <h3>Création Web</h3>
                  <ul>
                    <li>Conception & Refonte de sites</li>
                    <li>E-commerce & Portails web</li>
                    <li>Expérience Utilisateur (UX/UI)</li>
                    <li>Responsive Design & Mobile-first</li>
                  </ul>
                </div>
                <div class="expertise-card digital-card">
                  <div class="card-icon-wrapper">
                    <ng-icon name="heroMagnifyingGlass" class="icon"></ng-icon>
                  </div>
                  <h3>Webmarketing & SEO</h3>
                  <ul>
                    <li>Référencement Naturel (SEO)</li>
                    <li>Référencement Payant (SEA)</li>
                    <li>E-réputation & Personal Branding</li>
                    <li>Community Management</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <aside class="sidebar">
              <div class="sidebar-block digital-accent">
                <h3>Leviers Digitaux</h3>
                <ul class="check-list">
                  <li><ng-icon name="heroChevronRight"></ng-icon> Stratégie de Content Marketing</li>
                  <li><ng-icon name="heroChevronRight"></ng-icon> E-mailing & Newsletters</li>
                  <li><ng-icon name="heroChevronRight"></ng-icon> Applications Mobiles</li>
                  <li><ng-icon name="heroChevronRight"></ng-icon> Publicité Digitale (Display)</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <!-- Section IA Premium: Adrénaline -->
      <section class="ai-section">
        <div class="container">
          <div class="ai-card glass-morph">
            <div class="ai-header">
              <span class="ai-badge"><ng-icon name="heroSparkles"></ng-icon> ADRENALINE - Agence IA</span>
              <h2>Boostez votre créativité avec l'IA</h2>
              <p>Bienvenue dans le futur de la communication. Nous conjuguons expertise humaine et puissance des IA génératives pour des campagnes éblouissantes.</p>
            </div>
            
            <div class="ai-features">
              <div class="feature-item glow-hover">
                <div class="feature-icon">
                  <ng-icon name="heroCpuChip"></ng-icon>
                </div>
                <div>
                  <h4>Génération Visuelle & Vidéo</h4>
                  <p>Midjourney, Stable Diffusion, Luma, Runway Gen-3 pour des visuels impactants.</p>
                </div>
              </div>
              <div class="feature-item glow-hover">
                <div class="feature-icon">
                  <ng-icon name="heroChatBubbleLeftRight"></ng-icon>
                </div>
                <div>
                  <h4>Automation ChatGPT</h4>
                  <p>Posts percutants, articles SEO et agents conversationnels intelligents.</p>
                </div>
              </div>
              <div class="feature-item glow-hover">
                <div class="feature-icon">
                  <ng-icon name="heroBolt"></ng-icon>
                </div>
                <div>
                  <h4>Personnalités Virtuelles</h4>
                  <p>Influenceurs IA et avatars personnalisés pour incarner votre marque.</p>
                </div>
              </div>
            </div>

            <!-- Visual element for IA section -->
            <div class="ai-visual-bg">
              <img src="assets/services/digital_ai_hero.png" alt="AI Neural Network" />
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
      background: linear-gradient(135deg, rgba(67, 97, 238, 0.9) 0%, rgba(63, 55, 201, 0.8) 100%), url('/assets/services/digital_ai_hero.png');
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
      background: radial-gradient(circle at 70% 50%, rgba(76, 201, 240, 0.2), transparent);
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
    .visual-wrapper.digital-viz {
      position: relative;
      margin-bottom: 60px;
    }
    .glow-container {
      border-radius: 30px;
      overflow: hidden;
      box-shadow: 0 0 50px rgba(67, 97, 238, 0.3);
      border: 1px solid rgba(67, 97, 238, 0.2);
    }
    .data-particles {
      position: absolute;
      top: -30px;
      right: -30px;
      width: 100%;
      height: 100%;
      background-image: radial-gradient(#4cc9f0 1px, transparent 1px);
      background-size: 40px 40px;
      opacity: 0.1;
      z-index: -1;
    }
    .featured-img {
      width: 100%;
      display: block;
      transition: filter 0.5s ease;
    }
    .featured-img:hover {
      filter: brightness(1.1) contrast(1.1);
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
    .digital-card {
      background: white;
      padding: 40px;
      border-radius: 24px;
      border: 1px solid #f0f0f0;
      box-shadow: 0 20px 40px rgba(0,0,0,0.05);
      transition: all 0.3s ease;
    }
    .digital-card:hover {
      border-color: #4361ee;
      box-shadow: 0 30px 60px rgba(67, 97, 238, 0.1);
    }
    .card-icon-wrapper {
      width: 60px;
      height: 60px;
      background: rgba(67, 97, 238, 0.05);
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 25px;
    }
    .card-icon-wrapper .icon {
      font-size: 2rem;
      color: #4361ee;
    }
    .digital-card h3 {
      font-size: 1.5rem;
      margin-bottom: 25px;
      color: #1a1a1a;
    }
    .digital-card ul {
      list-style: none;
      padding: 0;
    }
    .digital-card li {
      margin-bottom: 12px;
      color: #444;
      display: flex;
      align-items: center;
      font-weight: 500;
    }
    .digital-card li::before {
      content: "{ }";
      color: #4361ee;
      margin-right: 12px;
      font-family: monospace;
      font-size: 0.8rem;
    }
    .digital-accent {
      background: #3f37c9;
      color: white;
      padding: 40px;
      border-radius: 24px;
      position: sticky;
      top: 120px;
      box-shadow: 0 40px 80px rgba(63, 55, 201, 0.2);
    }
    .digital-accent h3 {
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
      color: white;
      transition: transform 0.2s ease;
    }
    .check-list li:hover {
      transform: translateX(10px);
      color: #4cc9f0;
    }
    .bg-light {
      background: #f8faff;
    }

    /* AI Section Premium */
    .ai-section {
      padding: 100px 0;
      background: #0b0d17;
      color: white;
    }
    .glass-morph {
      background: rgba(26, 28, 44, 0.6);
      backdrop-filter: blur(20px);
      padding: 80px 60px;
      border-radius: 40px;
      border: 1px solid rgba(255,255,255,0.1);
      position: relative;
      overflow: hidden;
      box-shadow: 0 50px 100px rgba(0,0,0,0.5);
    }
    .ai-visual-bg {
      position: absolute;
      right: -100px;
      top: -50px;
      width: 600px;
      opacity: 0.15;
      z-index: 0;
      pointer-events: none;
      mix-blend-mode: screen;
      animation: float-ai 20s infinite alternate linear;
    }
    @keyframes float-ai {
      from { transform: translate(0, 0) rotate(0deg); }
      to { transform: translate(30px, 30px) rotate(5deg); }
    }
    .ai-header {
      position: relative;
      z-index: 1;
      margin-bottom: 60px;
    }
    .ai-badge {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: rgba(67, 97, 238, 0.2);
      color: #4cc9f0;
      padding: 8px 24px;
      border-radius: 100px;
      font-weight: 700;
      letter-spacing: 1px;
      margin-bottom: 30px;
      border: 1px solid rgba(76, 201, 240, 0.3);
      text-transform: uppercase;
      font-size: 0.8rem;
    }
    .ai-header h2 {
      font-size: clamp(2.5rem, 4vw, 3.5rem);
      margin-bottom: 20px;
      background: linear-gradient(to right, #ffffff, #4cc9f0, #4361ee);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: 900;
    }
    .ai-header p {
      font-size: 1.25rem;
      color: #94a3b8;
      max-width: 700px;
      line-height: 1.6;
    }
    .ai-features {
      position: relative;
      z-index: 1;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 40px;
    }
    .feature-item {
      background: rgba(255,255,255,0.03);
      padding: 40px;
      border-radius: 24px;
      border: 1px solid rgba(255,255,255,0.05);
      transition: all 0.4s ease;
      display: flex;
      flex-direction: column;
      gap: 25px;
    }
    .feature-item.glow-hover:hover {
      background: rgba(67, 97, 238, 0.08);
      border-color: rgba(76, 201, 240, 0.3);
      transform: translateY(-10px);
      box-shadow: 0 20px 40px rgba(67, 97, 238, 0.2);
    }
    .feature-icon {
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, #4361ee, #4cc9f0);
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 1.8rem;
      box-shadow: 0 10px 20px rgba(67, 97, 238, 0.3);
    }
    .feature-item h4 {
      font-size: 1.4rem;
      font-weight: 700;
      color: #f8fafc;
    }
    .feature-item p {
      color: #94a3b8;
      line-height: 1.6;
      font-size: 1rem;
    }

    @media (max-width: 968px) {
      .ai-features {
        grid-template-columns: 1fr;
      }
      .glass-morph { padding: 40px 30px; }
      h1 { font-size: 2.8rem; }
      .grid { grid-template-columns: 1fr; }
      .sidebar { order: -1; }
      .digital-accent { position: relative; top: 0; margin-bottom: 40px; }
    }
  `]
})
export class DigitalComponent { }
