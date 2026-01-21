import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ScrollService } from '../../../core/services/scroll.service';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { simpleFacebook, simpleX, simpleInstagram } from '@ng-icons/simple-icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, NgIconComponent],
  providers: [
    provideIcons({
      simpleFacebook,
      simpleX,
      simpleInstagram
    })
  ],
  template: `
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
          <li><a routerLink="/" fragment="services" (click)="scrollTo('services')" class="nav-link">Services</a></li>
          <li><a routerLink="/" fragment="portfolio" (click)="scrollTo('portfolio')" class="nav-link">Portfolio</a></li>
          <li><a routerLink="/about" routerLinkActive="active" class="nav-link">À propos</a></li>
          <li><a routerLink="/team" routerLinkActive="active" class="nav-link">Équipe</a></li>
          <li><a routerLink="/" fragment="contact" (click)="scrollTo('contact')" class="nav-link">Contact</a></li>
        </ul>
        
        <div class="navbar-actions desktop-only">
          <div class="social-links">
            <!-- LinkedIn icon missing in current package version -->
            <!-- <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn" class="social-link">
              <ng-icon name="simpleLinkedin" size="18"></ng-icon>
            </a> -->
            <a href="https://facebook.com" target="_blank" aria-label="Facebook" class="social-link">
              <ng-icon name="simpleFacebook" size="18"></ng-icon>
            </a>
            <a href="https://twitter.com" target="_blank" aria-label="X (Twitter)" class="social-link">
              <ng-icon name="simpleX" size="18"></ng-icon>
            </a>
            <a href="https://instagram.com" target="_blank" aria-label="Instagram" class="social-link">
              <ng-icon name="simpleInstagram" size="18"></ng-icon>
            </a>
          </div>
          <div class="separator"></div>
          <a href="tel:+237696805074" class="phone-link" aria-label="Appeler 3CM">
            📞 +237 696 805 074
          </a>
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
          <li><a routerLink="/" fragment="services" (click)="scrollToAndClose('services')" class="mobile-nav-link">Services</a></li>
          <li><a routerLink="/" fragment="portfolio" (click)="scrollToAndClose('portfolio')" class="mobile-nav-link">Portfolio</a></li>
          <li><a routerLink="/about" (click)="toggleMobileMenu()" class="mobile-nav-link">À propos</a></li>
          <li><a routerLink="/team" (click)="toggleMobileMenu()" class="mobile-nav-link">Équipe</a></li>
          <li><a routerLink="/" fragment="contact" (click)="scrollToAndClose('contact')" class="mobile-nav-link">Contact</a></li>
        </ul>
        <div class="mobile-menu-actions">
           <div class="mobile-social-links">
            <!-- <a href="https://linkedin.com" target="_blank" class="social-link">
              <ng-icon name="simpleLinkedin" size="24"></ng-icon>
            </a> -->
            <a href="https://facebook.com" target="_blank" class="social-link">
              <ng-icon name="simpleFacebook" size="24"></ng-icon>
            </a>
            <a href="https://twitter.com" target="_blank" class="social-link">
              <ng-icon name="simpleX" size="24"></ng-icon>
            </a>
            <a href="https://instagram.com" target="_blank" class="social-link">
              <ng-icon name="simpleInstagram" size="24"></ng-icon>
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
    </nav>
  `,
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isScrolled = signal(false);
  mobileMenuOpen = signal(false);

  constructor(private scrollService: ScrollService) { }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled.set(window.pageYOffset > 50);
  }

  scrollTo(elementId: string) {
    this.scrollService.scrollToElement(elementId, 80);
  }

  toggleMobileMenu() {
    this.mobileMenuOpen.update(value => !value);
    // Prevent body scroll when menu is open
    if (this.mobileMenuOpen()) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  scrollToAndClose(elementId: string) {
    this.scrollTo(elementId);
    this.toggleMobileMenu();
  }
}
