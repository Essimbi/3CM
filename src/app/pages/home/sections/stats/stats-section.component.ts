import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../../../core/directives/scroll-reveal.directive';
import { CounterAnimationDirective } from '../../../../core/directives/counter-animation.directive';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroChartBar, heroGlobeAlt, heroUsers, heroVideoCamera } from '@ng-icons/heroicons/outline';

@Component({
    selector: 'app-stats-section',
    standalone: true,
    imports: [CommonModule, ScrollRevealDirective, CounterAnimationDirective, NgIconComponent],
    providers: [
        provideIcons({
            heroChartBar,
            heroGlobeAlt,
            heroUsers,
            heroVideoCamera
        })
    ],
    template: `
    <section class="stats-section" id="stats">
      <div class="stats-backdrop" aria-hidden="true">
        <div class="stats-gridlines stats-gridlines--horizontal"></div>
        <div class="stats-gridlines stats-gridlines--vertical"></div>
        <div class="stats-orb stats-orb--left"></div>
        <div class="stats-orb stats-orb--right"></div>
      </div>

      <div class="stats-container">
        <div class="stats-header" appScrollReveal>
          <div class="stats-badge">
            <span class="badge-dot"></span>
            <span>Impact mesurable</span>
          </div>
          <h2>Nos indicateurs parlent pour nous</h2>
          <p>
            ROI mesurable, réseaux élargis et expériences mémorables : chaque projet active une communauté et crée de la valeur durable.
          </p>
        </div>

        <div class="stats-grid">
          <article class="stat-item" appScrollReveal>
            <div class="stat-orb" aria-hidden="true"></div>
            <div class="stat-icon">
              <ng-icon name="heroChartBar" size="28"></ng-icon>
            </div>
            <div class="stat-content">
              <span class="stat-number" appCounterAnimation [target]="50" [suffix]="'+'">0</span>
              <span class="stat-label">Projets orchestrés</span>
              <span class="stat-description">Campagnes et plans multicanaux sur-mesure</span>
              <span class="stat-meta">Croissance annuelle +18%</span>
            </div>
          </article>

          <article class="stat-item" appScrollReveal [delay]="120">
            <div class="stat-orb" aria-hidden="true"></div>
            <div class="stat-icon">
              <ng-icon name="heroUsers" size="28"></ng-icon>
            </div>
            <div class="stat-content">
              <span class="stat-number" appCounterAnimation [target]="100" [suffix]="'+'">0</span>
              <span class="stat-label">Clients accompagnés</span>
              <span class="stat-description">Entreprises, institutions et marques internationales</span>
              <span class="stat-meta">Taux de recommandation 92%</span>
            </div>
          </article>

          <article class="stat-item" appScrollReveal [delay]="240">
            <div class="stat-orb" aria-hidden="true"></div>
            <div class="stat-icon">
              <ng-icon name="heroVideoCamera" size="28"></ng-icon>
            </div>
            <div class="stat-content">
              <span class="stat-number" appCounterAnimation [target]="300" [suffix]="'+'">0</span>
              <span class="stat-label">Activations & contenus</span>
              <span class="stat-description">Formats immersifs, événements et productions premium</span>
              <span class="stat-meta">Engagement moyen x3</span>
            </div>
          </article>

          <article class="stat-item" appScrollReveal [delay]="360">
            <div class="stat-orb" aria-hidden="true"></div>
            <div class="stat-icon">
              <ng-icon name="heroGlobeAlt" size="28"></ng-icon>
            </div>
            <div class="stat-content">
              <span class="stat-number" appCounterAnimation [target]="12">0</span>
              <span class="stat-label">Territoires activés</span>
              <span class="stat-description">Présence Cameroun, Afrique centrale et diaspora</span>
              <span class="stat-meta">Couverture terrain & diaspora</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  `,
    styleUrl: './stats-section.component.scss'
})
export class StatsSectionComponent { }
