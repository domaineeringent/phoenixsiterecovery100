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
        imageUrl: '/chimera_assets/chimera_167_chimera_167.webp',
        stats: [
            { value: 2, label: 'Leads / Month' },
            { value: 15, suffix: '%', label: 'Mobile Conversion' },
        ]
    },
    after: {
        imageUrl: '/chimera_assets/premium_photo-1734029815125-58149f75742e_ixlib_rb-4_1_chimera_168.webp',
        stats: [
            { value: 30, suffix: '+', label: 'Leads / Month' },
            { value: 85, suffix: '%', label: 'Mobile Conversion' },
        ]
    }
  };
}
