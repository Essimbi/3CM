import { Directive, ElementRef, Input, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * Animated counter directive
 * 
 * Usage:
 * <span appCounterAnimation [target]="50" [suffix]="'+'">0</span>
 * 
 * Animates number from 0 to target value when element becomes visible
 */
@Directive({
    selector: '[appCounterAnimation]',
    standalone: true
})
export class CounterAnimationDirective implements OnInit, OnDestroy {
    @Input() target: number = 0;
    @Input() duration: number = 2000; // milliseconds
    @Input() suffix: string = '';
    @Input() prefix: string = '';

    private observer?: IntersectionObserver;
    private isBrowser: boolean;
    private hasAnimated = false;

    constructor(
        private el: ElementRef,
        @Inject(PLATFORM_ID) private platformId: object
    ) {
        this.isBrowser = isPlatformBrowser(this.platformId);
    }

    ngOnInit() {
        if (!this.isBrowser || typeof IntersectionObserver === 'undefined') {
            // If not in browser or observer not supported, just set the target value
            this.el.nativeElement.textContent = `${this.prefix}${this.target}${this.suffix}`;
            return;
        }

        this.observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !this.hasAnimated) {
                        this.animateCounter();
                        this.hasAnimated = true;
                        this.observer?.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
        );

        this.observer.observe(this.el.nativeElement);
    }

    private animateCounter() {
        const element = this.el.nativeElement;
        const start = 0;
        const end = this.target;
        const startTime = performance.now();

        const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / this.duration, 1);

            // Easing function (ease-out)
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(start + (end - start) * easeOut);

            element.textContent = `${this.prefix}${current}${this.suffix}`;

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                element.textContent = `${this.prefix}${end}${this.suffix}`;
            }
        };

        requestAnimationFrame(animate);
    }

    ngOnDestroy() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
}
