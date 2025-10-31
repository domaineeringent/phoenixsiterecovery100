import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-call-widget',
  templateUrl: './call-widget.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class CallWidgetComponent {}
