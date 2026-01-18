import { Directive, ElementRef, Inject, Input, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * Parallax scrolling effect directive
 * 
 * Usage:
 * <div appParallax [ratio]="0.5">Background element</div>
 * 
 * Creates parallax effect by translating element based on scroll position
 */
@Directive({
    selector: '[appParallax]',
    standalone: true
})
export class ParallaxDirective implements OnInit, OnDestroy {
    @Input() ratio: number = 0.5; // Scroll speed multiplier (0.5 = half speed)

    private scrollListener?: () => void;
    private readonly isBrowser: boolean;

    constructor(
        private el: ElementRef,
        private renderer: Renderer2,
        @Inject(PLATFORM_ID) private platformId: object,
        @Inject(DOCUMENT) private document: Document
    ) {
        this.isBrowser = isPlatformBrowser(this.platformId);
    }

    ngOnInit() {
        if (!this.isBrowser) {
            return;
        }

        this.scrollListener = this.renderer.listen('window', 'scroll', () => {
            this.updateParallax();
        });

        // Initial position
        this.updateParallax();
    }

    private updateParallax() {
        if (!this.isBrowser) {
            return;
        }

        const scrolled = this.document.defaultView?.pageYOffset ?? 0;
        const yPos = -(scrolled * this.ratio);

        this.renderer.setStyle(
            this.el.nativeElement,
            'transform',
            `translate3d(0, ${yPos}px, 0)`
        );
    }

    ngOnDestroy() {
        if (!this.isBrowser) {
            return;
        }

        if (this.scrollListener) {
            this.scrollListener();
        }
    }
}
