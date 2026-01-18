import { Directive, ElementRef, Inject, Input, OnInit, OnDestroy } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * Enhanced scroll-triggered reveal animation directive
 * 
 * Usage:
 * <div appScrollReveal [delay]="200" [stagger]="100">Content</div>
 * 
 * Adds 'visible' class when element enters viewport with stagger support
 */
@Directive({
    selector: '[appScrollReveal]',
    standalone: true
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
    @Input() delay: number = 0;
    @Input() threshold: number = 0.15;
    @Input() stagger: number = 0; // Stagger delay for child elements
    @Input() once: boolean = true;

    private observer?: IntersectionObserver;
    private readonly isBrowser: boolean;
    private hasRevealed = false;

    constructor(
        private el: ElementRef,
        @Inject(PLATFORM_ID) private platformId: object
    ) {
        this.isBrowser = isPlatformBrowser(this.platformId);
    }

    ngOnInit() {
        if (!this.isBrowser || typeof IntersectionObserver === 'undefined') {
            // Fallback: immediately add visible class
            this.el.nativeElement.classList.add('visible');
            return;
        }

        this.observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (!this.once || !this.hasRevealed) {
                            setTimeout(() => {
                                this.reveal();
                                this.hasRevealed = true;
                            }, this.delay);

                            if (this.once) {
                                this.observer?.unobserve(entry.target);
                            }
                        }
                    } else if (!this.once && this.hasRevealed) {
                        entry.target.classList.remove('visible');
                        // Remove visible class from children too
                        const children = entry.target.querySelectorAll('.stagger-item');
                        children.forEach(child => child.classList.remove('visible'));
                    }
                });
            },
            {
                threshold: this.threshold,
                rootMargin: '0px 0px -80px 0px'
            }
        );

        this.observer.observe(this.el.nativeElement);
    }

    private reveal() {
        this.el.nativeElement.classList.add('visible');

        // Apply stagger to child elements with .stagger-item class
        if (this.stagger > 0) {
            const children = this.el.nativeElement.querySelectorAll('.stagger-item');
            children.forEach((child: HTMLElement, index: number) => {
                setTimeout(() => {
                    child.classList.add('visible');
                }, index * this.stagger);
            });
        }
    }

    ngOnDestroy() {
        if (!this.isBrowser) {
            return;
        }

        if (this.observer) {
            this.observer.disconnect();
        }
    }
}
