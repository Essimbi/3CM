import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroChevronRight, heroTicket, heroCalendarDays, heroBuildingOffice2, heroUserGroup, heroSparkles, heroTruck, heroMusicalNote } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  providers: [
    provideIcons({
      heroChevronRight,
      heroTicket,
      heroCalendarDays,
      heroBuildingOffice2,
      heroUserGroup,
      heroSparkles,
      heroTruck,
      heroMusicalNote
    })
  ],
  template: `
    <div class="service-page">
      <header class="service-header events">
        <div class="header-overlay"></div>
        <div class="container">
          <div class="header-text">
            <span class="eyebrow">3CM EVENTS</span>
            <h1>Stratégie & Production Événementielle</h1>
            <p class="lead">L’évènement est un élément central pour tisser une relation directe avec vos communautés. Du conseil à la réalisation technique, nous scénarisons votre parole.</p>
          </div>
        </div>
      </header>

      <section class="content-section">
        <div class="container">
          <div class="grid">
            <div class="main-content">
              <div class="visual-wrapper events-viz">
                <div class="image-container">
                  <img src="assets/services/events_hero.png" alt="Events" class="featured-img" />
                </div>
                <div class="floating-ticket ticket-1">
                  <ng-icon name="heroTicket"></ng-icon>
                </div>
                <div class="floating-ticket ticket-2">
                  <ng-icon name="heroMusicalNote"></ng-icon>
                </div>
              </div>

              <h2>Créer des expériences mémorables</h2>
              <p>Nous vous accompagnons dans la conception, la production et la réalisation technique de vos événements pour marquer les esprits et renforcer vos liens.</p>
              
              <div class="expertises-grid">
                <div class="expertise-card event-card">
                  <div class="card-icon-wrapper">
                    <ng-icon name="heroCalendarDays" class="icon"></ng-icon>
                  </div>
                  <h3>Corporate & B2B</h3>
                  <ul>
                    <li>Séminaires & Conventions</li>
                    <li>Congrès & Symposiums</li>
                    <li>Assemblées Générales</li>
                    <li>Salons professionnels</li>
                  </ul>
                </div>
                <div class="expertise-card event-card">
                  <div class="card-icon-wrapper">
                    <ng-icon name="heroSparkles" class="icon"></ng-icon>
                  </div>
                  <h3>Public & Incentive</h3>
                  <ul>
                    <li>Opérations Grand Public</li>
                    <li>Campagnes Incentive</li>
                    <li>Animations Point de Vente</li>
                    <li>Soirées de fin d'année</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <aside class="sidebar">
              <div class="sidebar-block event-accent">
                <h3>Formats d'Événements</h3>
                <ul class="check-list">
                  <li><ng-icon name="heroChevronRight"></ng-icon> Road Shows</li>
                  <li><ng-icon name="heroChevronRight"></ng-icon> Lancements de Produits</li>
                  <li><ng-icon name="heroChevronRight"></ng-icon> Stands & PLV</li>
                  <li><ng-icon name="heroChevronRight"></ng-icon> Événements Hybrides/Digitaux</li>
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
                <ng-icon name="heroBuildingOffice2" size="32"></ng-icon>
              </div>
              <h3>Conseil & Scénarisation</h3>
              <p>Nous définissons le concept et le fil conducteur de votre événement pour une narration cohérente et impactante.</p>
            </div>
            <div class="pillar-item">
              <div class="pillar-icon-box">
                <ng-icon name="heroTruck" size="32"></ng-icon>
              </div>
              <h3>Logistique & Technique</h3>
              <p>Une maîtrise complète de la production, de la sonorisation à la lumière, en passant par la gestion des prestataires.</p>
            </div>
            <div class="pillar-item">
              <div class="pillar-icon-box">
                <ng-icon name="heroUserGroup" size="32"></ng-icon>
              </div>
              <h3>Gestion des Publics</h3>
              <p>Accueil, protocole et animation pour garantir une expérience fluide et chaleureuse à tous vos invités.</p>
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
      background: linear-gradient(135deg, rgba(244, 162, 97, 0.9) 0%, rgba(231, 111, 81, 0.8) 100%), url('/assets/services/events_hero.png');
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
      background: rgba(0,0,0,0.1);
    }
    .eyebrow {
      display: inline-block;
      font-weight: 700;
      letter-spacing: 2px;
      margin-bottom: 20px;
      background: rgba(255,255,255,0.2);
      padding: 5px 15px;
      border-radius: 5px;
      backdrop-filter: blur(5px);
    }
    h1 {
      font-size: clamp(2.5rem, 5vw, 3.5rem);
      font-weight: 800;
      line-height: 1.1;
      margin-bottom: 30px;
      text-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    .lead {
      font-size: 1.25rem;
      opacity: 0.95;
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
    .visual-wrapper.events-viz {
      position: relative;
      margin-bottom: 60px;
    }
    .image-container {
      border-radius: 30px;
      overflow: hidden;
      box-shadow: 0 30px 60px rgba(231, 111, 81, 0.2);
      transform: rotate(-1deg);
      transition: transform 0.3s ease;
    }
    .image-container:hover {
      transform: rotate(0deg) scale(1.02);
    }
    .featured-img {
      width: 100%;
      display: block;
    }
    .floating-ticket {
      position: absolute;
      width: 80px;
      height: 80px;
      background: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
      color: #e76f51;
      font-size: 2rem;
      z-index: 2;
      animation: float 6s ease-in-out infinite;
    }
    .ticket-1 {
      top: -30px;
      right: -30px;
      animation-delay: 0s;
    }
    .ticket-2 {
      bottom: -30px;
      left: -30px;
      animation-delay: 3s;
      background: #e76f51;
      color: white;
    }
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
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
    .event-card {
      background: white;
      padding: 40px;
      border-radius: 24px;
      border: 1px solid #f0f0f0;
      box-shadow: 0 20px 40px rgba(0,0,0,0.05);
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }
    .event-card:hover {
      box-shadow: 0 30px 60px rgba(231, 111, 81, 0.15);
      transform: translateY(-5px);
    }
    .event-card::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 5px;
      background: linear-gradient(to right, #f4a261, #e76f51);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s ease;
    }
    .event-card:hover::after {
      transform: scaleX(1);
    }
    .card-icon-wrapper {
      width: 60px;
      height: 60px;
      background: #fff5eb;
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 25px;
    }
    .card-icon-wrapper .icon {
      font-size: 2rem;
      color: #e76f51;
    }
    .event-card h3 {
      font-size: 1.5rem;
      margin-bottom: 25px;
      color: #1a1a1a;
    }
    .event-card ul {
      list-style: none;
      padding: 0;
    }
    .event-card li {
      margin-bottom: 12px;
      color: #444;
      display: flex;
      align-items: center;
      font-weight: 500;
    }
    .event-card li::before {
      content: "★";
      color: #f4a261;
      margin-right: 12px;
      font-size: 0.8rem;
    }
    .event-accent {
      background: #2a2a2a;
      color: white;
      padding: 40px;
      border-radius: 24px;
      position: sticky;
      top: 120px;
      box-shadow: 0 40px 80px rgba(0,0,0,0.1);
    }
    .event-accent h3 {
      margin-bottom: 30px;
      font-size: 1.5rem;
      color: #f4a261;
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
      color: #f4a261;
    }
    .bg-light {
      background: #fff9f6;
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
      border: 1px solid #fcece8;
    }
    .pillar-item:hover {
      transform: scale(1.05);
      box-shadow: 0 20px 40px rgba(231, 111, 81, 0.1);
    }
    .pillar-icon-box {
      width: 80px;
      height: 80px;
      background: #fff5eb;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 30px;
      color: #e76f51;
      transition: all 0.3s ease;
    }
    .pillar-item:hover .pillar-icon-box {
      background: #e76f51;
      color: white;
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
      .event-accent { position: relative; top: 0; margin-bottom: 40px; }
      h1 { font-size: 2.8rem; }
    }
  `]
})
export class EventsComponent { }
