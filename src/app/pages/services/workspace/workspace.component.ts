import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroChevronRight, heroBuildingOffice2, heroLightBulb, heroUserGroup, heroPuzzlePiece, heroScale } from '@ng-icons/heroicons/outline';
import { CtaSectionComponent } from '../../../pages/home/sections/cta/cta-section.component';

@Component({
    selector: 'app-workspace',
    standalone: true,
    imports: [CommonModule, NgIconComponent, CtaSectionComponent],
    providers: [
        provideIcons({
            heroChevronRight,
            heroBuildingOffice2,
            heroLightBulb,
            heroUserGroup,
            heroPuzzlePiece,
            heroScale
        })
    ],
    template: `
    <div class="service-page mt-4">
      <header class="service-header workspace">
        <div class="header-overlay"></div>
        <div class="animated-bg-elements">
          <div class="floating-shape shape-1"></div>
          <div class="floating-shape shape-2"></div>
          <div class="floating-shape shape-3"></div>
        </div>
        <div class="container">
          <div class="header-text">
            <span class="eyebrow">3CM WORKSPACE</span>
            <h1>Aménagement d'Espace & Design</h1>
            <p class="lead">Transformez vos bureaux en un levier de performance. Nous concevons des environnements de travail qui reflètent votre culture et stimulent la collaboration.</p>
          </div>
        </div>
      </header>

      <section class="content-section">
        <div class="container">
          <div class="grid">
            <div class="main-content">
              <div class="visual-wrapper architectural">
                <div class="geometric-mask">
                  <img src="assets/services/workspace_hero.jpg" alt="Espace de travail moderne" class="featured-img" />
                </div>
                <div class="architectural-lines"></div>
              </div>

              <h2>L'espace au service de l'humain</h2>
              <p>Au-delà de l'esthétique, l'aménagement de vos locaux est un enjeu stratégique. Un espace bien pensé favorise les échanges, renforce le sentiment d'appartenance et améliore la qualité de vie au travail (QVT).</p>
              
              <div class="expertises-grid">
                <div class="expertise-card technical-card card-fade-in" style="animation-delay: 0.1s">
                  <div class="card-icon-wrapper">
                    <div class="icon-illustration">
                      <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                        <rect x="12" y="20" width="40" height="28" rx="2" fill="none" stroke="currentColor" stroke-width="2"/>
                        <line x1="20" y1="20" x2="20" y2="48" stroke="currentColor" stroke-width="1.5"/>
                        <line x1="32" y1="20" x2="32" y2="48" stroke="currentColor" stroke-width="1.5"/>
                        <line x1="44" y1="20" x2="44" y2="48" stroke="currentColor" stroke-width="1.5"/>
                      </svg>
                    </div>
                  </div>
                  <h3>Space Planning</h3>
                  <ul>
                    <li>Audit des surfaces & Flux</li>
                    <li>Zoning & Macro-zoning</li>
                    <li>Plans d'implantation 2D/3D</li>
                    <li>Optimisation des m²</li>
                  </ul>
                </div>
                <div class="expertise-card technical-card card-fade-in" style="animation-delay: 0.2s">
                  <div class="card-icon-wrapper">
                    <div class="icon-illustration">
                      <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="32" cy="24" r="8" fill="none" stroke="currentColor" stroke-width="2"/>
                        <path d="M 24 36 Q 32 42 40 36" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        <path d="M 20 48 L 44 48" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                      </svg>
                    </div>
                  </div>
                  <h3>Décoration & Identité</h3>
                  <ul>
                    <li>Concept créatif & Moodboards</li>
                    <li>Choix du mobilier & Matériaux</li>
                    <li>Signalétique intérieure</li>
                    <li>Mise en scène de marque</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <aside class="sidebar">
              <div class="sidebar-block workspace-accent sidebar-fade-in">
                <h3>Nos Solutions</h3>
                <ul class="check-list">
                  <li><ng-icon name="heroChevronRight"></ng-icon> Open spaces agiles</li>
                  <li><ng-icon name="heroChevronRight"></ng-icon> Salles de créativité</li>
                  <li><ng-icon name="heroChevronRight"></ng-icon> Espaces de détente & QVT</li>
                  <li><ng-icon name="heroChevronRight"></ng-icon> Acoustique & Éclairage</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section class="pillar-section bg-light">
        <div class="container">
          <div class="pillar-grid">
            <div class="pillar-item pillar-fade-in" style="animation-delay: 0s">
              <div class="pillar-icon-box">
                <div class="pillar-illustration">
                  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                    <rect x="16" y="28" width="32" height="20" rx="2" fill="none" stroke="currentColor" stroke-width="2"/>
                    <line x1="24" y1="28" x2="24" y2="48" stroke="currentColor" stroke-width="1.5"/>
                    <line x1="32" y1="28" x2="32" y2="48" stroke="currentColor" stroke-width="1.5"/>
                    <line x1="40" y1="28" x2="40" y2="48" stroke="currentColor" stroke-width="1.5"/>
                    <circle cx="32" cy="16" r="4" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              <h3>Ergonomie</h3>
              <p>Des postes de travail pensés pour le confort et la santé de vos collaborateurs, réduisant la fatigue et les TMS.</p>
            </div>
            <div class="pillar-item pillar-fade-in" style="animation-delay: 0.1s">
              <div class="pillar-icon-box">
                <div class="pillar-illustration">
                  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="24" r="6" fill="none" stroke="currentColor" stroke-width="2"/>
                    <circle cx="44" cy="24" r="6" fill="none" stroke="currentColor" stroke-width="2"/>
                    <path d="M 26 28 L 38 28" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    <path d="M 20 32 L 44 32" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    <path d="M 20 40 L 44 40" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                </div>
              </div>
              <h3>Collaboration</h3>
              <p>Création de zones propices aux échanges formels et informels pour briser les silos et innover ensemble.</p>
            </div>
            <div class="pillar-item pillar-fade-in" style="animation-delay: 0.2s">
              <div class="pillar-icon-box">
                <div class="pillar-illustration">
                  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                    <rect x="14" y="18" width="36" height="32" rx="3" fill="none" stroke="currentColor" stroke-width="2"/>
                    <rect x="18" y="22" width="28" height="20" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/>
                    <line x1="18" y1="44" x2="46" y2="44" stroke="currentColor" stroke-width="1.5"/>
                  </svg>
                </div>
              </div>
              <h3>Attractivité</h3>
              <p>Des locaux inspirants qui deviennent un atout majeur pour attirer et fidéliser les meilleurs talents.</p>
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
      background: linear-gradient(135deg, rgba(45, 55, 72, 0.9) 0%, rgba(26, 32, 44, 0.8) 100%), url('/assets/services/workspace_hero.jpg');
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
      background: linear-gradient(to right, rgba(0,0,0,0.4), transparent);
    }
    .animated-bg-elements {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: hidden;
      z-index: 0;
    }
    .floating-shape {
      position: absolute;
      border-radius: 50%;
      opacity: 0.08;
      animation: float 6s ease-in-out infinite;
    }
    .shape-1 {
      width: 200px;
      height: 200px;
      background: #31a3dd;
      top: 10%;
      left: 5%;
      animation-delay: 0s;
    }
    .shape-2 {
      width: 150px;
      height: 150px;
      background: #0d5c86;
      top: 60%;
      right: 10%;
      animation-delay: 2s;
    }
    .shape-3 {
      width: 100px;
      height: 100px;
      background: #31a3dd;
      bottom: 10%;
      left: 50%;
      animation-delay: 4s;
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-30px); }
    }
    .header-text {
      position: relative;
      z-index: 1;
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
      color: #90cdf4;
      animation: slideInDown 0.8s ease-out;
    }
    @keyframes slideInDown {
      from {
        opacity: 0;
        transform: translateY(-20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    h1 {
      font-size: clamp(2.5rem, 5vw, 3.5rem);
      font-weight: 800;
      line-height: 1.1;
      margin-bottom: 30px;
      animation: slideInUp 0.8s ease-out 0.1s both;
      color: white;
    }
    @keyframes slideInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .lead {
      font-size: 1.25rem;
      opacity: 0.9;
      max-width: 800px;
      line-height: 1.6;
      animation: slideInUp 0.8s ease-out 0.2s both;
    }
    .content-section {
      padding: 100px 0;
    }
    .grid {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 80px;
    }
    .visual-wrapper.architectural {
      position: relative;
      margin-bottom: 60px;
    }
    .geometric-mask {
      clip-path: polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%);
      overflow: hidden;
      box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      animation: fadeInScale 0.8s ease-out;
    }
    @keyframes fadeInScale {
      from {
        opacity: 0;
        transform: scale(0.95);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
    .featured-img {
      width: 100%;
      display: block;
      transition: transform 0.7s ease;
    }
    .featured-img:hover {
      transform: scale(1.02);
    }
    h2 {
      font-size: 2.5rem;
      margin-bottom: 30px;
      color: #1a1a1a;
      letter-spacing: -0.5px;
      animation: fadeInUp 0.8s ease-out 0.3s both;
    }
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .main-content > p {
      animation: fadeInUp 0.8s ease-out 0.4s both;
    }
    .expertises-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 30px;
      margin-top: 50px;
    }
    .technical-card {
      background: white;
      padding: 40px;
      border-radius: 8px;
      border-left: 4px solid #31a3dd;
      box-shadow: 0 10px 30px rgba(0,0,0,0.05);
      transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
      position: relative;
      overflow: hidden;
    }
    .technical-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(49, 163, 221, 0.1), transparent);
      transition: left 0.6s ease;
    }
    .technical-card:hover::before {
      left: 100%;
    }
    .technical-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 50px rgba(49, 163, 221, 0.15);
      border-left-color: #0d5c86;
    }
    .card-fade-in {
      animation: fadeInUp 0.8s ease-out both;
    }
    .card-icon-wrapper {
      width: 60px;
      height: 60px;
      background: rgba(49, 163, 221, 0.1);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 25px;
      transition: all 0.3s ease;
    }
    .technical-card:hover .card-icon-wrapper {
      background: rgba(49, 163, 221, 0.2);
      transform: scale(1.1) rotate(5deg);
    }
    .icon-illustration {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #31a3dd;
    }
    .icon-illustration svg {
      width: 32px;
      height: 32px;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
    .technical-card h3 {
      font-size: 1.5rem;
      margin-bottom: 25px;
      color: #1a1a1a;
    }
    .technical-card ul {
      list-style: none;
      padding: 0;
    }
    .technical-card li {
      margin-bottom: 12px;
      color: #444;
      display: flex;
      align-items: center;
      font-weight: 500;
      transition: all 0.2s ease;
    }
    .technical-card:hover li {
      padding-left: 5px;
      color: #31a3dd;
    }
    .technical-card li::before {
      content: "•";
      color: #31a3dd;
      margin-right: 12px;
      font-weight: bold;
      font-size: 1.5rem;
      line-height: 1;
    }
    .workspace-accent {
      background: #f8fafc;
      padding: 40px;
      border-radius: 12px;
      position: sticky;
      top: 120px;
      border: 1px solid #e2e8f0;
      transition: all 0.4s ease;
    }
    .workspace-accent:hover {
      border-color: #31a3dd;
      box-shadow: 0 10px 30px rgba(49, 163, 221, 0.1);
    }
    .sidebar-fade-in {
      animation: fadeInRight 0.8s ease-out 0.3s both;
    }
    @keyframes fadeInRight {
      from {
        opacity: 0;
        transform: translateX(30px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    .workspace-accent h3 {
      margin-bottom: 30px;
      font-size: 1.5rem;
      color: #2d3748;
      border-bottom: 2px solid #31a3dd;
      padding-bottom: 15px;
      display: inline-block;
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
      color: #4a5568;
      transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    .check-list li:hover {
      padding-left: 10px;
      color: #31a3dd;
      transform: translateX(5px);
    }
    .bg-light {
      background: #f8fafc;
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
      border-radius: 4px;
      text-align: center;
      transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
      box-shadow: 0 4px 6px rgba(0,0,0,0.02);
      border-bottom: 4px solid transparent;
      position: relative;
      overflow: hidden;
    }
    .pillar-item::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, #31a3dd, #0d5c86);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.4s ease;
    }
    .pillar-item:hover::before {
      transform: scaleX(1);
    }
    .pillar-item:hover {
      border-bottom-color: #31a3dd;
      transform: translateY(-8px);
      box-shadow: 0 20px 40px rgba(49, 163, 221, 0.15);
    }
    .pillar-fade-in {
      animation: fadeInUp 0.8s ease-out both;
    }
    .pillar-icon-box {
      width: 80px;
      height: 80px;
      background: #edf2f7;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 30px;
      color: #4a5568;
      transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
      position: relative;
    }
    .pillar-item:hover .pillar-icon-box {
      background: linear-gradient(135deg, #31a3dd, #0d5c86);
      color: white;
      transform: scale(1.15) rotate(-5deg);
    }
    .pillar-illustration {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .pillar-illustration svg {
      width: 40px;
      height: 40px;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
    .pillar-item h3 {
      margin-bottom: 15px;
      font-size: 1.5rem;
      color: #2d3748;
      transition: color 0.3s ease;
    }
    .pillar-item:hover h3 {
      color: #31a3dd;
    }
    .pillar-item p {
      color: #718096;
      line-height: 1.6;
      transition: color 0.3s ease;
    }
    .pillar-item:hover p {
      color: #4a5568;
    }
    .architectural-lines {
      position: absolute;
      top: 20px;
      left: 20px;
      right: -20px;
      bottom: -20px;
      border: 2px solid rgba(49, 163, 221, 0.3);
      z-index: -1;
      animation: borderPulse 3s ease-in-out infinite;
    }
    @keyframes borderPulse {
      0%, 100% { opacity: 0.3; }
      50% { opacity: 0.6; }
    }
    @media (max-width: 968px) {
      .grid {
        grid-template-columns: 1fr;
      }
      .sidebar { order: -1; }
      .workspace-accent { position: relative; top: 0; margin-bottom: 40px; }
      h1 { font-size: 2.8rem; }
      .pillar-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class WorkspaceComponent { }
