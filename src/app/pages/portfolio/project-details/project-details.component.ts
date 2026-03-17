import { Component, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProjectsService, Project } from '../../../core/services/projects.service';
import { ProjectCardComponent } from '../../../shared/components/project-card/project-card.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroXMark, heroChevronLeft, heroChevronRight } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule, RouterLink, ProjectCardComponent, NgIconComponent],
  providers: [provideIcons({ heroXMark, heroChevronLeft, heroChevronRight })],
  template: `
    <div class="project-details-page">
      @if (project; as p) {
        <section class="hero">
          <div class="hero-media" [style.backgroundImage]="'url(' + p.image + ')'" aria-hidden="true"></div>
          <div class="hero-overlay" aria-hidden="true"></div>

          <div class="hero-content">
            <a class="back-link" routerLink="/portfolio">Retour aux réalisations</a>
            <div class="hero-meta">
              <span class="meta-pill">{{ p.category }}</span>
              @if (p.year) {
                <span class="meta-sep" aria-hidden="true">•</span>
                <span class="meta-text">{{ p.year }}</span>
              }
            </div>
            <h1 class="hero-title" style="color: #fff !important;">{{ p.title }}</h1>
            <p class="hero-subtitle">{{ p.description }}</p>

            <div class="hero-tags">
              @for (tag of p.tags; track tag) {
                <span class="tag">{{ tag }}</span>
              }
            </div>
          </div>
        </section>

        <main class="content">
          <section class="details-grid">
            <div class="detail-card">
              <h2>Contexte</h2>
              <p>{{ p.context ?? p.description }}</p>
            </div>

            <div class="detail-card">
              <h2>Objectifs</h2>
              @if (p.objectives?.length) {
                <ul>
                  @for (item of p.objectives; track item) {
                    <li>{{ item }}</li>
                  }
                </ul>
              } @else {
                <p>Objectifs à préciser.</p>
              }
            </div>

            <div class="detail-card">
              <h2>Approche</h2>
              @if (p.approach?.length) {
                <ul>
                  @for (item of p.approach; track item) {
                    <li>{{ item }}</li>
                  }
                </ul>
              } @else {
                <p>Approche à préciser.</p>
              }
            </div>

            <div class="detail-card">
              <h2>Résultats</h2>
              @if (p.results?.length) {
                <ul>
                  @for (item of p.results; track item) {
                    <li>{{ item }}</li>
                  }
                </ul>
              } @else {
                <p>Résultats à préciser.</p>
              }
            </div>
          </section>

          @if (p.gallery?.length) {
            <section class="gallery">
              <div class="section-header">
                <h2>Galerie</h2>
                <p>Quelques visuels du projet.</p>
              </div>

              <div class="gallery-grid">
                @for (src of p.gallery; track src; let i = $index) {
                  <div class="gallery-item" (click)="openModal(i)">
                    <img [src]="src" [alt]="p.title" loading="lazy" />
                  </div>
                }
              </div>
            </section>

            <!-- Image Modal -->
            @if (isModalOpen()) {
              <div class="gallery-modal" (click)="closeModal()">
                <button class="modal-close" (click)="closeModal(); $event.stopPropagation()" aria-label="Fermer">
                  <ng-icon name="heroXMark" size="2rem"></ng-icon>
                </button>
                
                <button 
                  class="modal-nav prev" 
                  (click)="prevImage($event)" 
                  *ngIf="p.gallery!.length > 1"
                  aria-label="Image précédente">
                  <ng-icon name="heroChevronLeft" size="2.5rem"></ng-icon>
                </button>

                <div class="modal-content" (click)="$event.stopPropagation()">
                  <img [src]="p.gallery![currentImageIndex()]" [alt]="p.title + ' preview'" />
                  <div class="modal-counter">
                    {{ currentImageIndex() + 1 }} / {{ p.gallery!.length }}
                  </div>
                </div>

                <button 
                  class="modal-nav next" 
                  (click)="nextImage($event)" 
                  *ngIf="p.gallery!.length > 1"
                  aria-label="Image suivante">
                  <ng-icon name="heroChevronRight" size="2.5rem"></ng-icon>
                </button>
              </div>
            }
          }

          <section class="similar">
            <div class="section-header">
              <h2>Projets similaires</h2>
              <p>Dans la catégorie {{ p.category }}.</p>
            </div>

            @if (similarProjects.length) {
              <div class="similar-grid">
                @for (sp of similarProjects; track sp.id) {
                  <app-project-card [project]="sp" />
                }
              </div>
            } @else {
              <div class="empty-state">
                <p>Aucun projet similaire disponible pour le moment.</p>
              </div>
            }
          </section>
        </main>
      } @else {
        <section class="not-found">
          <h1>Projet introuvable</h1>
          <p>Le projet demandé n’existe pas ou a été supprimé.</p>
          <a class="back-link" routerLink="/portfolio">Retour aux réalisations</a>
        </section>
      }
    </div>
  `,
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent {
  readonly project?: Project;
  readonly similarProjects: Project[];

  isModalOpen = signal(false);
  currentImageIndex = signal(0);

  constructor(
    private readonly route: ActivatedRoute,
    private readonly projectsService: ProjectsService
  ) {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? Number(idParam) : NaN;

    this.project = Number.isFinite(id) ? this.projectsService.getProjectById(id) : undefined;
    this.similarProjects = this.project ? this.projectsService.getSimilarProjects(this.project, 3) : [];
  }

  openModal(index: number) {
    this.currentImageIndex.set(index);
    this.isModalOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.isModalOpen.set(false);
    document.body.style.overflow = '';
  }

  nextImage(event?: Event) {
    if (event) event.stopPropagation();
    if (this.project?.gallery) {
      const nextIndex = (this.currentImageIndex() + 1) % this.project.gallery.length;
      this.currentImageIndex.set(nextIndex);
    }
  }

  prevImage(event?: Event) {
    if (event) event.stopPropagation();
    if (this.project?.gallery) {
      const prevIndex = (this.currentImageIndex() - 1 + this.project.gallery.length) % this.project.gallery.length;
      this.currentImageIndex.set(prevIndex);
    }
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (!this.isModalOpen()) return;

    switch (event.key) {
      case 'Escape':
        this.closeModal();
        break;
      case 'ArrowRight':
        this.nextImage();
        break;
      case 'ArrowLeft':
        this.prevImage();
        break;
    }
  }
}
