import { Injectable } from '@angular/core';

/**
 * Scroll service for smooth scrolling and scroll position tracking
 */
@Injectable({
    providedIn: 'root'
})
export class ScrollService {

    /**
     * Smooth scroll to element by ID
     */
    scrollToElement(elementId: string, offset: number = 0): void {
        const element = document.getElementById(elementId);
        if (element) {
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }

    /**
     * Smooth scroll to top of page
     */
    scrollToTop(): void {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    /**
     * Get current scroll position
     */
    getScrollPosition(): number {
        return window.pageYOffset || document.documentElement.scrollTop;
    }

    /**
     * Check if element is in viewport
     */
    isInViewport(element: HTMLElement, offset: number = 0): boolean {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= -offset &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
}
