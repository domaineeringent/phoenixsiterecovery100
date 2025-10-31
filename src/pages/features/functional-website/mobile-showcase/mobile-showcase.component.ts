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
    desktop: 'https://picsum.photos/seed/desktop-view/1024/768',
    tablet: 'https://picsum.photos/seed/tablet-view/768/1024',
    mobile: 'https://picsum.photos/seed/mobile-view/400/800',
  };
}
