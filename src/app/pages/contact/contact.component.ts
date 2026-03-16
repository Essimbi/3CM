import { Component, signal, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
    heroEnvelope,
    heroPhone,
    heroMapPin,
    heroArrowRight,
    heroArrowLeft,
    heroCheckCircle,
    heroStar,
    heroSparkles,
    heroSwatch,
    heroGlobeAlt,
    heroChartBar,
    heroMegaphone,
    heroBuildingOffice2,
    heroBuildingOffice,
    heroClock,
    heroCurrencyDollar,
    heroUser,
    heroDocumentText,
    heroXMark,
} from '@ng-icons/heroicons/outline';
import { heroCheckCircleSolid, heroStarSolid } from '@ng-icons/heroicons/solid';
import { simpleFacebook, simpleX, simpleInstagram } from '@ng-icons/simple-icons';
import { bootstrapLinkedin } from '@ng-icons/bootstrap-icons';
import { ScrollAnimationDirective } from '../../core/directives/scroll-animation.directive';
import { ScrollRevealDirective } from '../../core/directives/scroll-reveal.directive';
import { FormSubmissionService } from '../../core/services/form-submission.service';

interface ServiceOption {
    id: string;
    label: string;
    description: string;
    icon: string;
}

interface Testimonial {
    name: string;
    role: string;
    company: string;
    quote: string;
    rating: number;
    initials: string;
}

interface Partner {
    name: string;
    initials: string;
    logoSrc?: string;
}

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterLink,
        NgIconComponent,
        ScrollAnimationDirective,
        ScrollRevealDirective,
    ],
    providers: [
        provideIcons({
            heroEnvelope,
            heroPhone,
            heroMapPin,
            heroArrowRight,
            heroArrowLeft,
            heroCheckCircle,
            heroCheckCircleSolid,
            heroStar,
            heroStarSolid,
            heroSparkles,
            heroSwatch,
            heroGlobeAlt,
            heroChartBar,
            heroMegaphone,
            heroBuildingOffice2,
            heroBuildingOffice,
            heroClock,
            heroCurrencyDollar,
            heroUser,
            heroDocumentText,
            heroXMark,
            simpleFacebook,
            simpleX,
            simpleInstagram,
            bootstrapLinkedin,
        }),
    ],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
    currentStep = signal(1);
    totalSteps = 4;
    isSubmitting = signal(false);
    isSubmitted = signal(false);
    submitError = signal('');
    activeTestimonial = signal(0);
    testimonialInterval: ReturnType<typeof setInterval> | null = null;

    readonly services: ServiceOption[] = [
        { id: 'corporate', label: 'Corporate', description: 'Stratégie & Conseil', icon: 'heroSparkles' },
        { id: 'branding', label: 'Branding', description: 'Identité & Design', icon: 'heroSwatch' },
        { id: 'digital', label: 'Digital', description: 'Web & Tech', icon: 'heroGlobeAlt' },
        { id: 'influence', label: 'Influence', description: 'RP & E-réputation', icon: 'heroChartBar' },
        { id: 'events', label: 'Events', description: 'Expériences live', icon: 'heroMegaphone' },
        { id: 'workspace', label: 'Workspace', description: 'Aménagement', icon: 'heroBuildingOffice2' },
    ];

    readonly timelines = [
        { value: 'urgent', label: 'Urgent (< 1 mois)' },
        { value: 'short', label: 'Court terme (1-3 mois)' },
        { value: 'medium', label: 'Moyen terme (3-6 mois)' },
        { value: 'long', label: 'Long terme (6+ mois)' },
    ];

    readonly budgets = [
        { value: 'small', label: '< 500 000 FCFA' },
        { value: 'medium', label: '500 000 – 2 000 000 FCFA' },
        { value: 'large', label: '2 000 000 – 5 000 000 FCFA' },
        { value: 'enterprise', label: '> 5 000 000 FCFA' },
    ];

    readonly testimonials: Testimonial[] = [
        {
            name: 'Bertrand Mbarga',
            role: 'Directeur Général',
            company: 'Banque Atlantique Cameroun',
            quote: '3CM a transformé notre communication institutionnelle. Leur approche stratégique et leur créativité ont redéfini notre image de marque en Afrique centrale. Un partenaire indispensable.',
            rating: 5,
            initials: 'BM',
        },
        {
            name: 'Marie-Cécile Ngo',
            role: 'Directrice Marketing',
            company: 'Canal+ Afrique',
            quote: 'Leur maîtrise du digital et de l\'influence nous a permis d\'atteindre des audiences insoupçonnées. La qualité de leur production et leur réactivité sont remarquables.',
            rating: 5,
            initials: 'MN',
        },
        {
            name: 'Dr. Alain Fondji',
            role: 'Secrétaire Général',
            company: 'Ministère des Arts et de la Culture',
            quote: 'Pour notre événement national, 3CM a orchestré une production d\'une qualité exceptionnelle. Professionnalisme, rigueur et créativité : une équipe d\'excellence.',
            rating: 5,
            initials: 'AF',
        },
        {
            name: 'Isabelle Kamto',
            role: 'CEO',
            company: 'StartUp Nation Cameroun',
            quote: 'Du branding à la stratégie digitale, 3CM a été notre accélérateur de croissance. Leur vision globale et leur exécution locale font toute la différence.',
            rating: 5,
            initials: 'IK',
        },
    ];

    readonly partners: Partner[] = [
        { name: 'CAMWATER', initials: 'CW', logoSrc: 'assets/partners/camwater.png' },
        { name: 'CFCE', initials: 'CFCE', logoSrc: 'assets/partners/cfce.png' },
        { name: 'Guinness', initials: 'GN', logoSrc: 'assets/partners/guiness.png' },
        { name: 'MINPMESSA', initials: 'MINPMESSA', logoSrc: 'assets/partners/minpmessa.png' },
        { name: 'NFC Bank', initials: 'NFC', logoSrc: 'assets/partners/nfc.png' },
        { name: 'Ministère du Commerce', initials: 'MINCOMMERCE', logoSrc: 'assets/partners/omc.png' },
        { name: 'SNH', initials: 'SNH', logoSrc: 'assets/partners/snh.png' },
        { name: 'Total', initials: 'TOT', logoSrc: 'assets/partners/total.png' }
    ];

    step1Form: FormGroup;
    step2Form: FormGroup;
    step3Form: FormGroup;

    constructor(
        private fb: FormBuilder,
        private formSubmissionService: FormSubmissionService,
        @Inject(PLATFORM_ID) private platformId: object
    ) {
        this.step1Form = this.fb.group({
            selectedServices: [[], Validators.required],
        });

        this.step2Form = this.fb.group({
            timeline: ['', Validators.required],
            budget: ['', Validators.required],
            projectDescription: ['', [Validators.required, Validators.minLength(20)]],
        });

        this.step3Form = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(2)]],
            company: [''],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', Validators.required],
        });
    }

    ngOnInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.startTestimonialAutoplay();
        }
    }

    startTestimonialAutoplay() {
        this.testimonialInterval = setInterval(() => {
            this.nextTestimonial();
        }, 5000);
    }

    stopTestimonialAutoplay() {
        if (this.testimonialInterval) {
            clearInterval(this.testimonialInterval);
            this.testimonialInterval = null;
        }
    }

    goToTestimonial(index: number) {
        this.activeTestimonial.set(index);
        this.stopTestimonialAutoplay();
        this.startTestimonialAutoplay();
    }

    nextTestimonial() {
        const next = (this.activeTestimonial() + 1) % this.testimonials.length;
        this.activeTestimonial.set(next);
    }

    prevTestimonial() {
        const prev =
            (this.activeTestimonial() - 1 + this.testimonials.length) % this.testimonials.length;
        this.activeTestimonial.set(prev);
        this.stopTestimonialAutoplay();
        this.startTestimonialAutoplay();
    }

    getStars(rating: number): boolean[] {
        return Array(5)
            .fill(0)
            .map((_, i) => i < rating);
    }

    // Step 1 - Service selection
    toggleService(serviceId: string) {
        const current: string[] = this.step1Form.get('selectedServices')?.value || [];
        const idx = current.indexOf(serviceId);
        if (idx === -1) {
            this.step1Form
                .get('selectedServices')
                ?.setValue([...current, serviceId]);
        } else {
            this.step1Form
                .get('selectedServices')
                ?.setValue(current.filter((s) => s !== serviceId));
        }
    }

    isServiceSelected(serviceId: string): boolean {
        const selected: string[] = this.step1Form.get('selectedServices')?.value || [];
        return selected.includes(serviceId);
    }

    // Step navigation
    nextStep() {
        if (this.currentStep() === 1 && this.step1Form.invalid) return;
        if (this.currentStep() === 2 && this.step2Form.invalid) return;
        if (this.currentStep() === 3 && this.step3Form.invalid) return;
        if (this.currentStep() < this.totalSteps) {
            this.currentStep.update((v) => v + 1);
        }
    }

    prevStep() {
        if (this.currentStep() > 1) {
            this.currentStep.update((v) => v - 1);
        }
    }

    isStep1Valid(): boolean {
        const selected = this.step1Form.get('selectedServices')?.value || [];
        return selected.length > 0;
    }

    getProgressPercent(): number {
        return ((this.currentStep() - 1) / (this.totalSteps - 1)) * 100;
    }

    getSelectedServiceLabels(): string {
        const selected: string[] = this.step1Form.get('selectedServices')?.value || [];
        return selected.map((id) => this.services.find((s) => s.id === id)?.label).join(', ');
    }

    getTimelineLabel(): string {
        const value = this.step2Form.get('timeline')?.value;
        return this.timelines.find((t) => t.value === value)?.label || '';
    }

    getBudgetLabel(): string {
        const value = this.step2Form.get('budget')?.value;
        return this.budgets.find((b) => b.value === value)?.label || '';
    }

    submitForm() {
        if (this.step3Form.invalid) return;
        this.isSubmitting.set(true);
        this.submitError.set('');

        const formData = {
            name: this.step3Form.get('name')?.value,
            email: this.step3Form.get('email')?.value,
            phone: this.step3Form.get('phone')?.value,
            projectType: this.getSelectedServiceLabels(),
            message: `Services: ${this.getSelectedServiceLabels()}
Timeline: ${this.getTimelineLabel()}
Budget: ${this.getBudgetLabel()}
Description: ${this.step2Form.get('projectDescription')?.value}
Company: ${this.step3Form.get('company')?.value || 'Non renseigné'}`,
        };

        this.formSubmissionService.submitContact(formData).subscribe({
            next: () => {
                this.isSubmitting.set(false);
                this.isSubmitted.set(true);
                this.currentStep.set(4);
            },
            error: (err) => {
                this.isSubmitting.set(false);
                this.submitError.set(err.message || 'Une erreur est survenue. Veuillez réessayer.');
            },
        });
    }

    resetForm() {
        this.step1Form.reset({ selectedServices: [] });
        this.step2Form.reset();
        this.step3Form.reset();
        this.currentStep.set(1);
        this.isSubmitted.set(false);
        this.submitError.set('');
    }

    ngOnDestroy() {
        this.stopTestimonialAutoplay();
    }
}
