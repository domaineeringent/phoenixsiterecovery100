import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExitIntentService } from '../../../services/exit-intent.service';

@Component({
  selector: 'app-exit-intent-modal',
  templateUrl: './exit-intent-modal.component.html',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ExitIntentModalComponent {
  exitIntentService = inject(ExitIntentService);
}