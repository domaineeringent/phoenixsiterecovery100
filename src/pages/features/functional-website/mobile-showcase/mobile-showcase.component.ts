import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mobile-showcase',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mobile-showcase.component.html',
  styleUrl: './mobile-showcase.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileShowcaseComponent {
  devices = {
    desktop: '/chimera_assets/chimera_169_chimera_169.webp',
    tablet: '/chimera_assets/chimera_170_chimera_170.webp',
    mobile: '/chimera_assets/chimera_171_chimera_171.webp',
  };
}
