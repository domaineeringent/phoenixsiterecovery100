import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PreloadingService {
  private heroImageUrls: string[] = [
    // Why Us pages
    '/chimera_assets/chimera_174_chimera_174.webp',
    '/chimera_assets/chimera_175_chimera_175.webp',
    '/chimera_assets/chimera_176_chimera_176.webp',

    // Company pages
    '/chimera_assets/chimera_177_chimera_177.webp',

    // Feature pages
    '/chimera_assets/chimera_178_chimera_178.webp',
    '/chimera_assets/chimera_179_chimera_179.webp',
    '/chimera_assets/chimera_180_chimera_180.webp',
    '/chimera_assets/chimera_181_chimera_181.webp',
    '/chimera_assets/chimera_182_chimera_182.webp',
    '/chimera_assets/chimera_183_chimera_183.webp',
    '/chimera_assets/premium_photo-1681433426886-3d6d17f79d53_ixlib_rb-4_1_chimera_184.webp',
    '/chimera_assets/premium_photo-1681433426886-3d6d17f79d53_ixlib_rb-4_1_chimera_185.webp',
    '/chimera_assets/chimera_186_chimera_186.webp'
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
