import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountUpDirective } from '../../../directives/count-up.directive';

@Component({
  selector: 'app-pricing-case-study-slider',
  standalone: true,
  imports: [CommonModule, CountUpDirective],
  templateUrl: './pricing-case-study-slider.component.html',
  styleUrl: './pricing-case-study-slider.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricingCaseStudySliderComponent {
  caseStudy = {
    name: 'JD Roofing',
    trade: 'Dallas, TX',
    before: {
        imageUrl: 'https://pub-7b0107d999fd4c8a8018460dffd25378.r2.dev/chimera_assets/03411e973c2830efd0cadba034364779132e932e64fd52558ecb73a72dd78fd1.webp',
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
