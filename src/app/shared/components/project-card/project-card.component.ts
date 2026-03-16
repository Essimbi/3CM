import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Project } from '../../../core/services/projects.service';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <a class="project-card-link" [routerLink]="['/portfolio', project.id]" [attr.aria-label]="project.title">
      <article class="project-card">
        <div class="project-image">
          <img [src]="project.image" [alt]="project.title" loading="lazy" />
          <div class="image-overlay">
            <div class="overlay-content">
              <span class="category-badge">{{ project.category }}</span>
            </div>
          </div>
        </div>

        <div class="project-content">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <div class="project-tags">
            @for (tag of project.tags; track tag) {
              <span class="tag">{{ tag }}</span>
            }
          </div>
        </div>
      </article>
    </a>
  `,
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: Project;
}
