import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ScrollRevealDirective } from '../../../../core/directives/scroll-reveal.directive';
import { FormSubmissionService } from '../../../../core/services/form-submission.service';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
    heroBolt,
    heroCalendarDays,
    heroChartBar,
    heroEnvelopeOpen,
    heroMegaphone,
    heroPhoneArrowUpRight,
    heroSparkles
} from '@ng-icons/heroicons/outline';

interface Highlight {
    title: string;
    description: string;
    icon: string;
}

@Component({
    selector: 'app-cta-section',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, ScrollRevealDirective, NgIconComponent],
    providers: [
        provideIcons({
            heroBolt,
            heroCalendarDays,
            heroChartBar,
            heroEnvelopeOpen,
            heroMegaphone,
            heroPhoneArrowUpRight,
            heroSparkles
        })
    ],
    template: `
    <section class="cta-section" id="contact">
      <div class="cta-background" aria-hidden="true"></div>
      <div class="cta-container">
        <div class="cta-header" appScrollReveal>
          <div class="cta-eyebrow">
            <ng-icon name="heroSparkles" size="20"></ng-icon>
            <span>Partenariats sur mesure</span>
          </div>
          <h2>Prêt à transformer votre communication ?</h2>
          <p>Construisons une stratégie qui aligne vos objectifs business, vos publics et vos expériences de marque.</p>
        </div>

        <div class="cta-grid">
          <div class="cta-side" appScrollReveal>
            <div class="cta-highlights">
              @for (highlight of highlights; track highlight.title) {
                <div class="highlight-card">
                  <div class="highlight-icon">
                    <ng-icon [name]="highlight.icon" size="20"></ng-icon>
                  </div>
                  <div class="highlight-content">
                    <h3>{{ highlight.title }}</h3>
                    <p>{{ highlight.description }}</p>
                  </div>
                </div>
              }
            </div>

            <div class="cta-direct">
              <span class="direct-title">Besoin d'un échange rapide ?</span>
              <div class="contact-methods">
                <a href="tel:+237696805074" class="contact-method">
                  <div class="method-icon">
                    <ng-icon name="heroPhoneArrowUpRight" size="18"></ng-icon>
                  </div>
                  <span>+237 696 805 074</span>
                </a>
                <a href="mailto:info@3-c-m.com" class="contact-method">
                  <div class="method-icon">
                    <ng-icon name="heroEnvelopeOpen" size="18"></ng-icon>
                  </div>
                  <span>info@3-c-m.com</span>
                </a>
              </div>
              <p class="hours">
                <ng-icon name="heroCalendarDays" size="18"></ng-icon>
                <span>Lun-Ven, 8h-18h</span>
              </p>
            </div>
          </div>

          <div class="cta-form-wrapper" appScrollReveal [delay]="180">
            @if (!isSuccess()) {
              <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="contact-form">
                <div class="form-columns">
                  <div class="form-group">
                    <label for="name">Nom complet <span class="required">*</span></label>
                    <input
                      id="name"
                      type="text"
                      formControlName="name"
                      placeholder="Votre nom complet"
                      [class.error]="contactForm.get('name')?.invalid && contactForm.get('name')?.touched">
                    @if (contactForm.get('name')?.invalid && contactForm.get('name')?.touched) {
                      <span class="error-message">{{ getErrorMessage('name') }}</span>
                    }
                  </div>

                  <div class="form-group">
                    <label for="email">Email <span class="required">*</span></label>
                    <input
                      id="email"
                      type="email"
                      formControlName="email"
                      placeholder="votre@email.com"
                      [class.error]="contactForm.get('email')?.invalid && contactForm.get('email')?.touched">
                    @if (contactForm.get('email')?.invalid && contactForm.get('email')?.touched) {
                      <span class="error-message">{{ getErrorMessage('email') }}</span>
                    }
                  </div>
                </div>

                <div class="form-columns">
                  <div class="form-group">
                    <label for="phone">Téléphone <span class="required">*</span></label>
                    <input
                      id="phone"
                      type="tel"
                      formControlName="phone"
                      placeholder="+237 6XX XXX XXX"
                      [class.error]="contactForm.get('phone')?.invalid && contactForm.get('phone')?.touched">
                    @if (contactForm.get('phone')?.invalid && contactForm.get('phone')?.touched) {
                      <span class="error-message">{{ getErrorMessage('phone') }}</span>
                    }
                  </div>

                  <div class="form-group">
                    <label for="projectType">Type de projet <span class="required">*</span></label>
                    <select
                      id="projectType"
                      formControlName="projectType"
                      [class.error]="contactForm.get('projectType')?.invalid && contactForm.get('projectType')?.touched">
                      <option value="">Sélectionnez un type</option>
                      @for (type of projectTypes; track type) {
                        <option [value]="type">{{ type }}</option>
                      }
                    </select>
                    @if (contactForm.get('projectType')?.invalid && contactForm.get('projectType')?.touched) {
                      <span class="error-message">{{ getErrorMessage('projectType') }}</span>
                    }
                  </div>
                </div>

                <div class="form-group">
                  <label for="message">Message (optionnel)</label>
                  <textarea
                    id="message"
                    formControlName="message"
                    placeholder="Parlez-nous de votre projet..."
                    rows="4"></textarea>
                </div>

                @if (errorMessage()) {
                  <div class="form-error">{{ errorMessage() }}</div>
                }

                <button
                  type="submit"
                  class="btn-submit"
                  [disabled]="isSubmitting() || contactForm.invalid">
                  @if (isSubmitting()) {
                    <span class="spinner"></span>
                    Envoi en cours...
                  } @else {
                    Démarrer mon projet
                  }
                </button>
              </form>
            } @else {
              <div class="success-message">
                <div class="success-icon">
                  <ng-icon name="heroSparkles" size="32"></ng-icon>
                </div>
                <h3>Merci ! Nous avons bien reçu votre demande.</h3>
                <p>Notre équipe vous contactera dans les 24h pour planifier la suite.</p>
                <a href="/portfolio" class="success-link">En attendant, découvrez notre portfolio</a>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
    styleUrl: './cta-section.component.scss'
})
export class CtaSectionComponent {
    contactForm: FormGroup;
    isSubmitting = signal(false);
    isSuccess = signal(false);
    errorMessage = signal('');

    highlights: Highlight[] = [
        {
            title: 'Onboarding express',
            description: 'Un workshop d’alignement pour cadrer objectifs, audiences et messages clés.',
            icon: 'heroBolt'
        },
        {
            title: 'Pilotage stratégique',
            description: 'KPIs, reporting et plan d’action continus pour garder le cap sur vos ambitions.',
            icon: 'heroChartBar'
        },
        {
            title: 'Activation omnicanale',
            description: 'Équipe intégrée : conseil, contenu, événementiel et relations presse.',
            icon: 'heroMegaphone'
        }
    ];

    projectTypes = [
        'Stratégie de communication',
        'Gestion d\'événement',
        'Relations presse',
        'Branding & identité visuelle',
        'Digital & Web',
        'Campagne média',
        'Autre'
    ];

    constructor(
        private fb: FormBuilder,
        private formService: FormSubmissionService
    ) {
        this.contactForm = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(2)]],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', [Validators.required, Validators.pattern(/^[+]?[0-9]{9,15}$/)]],
            projectType: ['', Validators.required],
            message: ['', Validators.maxLength(500)]
        });
    }

    onSubmit() {
        if (this.contactForm.valid) {
            this.isSubmitting.set(true);
            this.errorMessage.set('');

            this.formService.submitContact(this.contactForm.value).subscribe({
                next: () => {
                    this.isSuccess.set(true);
                    this.isSubmitting.set(false);
                    this.contactForm.reset();
                },
                error: (error) => {
                    this.isSubmitting.set(false);
                    this.errorMessage.set(error.message || 'Une erreur est survenue. Veuillez réessayer.');
                }
            });
        } else {
            Object.keys(this.contactForm.controls).forEach(key => {
                this.contactForm.get(key)?.markAsTouched();
            });
        }
    }

    getErrorMessage(fieldName: string): string {
        const control = this.contactForm.get(fieldName);
        if (control?.hasError('required')) {
            return 'Ce champ est requis';
        }
        if (control?.hasError('email')) {
            return 'Email invalide';
        }
        if (control?.hasError('minlength')) {
            return `Minimum ${control.errors?.['minlength'].requiredLength} caractères`;
        }
        if (control?.hasError('pattern')) {
            return 'Format invalide';
        }
        return '';
    }
}
