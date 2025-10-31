import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-command-center',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './command-center.component.html',
  styleUrl: './command-center.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommandCenterComponent {
  platformPillars = [
    { 
      name: '1. We Get You The Leads',
      description: 'Your phone starts ringing with customers who are ready to buy.',
      features: ['Functional Contractor Website', 'Local SEO & GMB Optimization', 'Done-For-You Google Ads']
    },
    { 
      name: '2. We Convert The Leads',
      description: 'Our automated system ensures every single lead is captured and followed up with instantly.',
      features: ['All-In-One Unified Inbox', 'Missed Call Text Back', 'Automated SMS Lead Follow-up']
    },
    { 
      name: '3. We Help You Manage & Grow',
      description: 'Get paid faster, build your reputation, and run your entire business from your phone.',
      features: ['5-Star Magic Review Funnel', 'Business Phone System', 'Online Payments & Invoicing']
    },
  ];
}
