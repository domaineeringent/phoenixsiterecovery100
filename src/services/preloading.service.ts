import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PreloadingService {
  private heroImageUrls: string[] = [
    // Why Us pages
    'chimera_assets/chimera_174_chimera_174.webp',
    'https://picsum.photos/seed/process-hero/800/600',
    'chimera_assets/chimera_176_chimera_176.webp',

    // Company pages
    'chimera_assets/chimera_177_chimera_177.webp',

    // Feature pages
    'chimera_assets/chimera_178_chimera_178.webp',
    'https://picsum.photos/seed/inbox-hero/800/600',
    'chimera_assets/chimera_180_chimera_180.webp',
    'chimera_assets/chimera_181_chimera_181.webp',
    'chimera_assets/chimera_182_chimera_182.webp',
    'https://picsum.photos/seed/printing-hero/800/600',
    'chimera_assets/chimera_184_chimera_184.webp',
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
