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
        imageUrl: 'chimera_assets/chimera_172_chimera_172.webp',
        stats: [
            { value: 3, label: 'Leads / Week' },
            { value: 12, label: 'Total Google Reviews' },
            { value: 60, suffix: '+', label: 'Hours Worked / Week' }
        ],
        summary: 'John was a great roofer, but his marketing was a mess. His website was 10 years old, he missed half his calls, and was drowning in paperwork every night.'
    },
    after: {
        imageUrl: 'chimera_assets/chimera_173_chimera_173.webp',
        stats: [
            { value: 20, label: 'Leads / Week' },
            { value: 87, label: 'Total Google Reviews' },
            { value: 45, label: 'Hours Worked / Week' }
        ],
        summary: 'After 6 months with Phoenix, JD Roofing is the top-rated roofer on Google Maps. His phone rings consistently, and the automations handle 90% of the follow-up. He took his first real vacation in 5 years.'
    }
  };
}
