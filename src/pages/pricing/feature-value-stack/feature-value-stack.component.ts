import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feature-value-stack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-value-stack.component.html',
  styleUrl: './feature-value-stack.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureValueStackComponent {
  platformCost = 297;

  valueAdds = [
    {
      name: 'Leads from Missed Calls',
      value: 2500,
      description: 'Capture just ONE extra job from a missed call.',
      color: 'bg-green-500',
      height: 100
    },
    {
      name: 'Time Saved on Admin',
      value: 800,
      description: 'Save 8 hours a month previously spent on paperwork.',
      color: 'bg-sky-500',
      height: 50
    },
    {
      name: 'Jobs from 5-Star Reviews',
      value: 2500,
      description: 'Win ONE extra job thanks to a stronger reputation on Google.',
      color: 'bg-green-500',
      height: 100
    },
    {
      name: 'Website Lead Conversion',
      value: 1250,
      description: 'Convert just a few more website visitors into paying customers.',
      color: 'bg-sky-500',
      height: 70
    },
  ];

  totalValue = this.valueAdds.reduce((sum, item) => sum + item.value, 0);
  roi = Math.round(this.totalValue / this.platformCost);
}