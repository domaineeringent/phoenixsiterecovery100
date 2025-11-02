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
    { name: 'John Doe', company: 'JD Roofing', videoThumbnailUrl: './chimera_assets/chimera_1_chimera_1.webp' },
    { name: 'Mike Smith', company: 'Smith Electric', videoThumbnailUrl: 'https://picsum.photos/seed/smithelectric/600/400' },
    { name: 'Carlos Garcia', company: 'Garcia Landscaping', videoThumbnailUrl: 'https://picsum.photos/seed/garcialand/600/400' },
    { name: 'David Chen', company: 'Chen\'s Plumbing', videoThumbnailUrl: 'https://picsum.photos/seed/chenplumb/600/400' },
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
