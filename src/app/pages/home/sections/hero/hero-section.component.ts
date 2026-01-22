import { AfterViewInit, Component, ElementRef, Inject, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { ScrollService } from '../../../../core/services/scroll.service';
import { ParallaxDirective } from '../../../../core/directives/parallax.directive';
import { ScrollRevealDirective } from '../../../../core/directives/scroll-reveal.directive';
import { ScrollAnimationDirective } from '../../../../core/directives/scroll-animation.directive';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroArrowLongRight,
  heroChatBubbleLeftRight,
  heroChevronDown,
  heroGlobeAlt,
  heroMegaphone,
  heroPhoto,
  heroPlayCircle,
  heroShieldCheck,
  heroSparkles,
  heroUserGroup
} from '@ng-icons/heroicons/outline';
import * as THREE from 'three';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, ParallaxDirective, ScrollRevealDirective, ScrollAnimationDirective, NgIconComponent],
  providers: [
    provideIcons({
      heroArrowLongRight,
      heroChatBubbleLeftRight,
      heroChevronDown,
      heroGlobeAlt,
      heroMegaphone,
      heroPhoto,
      heroPlayCircle,
      heroShieldCheck,
      heroSparkles,
      heroUserGroup
    })
  ],
  template: `
    <section class="hero-section" id="hero">
      <div class="hero-background" appParallax [ratio]="0.12">
        <canvas #heroCanvas class="hero-canvas" aria-hidden="true"></canvas>
        <div class="hero-gradient hero-gradient--primary"></div>
        <div class="hero-gradient hero-gradient--secondary"></div>
      </div>

      <div class="hero-container">
        <div class="hero-grid">
          <div class="hero-content">
            <div class="hero-badge" appScrollAnimation [animationType]="'fade-down'" [duration]="600">
              <ng-icon name="heroSparkles" size="20"></ng-icon>
              <span>Agence 360° - Cameroun & International</span>
            </div>

            <h1 class="hero-headline" appScrollAnimation [animationType]="'fade-up'" [delay]="100" [duration]="800">
              Nous donnons <span>vie</span> à vos projets de communication
            </h1>

            <p class="hero-subheadline" appScrollAnimation [animationType]="'fade-up'" [delay]="200" [duration]="800">
              Agence de conseil en stratégie de communication et marketing qui orchestre campagnes, événements et
              expériences digitales pour faire rayonner les marques ambitieuses.
            </p>

            <div class="hero-cta" appScrollAnimation [animationType]="'zoom-in'" [delay]="300" [duration]="600">
              <button
                class="btn btn-primary"
                (click)="scrollToContact()"
                aria-label="Démarrer un projet avec 3CM"
              >
                <span>Démarrer un projet</span>
                <ng-icon name="heroArrowLongRight" size="20"></ng-icon>
              </button>
              <button
                class="btn btn-secondary"
                (click)="scrollToServices()"
                aria-label="Découvrir nos services"
              >
                <span>Découvrir nos services</span>
                <ng-icon name="heroPlayCircle" size="20"></ng-icon>
              </button>
            </div>

            <div class="hero-trust" appScrollReveal [delay]="260">
              <div class="hero-trust-item">
                <div class="icon-badge">
                  <ng-icon name="heroShieldCheck" size="20"></ng-icon>
                </div>
                <div>
                  <p class="trust-label">50+ projets réalisés</p>
                  <p class="trust-meta">Stratégie & activation</p>
                </div>
              </div>
              <div class="hero-trust-item">
                <div class="icon-badge">
                  <ng-icon name="heroGlobeAlt" size="20"></ng-icon>
                </div>
                <div>
                  <p class="trust-label">8 ans d'expertise</p>
                  <p class="trust-meta">Cameroun & diaspora</p>
                </div>
              </div>
              <div class="hero-trust-item">
                <div class="icon-badge">
                  <ng-icon name="heroUserGroup" size="20"></ng-icon>
                </div>
                <div>
                  <p class="trust-label">Équipe pluridisciplinaire</p>
                  <p class="trust-meta">Conseil, digital, événementiel</p>
                </div>
              </div>
            </div>
          </div>

          <div class="hero-showcase">
            <div class="showcase-image-wrapper" appScrollAnimation [animationType]="'fade-left'" [delay]="150" [duration]="800">
              <div class="showcase-image">
                <div *ngFor="let slide of slides; let i = index" 
                     class="carousel-slide" 
                     [class.active]="i === currentSlide">
                  <img 
                    [src]="slide.image" 
                    [alt]="slide.alt"
                    loading="lazy"
                    class="showcase-main-image"
                  />
                </div>
                <div class="image-overlay"></div>
                
                <!-- Carousel Indicators -->
                <div class="carousel-indicators">
                  <button *ngFor="let slide of slides; let i = index" 
                          (click)="goToSlide(i)"
                          [class.active]="i === currentSlide"
                          aria-label="Go to slide">
                  </button>
                </div>
              </div>
            </div>

            <div class="showcase-card" appScrollReveal [delay]="220">
              <h3>Expériences immersives</h3>
              <p>
                Des scénarios hybrides mêlant digital, événementiel et relations presse pour amplifier
                votre impact sur chaque audience.
              </p>
              <div class="card-footer">
                <ng-icon name="heroSparkles" size="18"></ng-icon>
                <span>Brand storytelling & production</span>
              </div>
            </div>

            <div class="showcase-pills" appScrollReveal [delay]="280">
              <span class="pill">
                <ng-icon name="heroMegaphone" size="16"></ng-icon>
                Relations presse
              </span>
              <span class="pill">
                <ng-icon name="heroPhoto" size="16"></ng-icon>
                Contenus premium
              </span>
              <span class="pill">
                <ng-icon name="heroChatBubbleLeftRight" size="16"></ng-icon>
                Influence & social
              </span>
            </div>
          </div>
        </div>
      </div>

      <button
        class="hero-scroll-indicator"
        type="button"
        (click)="scrollToServices()"
        appScrollReveal
        [delay]="320"
        aria-label="Faire défiler vers nos services"
      >
        <span>Faire défiler</span>
        <div class="scroll-icon">
          <ng-icon name="heroChevronDown" size="18"></ng-icon>
        </div>
      </button>
    </section>
  `,
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('heroCanvas') heroCanvas?: ElementRef<HTMLCanvasElement>;

  slides = [
    { image: 'assets/services/corporate_hero.png', alt: 'Corporate Service' },
    { image: 'assets/services/branding_hero.png', alt: 'Branding Service' },
    { image: 'assets/services/digital_ai_hero.png', alt: 'Digital & AI Service' },
    { image: 'assets/services/events_hero.png', alt: 'Events Service' }
  ];
  currentSlide = 0;
  private slideInterval: any;

  private renderer?: THREE.WebGLRenderer;
  private scene?: THREE.Scene;
  private camera?: THREE.PerspectiveCamera;
  private particles?: THREE.Points;
  private lines?: THREE.LineSegments;
  private particlePositions!: Float32Array;
  private particleVelocities!: Float32Array;
  private linePositions!: Float32Array;
  private lineColors!: Float32Array;
  private readonly maxParticleCount = 120;
  private readonly maxConnections = 450;
  private readonly minDistance = 5.5;

  private animationFrameId?: number;
  private readonly clock = new THREE.Clock();
  private readonly isBrowser: boolean;

  private readonly handleResize = () => {
    if (!this.renderer || !this.camera || !this.heroCanvas) {
      return;
    }

    const canvas = this.heroCanvas.nativeElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    this.camera.aspect = width / height || 1;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  };

  constructor(
    private scrollService: ScrollService,
    private ngZone: NgZone,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.startCarousel();
    }
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) {
      return;
    }

    this.ngZone.runOutsideAngular(() => {
      this.initThreeScene();
      window.addEventListener('resize', this.handleResize, { passive: true });
    });
  }

  startCarousel() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.resetCarouselTimer();
  }

  resetCarouselTimer() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
      this.startCarousel();
    }
  }

  scrollToContact() {
    this.scrollService.scrollToElement('contact', 80);
  }

  scrollToServices() {
    if (!this.isBrowser) {
      return;
    }

    this.scrollService.scrollToElement('services', 80);
  }

  ngOnDestroy(): void {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
    if (!this.isBrowser) {
      return;
    }

    window.removeEventListener('resize', this.handleResize);
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    this.disposeScene();
  }

  private initThreeScene(): void {
    const canvas = this.heroCanvas?.nativeElement;
    if (!canvas) {
      return;
    }

    const width = canvas.clientWidth || window.innerWidth;
    const height = canvas.clientHeight || window.innerHeight * 0.8;

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0xffffff, 0.015);

    this.camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 100);
    this.camera.position.set(0, 0, 22);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    this.scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0x31a3dd, 1.5);
    directionalLight.position.set(5, 10, 10);
    this.scene.add(directionalLight);

    this.createPlexusBackground();

    this.animate();
  }

  private createPlexusBackground(): void {
    if (!this.scene) {
      return;
    }

    // 1. Initialize Particles (Nodes)
    this.particlePositions = new Float32Array(this.maxParticleCount * 3);
    this.particleVelocities = new Float32Array(this.maxParticleCount * 3);

    for (let i = 0; i < this.maxParticleCount; i++) {
      const i3 = i * 3;
      this.particlePositions[i3] = (Math.random() - 0.5) * 40;
      this.particlePositions[i3 + 1] = (Math.random() - 0.5) * 30;
      this.particlePositions[i3 + 2] = (Math.random() - 0.5) * 20;

      this.particleVelocities[i3] = (Math.random() - 0.5) * 0.03;
      this.particleVelocities[i3 + 1] = (Math.random() - 0.5) * 0.03;
      this.particleVelocities[i3 + 2] = (Math.random() - 0.5) * 0.03;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(this.particlePositions, 3).setUsage(THREE.DynamicDrawUsage));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.45,
      color: 0x31a3dd,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true
    });

    this.particles = new THREE.Points(particleGeometry, particleMaterial);
    this.scene.add(this.particles);

    // 2. Initialize Connections (Lines)
    this.linePositions = new Float32Array(this.maxConnections * 2 * 3);
    this.lineColors = new Float32Array(this.maxConnections * 2 * 3);

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(this.linePositions, 3).setUsage(THREE.DynamicDrawUsage));
    lineGeometry.setAttribute('color', new THREE.BufferAttribute(this.lineColors, 3).setUsage(THREE.DynamicDrawUsage));

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending
    });

    this.lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    this.scene.add(this.lines);
  }

  private animate = () => {
    if (!this.renderer || !this.scene || !this.camera || !this.particles || !this.lines) {
      return;
    }

    const elapsed = this.clock.getElapsedTime();
    let lineIdx = 0;

    // Update Particles
    for (let i = 0; i < this.maxParticleCount; i++) {
      const i3 = i * 3;

      // Move
      this.particlePositions[i3] += this.particleVelocities[i3];
      this.particlePositions[i3 + 1] += this.particleVelocities[i3 + 1];
      this.particlePositions[i3 + 2] += this.particleVelocities[i3 + 2];

      // Bounce/Wrap
      if (Math.abs(this.particlePositions[i3]) > 20) this.particleVelocities[i3] *= -1;
      if (Math.abs(this.particlePositions[i3 + 1]) > 15) this.particleVelocities[i3 + 1] *= -1;
      if (Math.abs(this.particlePositions[i3 + 2]) > 10) this.particleVelocities[i3 + 2] *= -1;

      // Connections logic
      const minDistSq = this.minDistance * this.minDistance;
      for (let j = i + 1; j < this.maxParticleCount; j++) {
        const j3 = j * 3;
        const dx = this.particlePositions[i3] - this.particlePositions[j3];
        const dy = this.particlePositions[i3 + 1] - this.particlePositions[j3 + 1];
        const dz = this.particlePositions[i3 + 2] - this.particlePositions[j3 + 2];
        const distSq = dx * dx + dy * dy + dz * dz;

        if (distSq < minDistSq && lineIdx < this.maxConnections) {
          const dist = Math.sqrt(distSq);
          const alpha = 1.0 - (dist / this.minDistance);
          const l3 = lineIdx * 6;

          // Set points
          this.linePositions[l3] = this.particlePositions[i3];
          this.linePositions[l3 + 1] = this.particlePositions[i3 + 1];
          this.linePositions[l3 + 2] = this.particlePositions[i3 + 2];

          this.linePositions[l3 + 3] = this.particlePositions[j3];
          this.linePositions[l3 + 4] = this.particlePositions[j3 + 1];
          this.linePositions[l3 + 5] = this.particlePositions[j3 + 2];

          // Set colors (fade based on distance)
          const c1 = new THREE.Color(0x31a3dd);
          const c2 = new THREE.Color(0x0d5c86);
          const col = c1.lerp(c2, alpha);

          this.lineColors[l3] = col.r * alpha;
          this.lineColors[l3 + 1] = col.g * alpha;
          this.lineColors[l3 + 2] = col.b * alpha;
          this.lineColors[l3 + 3] = col.r * alpha;
          this.lineColors[l3 + 4] = col.g * alpha;
          this.lineColors[l3 + 5] = col.b * alpha;

          lineIdx++;
        }
      }
    }

    // Update geometries
    this.particles.geometry.getAttribute('position').needsUpdate = true;
    this.lines.geometry.getAttribute('position').needsUpdate = true;
    this.lines.geometry.getAttribute('color').needsUpdate = true;
    this.lines.geometry.setDrawRange(0, lineIdx * 2);

    // Dynamic rotation of the whole group
    this.particles.rotation.y = elapsed * 0.05;
    this.lines.rotation.y = elapsed * 0.05;

    this.renderer.render(this.scene, this.camera);
    this.animationFrameId = requestAnimationFrame(this.animate);
  };

  private disposeScene(): void {
    if (this.particles) {
      this.scene?.remove(this.particles);
      this.particles.geometry.dispose();
      (this.particles.material as THREE.Material).dispose();
      this.particles = undefined;
    }

    if (this.lines) {
      this.scene?.remove(this.lines);
      this.lines.geometry.dispose();
      (this.lines.material as THREE.Material).dispose();
      this.lines = undefined;
    }

    if (this.renderer) {
      this.renderer.dispose();
      this.renderer = undefined;
    }

    this.scene = undefined;
    this.camera = undefined;
  }
}
