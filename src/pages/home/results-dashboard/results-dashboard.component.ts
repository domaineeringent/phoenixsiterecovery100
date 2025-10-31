import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollDirective } from '../../../directives/animate-on-scroll.directive';
import { CountUpDirective } from '../../../directives/count-up.directive';

interface KeyNumber {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

@Component({
  selector: 'app-results-dashboard',
  standalone: true,
  imports: [CommonModule, AnimateOnScrollDirective, CountUpDirective],
  templateUrl: './results-dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultsDashboardComponent {
    keyNumbers: KeyNumber[] = [
    { value: 50000000, prefix: '$', suffix: '+', label: 'In Client Revenue Generated' },
    { value: 10000, suffix: '+', label: 'Leads Delivered' },
    { value: 37, suffix: '%', label: 'Avg. Client Growth (YoY)' },
    { value: 5000, suffix: '+', label: '5-Star Reviews Delivered' },
    { value: 98, suffix: '%', label: 'Client Retention Rate' },
    { value: 24, suffix: '/7', label: 'Automated Lead Capture' }
  ];
}
