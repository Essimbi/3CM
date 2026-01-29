import { Component, HostListener, signal, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { ScrollService } from '../../../core/services/scroll.service';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { simpleFacebook, simpleX, simpleInstagram } from '@ng-icons/simple-icons';
import { bootstrapLinkedin } from '@ng-icons/bootstrap-icons';
import {
  heroSparkles,
  heroSwatch,
  heroGlobeAlt,
  heroChartBar,
  heroMegaphone,
  heroBuildingOffice2,
  heroChevronDown
} from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, NgIconComponent],
  providers: [
    provideIcons({
      simpleFacebook,
      simpleX,
      simpleInstagram,
      bootstrapLinkedin,
      heroSparkles,
      heroSwatch,
      heroGlobeAlt,
      heroChartBar,
      heroMegaphone,
      heroBuildingOffice2,
      heroChevronDown
    })
  ],
  template: `
    <div class="top-bar desktop-only">
      <div class="top-bar-container">
        <div class="contact-info">
          <a href="tel:+237696805074" class="top-link">
             📞 +237 696 805 074
          </a>
          <span class="separator-dot">•</span>
          <a href="mailto:contact@3cm.com" class="top-link">
             ✉️ contact@3cm.com
          </a>
        </div>
        <div class="top-socials">
          <a href="https://facebook.com" target="_blank" aria-label="Facebook" class="social-icon">
            <ng-icon name="simpleFacebook" size="16"></ng-icon>
          </a>
          <a href="https://twitter.com" target="_blank" aria-label="X (Twitter)" class="social-icon">
            <ng-icon name="simpleX" size="16"></ng-icon>
          </a>
          <a href="https://instagram.com" target="_blank" aria-label="Instagram" class="social-icon">
            <ng-icon name="simpleInstagram" size="16"></ng-icon>
          </a>
          <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn" class="social-icon">
            <ng-icon name="bootstrapLinkedin" size="16"></ng-icon>
          </a>
        </div>
      </div>
    </div>

    <nav class="navbar" [class.scrolled]="isScrolled()" role="navigation" aria-label="Navigation principale">
      <div class="navbar-container">
        <a href="/" class="navbar-logo" aria-label="3CM - Retour à l'accueil">
          <img src="assets/logo.jpg" alt="3CM Logo" class="logo-img" />
        </a>
        
        <!-- Desktop Navigation -->
        <ul class="navbar-menu desktop-only">
          <li>
            <a routerLink="/" 
               routerLinkActive="active" 
               [routerLinkActiveOptions]="{exact: true}"
               class="nav-link">Accueil</a>
          </li>
          
          <!-- Services Mega Menu Trigger -->
          <li class="menu-item">
            <button 
              class="nav-link menu-trigger" 
              [class.active]="isActive('/services') || desktopMenuOpen()"
              (click)="toggleDesktopMenu($event)">
              Services
              <ng-icon name="heroChevronDown" class="chevron" [class.rotate]="desktopMenuOpen()"></ng-icon>
            </button>
            
            <!-- Mega Menu -->
            <div class="mega-menu" [class.open]="desktopMenuOpen()">
              <div class="mega-menu-grid">
                @for (service of services; track service.path) {
                  <a [routerLink]="service.path" class="service-card" (click)="closeDesktopMenu()">
                    <div class="icon-box">
                      <ng-icon [name]="service.icon" size="24"></ng-icon>
                    </div>
                    <div class="content">
                      <span class="title">{{ service.label }}</span>
                      <span class="desc">{{ service.description }}</span>
                    </div>
                  </a>
                }
              </div>
            </div>
          </li>

          <li><a routerLink="/portfolio" class="nav-link">Portfolio</a></li>
          <li><a routerLink="/about" routerLinkActive="active" class="nav-link">À propos</a></li>
          
          <li><a routerLink="/" fragment="contact" (click)="scrollTo('contact')" class="nav-link">Contact</a></li>
        </ul>
        
        <div class="navbar-actions desktop-only">
          <button (click)="scrollTo('contact')" class="btn-primary">
            Démarrer un projet
          </button>
        </div>
        
        <!-- Mobile Menu Button -->
        <button 
          class="hamburger mobile-only" 
          [class.active]="mobileMenuOpen()"
          (click)="toggleMobileMenu()"
          aria-label="Toggle menu"
          aria-expanded="{{mobileMenuOpen()}}">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      
      <!-- Mobile Menu -->
      <div class="mobile-menu" [class.open]="mobileMenuOpen()">
        <ul class="mobile-menu-list">
          <li>
            <a routerLink="/" 
               routerLinkActive="active" 
               [routerLinkActiveOptions]="{exact: true}"
               (click)="toggleMobileMenu()"
               class="mobile-nav-link">Accueil</a>
          </li>
          
          <!-- Mobile Services Accordion -->
          <li class="mobile-dropdown">
            <button class="mobile-nav-link dropdown-toggle" (click)="toggleMobileDropdown()">
              Services
              <ng-icon name="heroChevronDown" [class.rotate]="mobileDropdownOpen()"></ng-icon>
            </button>
            <div class="mobile-submenu" [class.open]="mobileDropdownOpen()">
               @for (service of services; track service.path) {
                <a [routerLink]="service.path" (click)="toggleMobileMenu()" class="mobile-sublink">
                  <ng-icon [name]="service.icon" size="18" class="mobile-icon"></ng-icon>
                  {{ service.label }}
                </a>
              }
            </div>
          </li>

          <li><a routerLink="/portfolio"  class="mobile-nav-link">Portfolio</a></li>
          <li><a routerLink="/about" (click)="toggleMobileMenu()" class="mobile-nav-link">À propos</a></li>
          <li><a routerLink="/team" (click)="toggleMobileMenu()" class="mobile-nav-link">Équipe</a></li>
          <li><a routerLink="/" fragment="contact" (click)="scrollToAndClose('contact')" class="mobile-nav-link">Contact</a></li>
        </ul>
        <div class="mobile-menu-actions">
           <div class="mobile-social-links">
            <a href="https://facebook.com" target="_blank" class="social-link">
              <ng-icon name="simpleFacebook" size="24"></ng-icon>
            </a>
            <a href="https://twitter.com" target="_blank" class="social-link">
              <ng-icon name="simpleX" size="24"></ng-icon>
            </a>
            <a href="https://instagram.com" target="_blank" class="social-link">
              <ng-icon name="simpleInstagram" size="24"></ng-icon>
            </a>
             <a href="https://linkedin.com" target="_blank" class="social-link">
              <ng-icon name="bootstrapLinkedin" size="24"></ng-icon>
            </a>
          </div>
          <a href="tel:+237696805074" class="phone-link-mobile">
            📞 +237 696 805 074
          </a>
          <button (click)="scrollToAndClose('contact')" class="btn-primary-mobile">
            Démarrer un projet
          </button>
        </div>
      </div>
      
      <!-- Global Backdrop for Desktop Menu -->
      @if (desktopMenuOpen()) {
        <div class="menu-backdrop" (click)="closeDesktopMenu()"></div>
      }
    </nav>
  `,
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isScrolled = signal(false);
  mobileMenuOpen = signal(false);
  desktopMenuOpen = signal(false);
  mobileDropdownOpen = signal(false);

  services = [
    { label: 'Corporate', description: 'Stratégie & Conseil', path: '/services/corporate', icon: 'heroSparkles' },
    { label: 'Branding', description: 'Identité & Design', path: '/services/branding', icon: 'heroSwatch' },
    { label: 'Digital', description: 'Web & Tech', path: '/services/digital', icon: 'heroGlobeAlt' },
    { label: 'Influence', description: 'RP & E-réputation', path: '/services/influence', icon: 'heroChartBar' },
    { label: 'Events', description: 'Expériences live', path: '/services/events', icon: 'heroMegaphone' },
    { label: 'Workspace', description: 'Aménagement', path: '/services/workspace', icon: 'heroBuildingOffice2' },
  ];

  constructor(private scrollService: ScrollService, private router: Router) { }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled.set(window.pageYOffset > 50);
  }

  isActive(path: string): boolean {
    return this.router.url.includes(path);
  }

  scrollTo(elementId: string) {
    this.scrollService.scrollToElement(elementId, 80);
  }

  toggleDesktopMenu(event: Event) {
    event.stopPropagation();
    this.desktopMenuOpen.update(v => !v);
  }

  closeDesktopMenu() {
    this.desktopMenuOpen.set(false);
  }

  toggleMobileMenu() {
    this.mobileMenuOpen.update(value => !value);
    if (!this.mobileMenuOpen()) {
      this.mobileDropdownOpen.set(false);
    }

    // Prevent body scroll when menu is open
    if (this.mobileMenuOpen()) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  toggleMobileDropdown() {
    this.mobileDropdownOpen.update(v => !v);
  }

  scrollToAndClose(elementId: string) {
    this.scrollTo(elementId);
    this.toggleMobileMenu();
  }
}
