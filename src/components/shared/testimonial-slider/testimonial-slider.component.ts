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
    { name: 'Carlos Garcia', company: 'Garcia Landscaping', videoThumbnailUrl: 'https://picsum.photos/seed/garcialand/600/400' },
    { name: 'David Chen', company: 'Chen\'s Plumbing', videoThumbnailUrl: '../../../../chimera_assets/premium_photo-1681839037622-68577ea73b34_ixlib_rb-4_1_chimera_4.webp' },
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
