import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PreloadingService {
  private heroImageUrls: string[] = [
    // Why Us pages
    'https://pub-7b0107d999fd4c8a8018460dffd25378.r2.dev/chimera_assets/cfd4054e1d410ba3141c944391b70e1889c9e1277abfff425f8d99ca2b865d90.webp',
    'https://pub-7b0107d999fd4c8a8018460dffd25378.r2.dev/chimera_assets/aa0d6ec9b73a07301f238fdc1078a18821c1cc2e9aa3ec2ebc09b564c3dc6fbb.webp',
    'https://pub-7b0107d999fd4c8a8018460dffd25378.r2.dev/chimera_assets/f67127f9b2969742128920862bff1e9c28d9a2f6ef7848fbe86ff0a1c1955105.webp',

    // Company pages
    'https://pub-7b0107d999fd4c8a8018460dffd25378.r2.dev/chimera_assets/98c192b001fbb7fcca5827dbd940057b0ed0d8d8f7c2452c7f04907c2d8f7f33.webp',

    // Feature pages
    'https://picsum.photos/seed/website-hero/800/600',
    'https://pub-7b0107d999fd4c8a8018460dffd25378.r2.dev/chimera_assets/059155a29bdc0aaef28893725e29907d02659cdb7fc02b3dbbe6654109e47f39.webp',
    'https://picsum.photos/seed/review-hero/800/600',
    'https://pub-7b0107d999fd4c8a8018460dffd25378.r2.dev/chimera_assets/333e82b652c27bf6023507e87e349c75a11604166cae0a91242a9e7805d79201.webp',
    'https://picsum.photos/seed/localseo-hero/800/600',
    'https://pub-7b0107d999fd4c8a8018460dffd25378.r2.dev/chimera_assets/57fee48ef5e9ad20761a04f2d7fdca6c61058d7d02a2f58742fa4cbb5567ec51.webp',
    'https://picsum.photos/seed/businessphone/800/600',
    'https://pub-7b0107d999fd4c8a8018460dffd25378.r2.dev/chimera_assets/a5b5e414703b94fcbf473460a294f3548968c74ea0d54c1d2ff7edb74e5a32b1.webp',
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
