import { Directive, ElementRef, Inject, Input, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * Enhanced scroll-triggered animation directive with multiple animation types
 * 
 * Usage:
 * <div appScrollAnimation [animationType]="'fade-up'" [delay]="200">Content</div>
 * 
 * Animation types: 'fade-up', 'fade-down', 'fade-left', 'fade-right', 'zoom-in', 'zoom-out', 'flip', 'slide-up', 'slide-down'
 */
@Directive({
    selector: '[appScrollAnimation]',
    standalone: true
})
export class ScrollAnimationDirective implements OnInit, OnDestroy {
    @Input() animationType: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'zoom-out' | 'flip' | 'slide-up' | 'slide-down' | 'rotate' = 'fade-up';
    @Input() delay: number = 0;
    @Input() duration: number = 600;
    @Input() threshold: number = 0.15;
    @Input() once: boolean = true; // Only animate once

    private observer?: IntersectionObserver;
    private readonly isBrowser: boolean;
    private hasAnimated = false;

    constructor(
        private el: ElementRef,
        private renderer: Renderer2,
        @Inject(PLATFORM_ID) private platformId: object
    ) {
        this.isBrowser = isPlatformBrowser(this.platformId);
    }

    ngOnInit() {
        if (!this.isBrowser || typeof IntersectionObserver === 'undefined') {
            return;
        }

        // Set initial state
        this.setInitialState();

        this.observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (!this.once || !this.hasAnimated) {
                            setTimeout(() => {
                                this.animate();
                                this.hasAnimated = true;
                            }, this.delay);

                            if (this.once) {
                                this.observer?.unobserve(entry.target);
                            }
                        }
                    } else if (!this.once && this.hasAnimated) {
                        // Reset animation if once is false
                        this.setInitialState();
                    }
                });
            },
            {
                threshold: this.threshold,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        this.observer.observe(this.el.nativeElement);
    }

    private setInitialState() {
        const element = this.el.nativeElement;
        this.renderer.setStyle(element, 'transition', `all ${this.duration}ms cubic-bezier(0.4, 0, 0.2, 1)`);

        switch (this.animationType) {
            case 'fade-up':
                this.renderer.setStyle(element, 'opacity', '0');
                this.renderer.setStyle(element, 'transform', 'translateY(40px)');
                break;
            case 'fade-down':
                this.renderer.setStyle(element, 'opacity', '0');
                this.renderer.setStyle(element, 'transform', 'translateY(-40px)');
                break;
            case 'fade-left':
                this.renderer.setStyle(element, 'opacity', '0');
                this.renderer.setStyle(element, 'transform', 'translateX(40px)');
                break;
            case 'fade-right':
                this.renderer.setStyle(element, 'opacity', '0');
                this.renderer.setStyle(element, 'transform', 'translateX(-40px)');
                break;
            case 'zoom-in':
                this.renderer.setStyle(element, 'opacity', '0');
                this.renderer.setStyle(element, 'transform', 'scale(0.8)');
                break;
            case 'zoom-out':
                this.renderer.setStyle(element, 'opacity', '0');
                this.renderer.setStyle(element, 'transform', 'scale(1.2)');
                break;
            case 'flip':
                this.renderer.setStyle(element, 'opacity', '0');
                this.renderer.setStyle(element, 'transform', 'rotateY(90deg)');
                break;
            case 'slide-up':
                this.renderer.setStyle(element, 'transform', 'translateY(100%)');
                break;
            case 'slide-down':
                this.renderer.setStyle(element, 'transform', 'translateY(-100%)');
                break;
            case 'rotate':
                this.renderer.setStyle(element, 'opacity', '0');
                this.renderer.setStyle(element, 'transform', 'rotate(-10deg) scale(0.9)');
                break;
        }
    }

    private animate() {
        const element = this.el.nativeElement;

        this.renderer.setStyle(element, 'opacity', '1');
        this.renderer.setStyle(element, 'transform', 'translateY(0) translateX(0) scale(1) rotateY(0) rotate(0)');
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
