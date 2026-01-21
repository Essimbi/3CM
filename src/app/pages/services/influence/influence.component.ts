import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroChevronRight, heroNewspaper, heroMicrophone, heroExclamationTriangle, heroScale, heroBanknotes, heroUsers } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-influence',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  providers: [
    provideIcons({
      heroChevronRight,
      heroNewspaper,
      heroMicrophone,
      heroExclamationTriangle,
      heroScale,
      heroBanknotes,
      heroUsers
    })
  ],
  template: `
    <div class="service-page">
      <header class="service-header influence">
        <div class="header-overlay"></div>
        <div class="container">
          <div class="header-text">
            <span class="eyebrow">3CM INFLUENCE</span>
            <h1>Relations Médias & Influence</h1>
            <p class="lead">Découvrez la puissance des relations presse. Nous vous aidons à délivrer le bon message au bon moment et à la bonne cible.</p>
          </div>
        </div>
      </header>

      <section class="content-section">
        <div class="container">
          <div class="grid">
            <div class="main-content">
              <div class="visual-wrapper influencer">
                <div class="glass-mask">
                  <img src="assets/services/influence_hero.png" alt="Influence" class="featured-img" />
                </div>
                <div class="light-burst"></div>
              </div>

              <h2>Maîtriser l'opinion et la réputation</h2>
              <p>Les relations presse sont un levier essentiel de la construction d’image. Encore faut-il bien comprendre leurs besoins et leurs attentes.</p>
              
              <div class="expertises-grid">
                <div class="expertise-card influence-card">
                  <div class="card-icon-wrapper">
                    <ng-icon name="heroNewspaper" class="icon"></ng-icon>
                  </div>
                  <h3>Relations Presse</h3>
                  <ul>
                    <li>Mise en relation avec un réseau qualifié</li>
                    <li>Définition de messages pertinents</li>
                    <li>Conception d’outils médias</li>
                    <li>Bureau de presse externalisé</li>
                  </ul>
                </div>
                <div class="expertise-card influence-card">
                  <div class="card-icon-wrapper">
                    <ng-icon name="heroExclamationTriangle" class="icon"></ng-icon>
                  </div>
                  <h3>Communication de Crise</h3>
                  <ul>
                    <li>Plan de gestion des crises</li>
                    <li>Identification & Préparation aux risques</li>
                    <li>Communication de rupture</li>
                    <li>Gestion du risque d'opinion</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <aside class="sidebar">
              <div class="sidebar-block influence-accent">
                <h3>Pôles d'Expertise</h3>
                <ul class="check-list">
                  <li><ng-icon name="heroChevronRight"></ng-icon> Média-training</li>
                  <li><ng-icon name="heroChevronRight"></ng-icon> Affaires Publiques & Lobbying</li>
                  <li><ng-icon name="heroChevronRight"></ng-icon> Relations Investisseurs</li>
                  <li><ng-icon name="heroChevronRight"></ng-icon> Thought Leadership</li>
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
                <ng-icon name="heroMicrophone" size="32"></ng-icon>
              </div>
              <h3>Média-training</h3>
              <p>S’exprimer face à des journalistes s’apprend. Apprenez à maîtriser vos messages et votre gestuelle en toutes circonstances.</p>
            </div>
            <div class="pillar-item">
              <div class="pillar-icon-box">
                <ng-icon name="heroScale" size="32"></ng-icon>
              </div>
              <h3>Affaires Publiques</h3>
              <p>Devenez un interlocuteur crédible des décideurs publics. Conseil, mise en relation et lobbying en toute transparence.</p>
            </div>
            <div class="pillar-item">
              <div class="pillar-icon-box">
                <ng-icon name="heroBanknotes" size="32"></ng-icon>
              </div>
              <h3>Relations Investisseurs</h3>
              <p>Convaincre et fidéliser vos actionnaires. Conseil stratégique pour fusions, acquisitions et introductions en bourse.</p>
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
      background: linear-gradient(135deg, rgba(42, 157, 143, 0.9) 0%, rgba(38, 70, 83, 0.8) 100%), url('/assets/services/influence_hero.png');
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
      background: radial-gradient(circle at 70% 50%, rgba(42, 157, 143, 0.2), transparent);
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
    .visual-wrapper.influencer {
      position: relative;
      margin-bottom: 60px;
    }
    .glass-mask {
      border-radius: 30px;
      overflow: hidden;
      box-shadow: 0 40px 100px rgba(0,0,0,0.2);
      border: 1px solid rgba(255,255,255,0.2);
      backdrop-filter: blur(5px);
      transform: translateY(0);
      transition: transform 0.4s ease;
    }
    .glass-mask:hover {
      transform: translateY(-10px);
    }
    .featured-img {
      width: 100%;
      display: block;
    }
    .light-burst {
      position: absolute;
      top: -50px;
      left: -50px;
      width: 200px;
      height: 200px;
      background: radial-gradient(circle, rgba(42, 157, 143, 0.3) 0%, transparent 70%);
      filter: blur(30px);
      z-index: -1;
      animation: pulse 4s ease-in-out infinite alternate;
    }
    @keyframes pulse {
      from { transform: scale(1); opacity: 0.3; }
      to { transform: scale(1.5); opacity: 0.6; }
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
    .influence-card {
      background: white;
      padding: 40px;
      border-radius: 24px;
      border: 1px solid #f0f0f0;
      box-shadow: 0 20px 40px rgba(0,0,0,0.05);
      transition: all 0.3s ease;
    }
    .influence-card:hover {
      border-color: #2a9d8f;
      box-shadow: 0 30px 60px rgba(42, 157, 143, 0.1);
    }
    .card-icon-wrapper {
      width: 60px;
      height: 60px;
      background: rgba(42, 157, 143, 0.05);
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 25px;
    }
    .card-icon-wrapper .icon {
      font-size: 2rem;
      color: #2a9d8f;
    }
    .influence-card h3 {
      font-size: 1.5rem;
      margin-bottom: 25px;
      color: #1a1a1a;
    }
    .influence-card ul {
      list-style: none;
      padding: 0;
    }
    .influence-card li {
      margin-bottom: 12px;
      color: #444;
      display: flex;
      align-items: center;
      font-weight: 500;
    }
    .influence-card li::before {
      content: "";
      width: 8px;
      height: 2px;
      background: #2a9d8f;
      margin-right: 12px;
    }
    .influence-accent {
      background: #264653;
      color: white;
      padding: 40px;
      border-radius: 24px;
      position: sticky;
      top: 120px;
      box-shadow: 0 40px 80px rgba(38, 70, 83, 0.2);
    }
    .influence-accent h3 {
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
      color: #2a9d8f;
    }
    .bg-light {
      background: #f4f9f9;
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
      border: 1px solid #e2eceb;
    }
    .pillar-item:hover {
      transform: scale(1.05);
      border-color: #2a9d8f;
    }
    .pillar-icon-box {
      width: 80px;
      height: 80px;
      background: #f0f7f7;
      border-radius: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 30px;
      color: #2a9d8f;
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
      .influence-accent { position: relative; top: 0; margin-bottom: 40px; }
      h1 { font-size: 2.8rem; }
    }
  `]
})
export class InfluenceComponent { }
