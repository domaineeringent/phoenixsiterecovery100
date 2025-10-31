import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-anatomy-of-a-website',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './anatomy-of-a-website.component.html',
  styleUrl: './anatomy-of-a-website.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnatomyOfAWebsiteComponent {
  blueprintPillars = [
    { 
      name: 'Pillar 01: Foundation', 
      title: 'Built for Google & Mobile', 
      description: 'Rock-solid SEO, blazing-fast speed, and a mobile-first design ensure customers can find you.' 
    },
    { 
      name: 'Pillar 02: Framing', 
      title: 'Built for Action', 
      description: 'Strategic calls-to-action, quote forms, and click-to-call buttons make it effortless for visitors to become leads.' 
    },
    { 
      name: 'Pillar 03: Finish', 
      title: 'Built for Trust', 
      description: 'Professional copy, project galleries, and review streams build the confidence a customer needs to hire you.' 
    }
  ];
}
