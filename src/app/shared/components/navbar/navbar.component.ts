import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../../core/services/scroll.service';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule],
    template: `
    <nav class="navbar" [class.scrolled]="isScrolled()" role="navigation" aria-label="Navigation principale">
      <div class="navbar-container">
        <a href="/" class="navbar-logo" aria-label="3CM - Retour à l'accueil">
          <span class="logo-text">3CM</span>
        </a>
        
        <!-- Desktop Navigation -->
        <ul class="navbar-menu desktop-only">
          <li><a (click)="scrollTo('services')" class="nav-link">Services</a></li>
          <li><a (click)="scrollTo('portfolio')" class="nav-link">Portfolio</a></li>
          <li><a href="/about" class="nav-link">À propos</a></li>
          <li><a href="/team" class="nav-link">Équipe</a></li>
          <li><a (click)="scrollTo('contact')" class="nav-link">Contact</a></li>
        </ul>
        
        <div class="navbar-actions desktop-only">
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
          <li><a (click)="scrollToAndClose('services')" class="mobile-nav-link">Services</a></li>
          <li><a (click)="scrollToAndClose('portfolio')" class="mobile-nav-link">Portfolio</a></li>
          <li><a href="/about" class="mobile-nav-link">À propos</a></li>
          <li><a href="/team" class="mobile-nav-link">Équipe</a></li>
          <li><a (click)="scrollToAndClose('contact')" class="mobile-nav-link">Contact</a></li>
        </ul>
        <div class="mobile-menu-actions">
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
