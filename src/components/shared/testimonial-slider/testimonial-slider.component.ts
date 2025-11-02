import { ChangeDetectionStrategy, Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  name: string;
  company: string;
  videoThumbnailUrl: string;
}

@Component({
  selector: 'app-testimonial-slider',
  templateUrl: './testimonial-slider.component.html',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialSliderComponent {
  testimonials = signal<Testimonial[]>([
    { name: 'John Doe', company: 'JD Roofing', videoThumbnailUrl: 'https://picsum.photos/seed/jdroofing/600/400' },
    { name: 'Mike Smith', company: 'Smith Electric', videoThumbnailUrl: 'https://picsum.photos/seed/smithelectric/600/400' },
    { name: 'Carlos Garcia', company: 'Garcia Landscaping', videoThumbnailUrl: 'https://pub-7b0107d999fd4c8a8018460dffd25378.r2.dev/chimera_assets/ce238eda3c883f0c853e625df445ba5ed68826d8e556c058ef3e9cc07c6d635f.webp' },
    { name: 'David Chen', company: 'Chen\'s Plumbing', videoThumbnailUrl: 'https://pub-7b0107d999fd4c8a8018460dffd25378.r2.dev/chimera_assets/aceb43eb6880506de84f673d567c192f0844dbbe26d02e975b1cefd1d77df8d1.webp' },
  ]);

  currentIndex = signal(0);

  currentTestimonial = computed(() => this.testimonials()[this.currentIndex()]);

  next() {
    this.currentIndex.update(i => (i + 1) % this.testimonials().length);
  }

  prev() {
    this.currentIndex.update(i => (i - 1 + this.testimonials().length) % this.testimonials().length);
  }

  goTo(index: number) {
    this.currentIndex.set(index);
  }
}
