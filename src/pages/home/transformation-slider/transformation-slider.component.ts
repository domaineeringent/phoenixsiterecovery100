import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollDirective } from '../../../directives/animate-on-scroll.directive';
import { CountUpDirective } from '../../../directives/count-up.directive';

@Component({
  selector: 'app-transformation-slider',
  standalone: true,
  imports: [CommonModule, AnimateOnScrollDirective, CountUpDirective],
  templateUrl: './transformation-slider.component.html',
  styleUrl: './transformation-slider.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransformationSliderComponent {
  caseStudy = {
    name: 'JD Roofing',
    trade: 'Dallas, TX',
    before: {
        imageUrl: 'https://picsum.photos/seed/jdbefore/800/600',
        stats: [
            { value: 3, label: 'Leads / Week' },
            { value: 12, label: 'Total Google Reviews' },
            { value: 60, suffix: '+', label: 'Hours Worked / Week' }
        ],
        summary: 'John was a great roofer, but his marketing was a mess. His website was 10 years old, he missed half his calls, and was drowning in paperwork every night.'
    },
    after: {
        imageUrl: 'https://picsum.photos/seed/jdafter/800/600',
        stats: [
            { value: 20, label: 'Leads / Week' },
            { value: 87, label: 'Total Google Reviews' },
            { value: 45, label: 'Hours Worked / Week' }
        ],
        summary: 'After 6 months with Phoenix, JD Roofing is the top-rated roofer on Google Maps. His phone rings consistently, and the automations handle 90% of the follow-up. He took his first real vacation in 5 years.'
    }
  };
}
