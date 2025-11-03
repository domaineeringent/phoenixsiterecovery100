import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PreloadingService {
  private heroImageUrls: string[] = [
    // Why Us pages
    'https://picsum.photos/seed/difference-hero/800/600',
    'https://picsum.photos/seed/process-hero/800/600',
    'https://picsum.photos/seed/testimonials-hero/800/600',

    // Company pages
    'https://picsum.photos/seed/partners-hero/800/600',

    // Feature pages
    'https://picsum.photos/seed/website-hero/800/600',
    'https://picsum.photos/seed/inbox-hero/800/600',
    'https://picsum.photos/seed/review-hero/800/600',
    'https://picsum.photos/seed/missedcall-hero/800/600',
    'https://picsum.photos/seed/localseo-hero/800/600',
    'https://picsum.photos/seed/printing-hero/800/600',
    'https://picsum.photos/seed/businessphone/800/600',
    'https://picsum.photos/seed/marketing/800/600',
    'https://picsum.photos/seed/leadfollowup/800/600'
  ];

  private preloaded = false;

  preloadHeroImages(): void {
    if (this.preloaded || typeof window === 'undefined') {
      return;
    }

    this.preloaded = true;
    
    // Use requestIdleCallback to preload images during browser idle periods
    if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(() => {
            this.heroImageUrls.forEach(url => {
                const img = new Image();
                img.src = url;
            });
        });
    } else {
        // Fallback for older browsers
        setTimeout(() => {
            this.heroImageUrls.forEach(url => {
                const img = new Image();
                img.src = url;
            });
        }, 1000);
    }
  }
}
