import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../../../core/directives/scroll-reveal.directive';
import { ScrollAnimationDirective } from '../../../../core/directives/scroll-animation.directive';
import { ProjectsService, Project } from '../../../../core/services/projects.service';
import { ProjectCardComponent } from '../../../../shared/components/project-card/project-card.component';

@Component({
  selector: 'app-portfolio-section',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective, ScrollAnimationDirective, RouterLink, ProjectCardComponent],
  template: `
    <section class="portfolio-section" id="portfolio">
      <div class="portfolio-container">
        <div class="section-header" appScrollAnimation [animationType]="'fade-up'" [duration]="800">
          <div class="eyebrow">Nos Réalisations</div>
          <h2 class="section-title">Projets Récents</h2>
          <p class="section-subtitle">
            Découvrez quelques-uns des projets que nous avons eu le plaisir de réaliser pour nos clients.
          </p>
        </div>

        <div class="portfolio-grid" appScrollReveal [stagger]="120">
          @for (project of projects; track project.title) {
            <div class="stagger-item">
              <app-project-card [project]="project" />
            </div>
          }
        </div>

        <div class="portfolio-footer" appScrollAnimation [animationType]="'fade-up'" [delay]="300">
          <a routerLink="/portfolio" class="btn-discover">
            <span>Découvrir nos réalisations phares</span>
            <div class="btn-ripple"></div>
          </a>
        </div>
      </div>
    </section>
  `,
  styleUrl: './portfolio-section.component.scss'
})
export class PortfolioSectionComponent {
  readonly projects: Project[];

  constructor(private readonly projectsService: ProjectsService) {
    this.projects = this.projectsService.getFeaturedProjects(6);
  }
}
