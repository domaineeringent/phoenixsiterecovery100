import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountUpDirective } from '../../../../directives/count-up.directive';

@Component({
  selector: 'app-website-before-after',
  standalone: true,
  imports: [CommonModule, CountUpDirective],
  templateUrl: './website-before-after.component.html',
  styleUrl: './website-before-after.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebsiteBeforeAfterComponent {
  caseStudy = {
    name: 'Precision Plumbing Co.',
    before: {
        imageUrl: 'https://picsum.photos/seed/before-plumbing/800/600',
        stats: [
            { value: 2, label: 'Leads / Month' },
            { value: 15, suffix: '%', label: 'Mobile Conversion' },
        ]
    },
    after: {
        imageUrl: 'https://picsum.photos/seed/after-plumbing/800/600',
        stats: [
            { value: 30, suffix: '+', label: 'Leads / Month' },
            { value: 85, suffix: '%', label: 'Mobile Conversion' },
        ]
    }
  };
}
