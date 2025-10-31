import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-onboarding-process',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './onboarding-process.component.html',
  styleUrl: './onboarding-process.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnboardingProcessComponent {
  onboardingProcess = [
    { number: '01', title: 'Strategy Call', description: 'A no-pressure call to map out your new website and marketing system.' },
    { number: '02', title: 'We Build It All', description: 'Our team builds your website and sets up your entire system for you.' },
    { number: '03', title: 'Launch & Train', description: 'We launch your system and provide a 25-minute training for your team.' }
  ];
}
