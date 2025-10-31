import { ChangeDetectionStrategy, Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AnimateOnScrollDirective } from '../../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-interactive-pricing-tiers',
  standalone: true,
  imports: [CommonModule, RouterLink, AnimateOnScrollDirective],
  templateUrl: './interactive-pricing-tiers.component.html',
  styleUrl: './interactive-pricing-tiers.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InteractivePricingTiersComponent {
  billingCycle = signal<'monthly' | 'annually'>('monthly');

  setBillingCycle(cycle: 'monthly' | 'annually') {
    this.billingCycle.set(cycle);
  }

  calculateAnnualPrice(monthlyPrice: number) {
    return monthlyPrice * 10; // 2 months free
  }

  advanced = {
    monthly: 297,
    annual: computed(() => this.calculateAnnualPrice(297)),
    features: [
      'All Features Included',
      'Done-For-You Website Build',
      'Unlimited Contacts & Users'
    ]
  }

  supreme = {
    monthly: 750,
    annual: computed(() => this.calculateAnnualPrice(750)),
    features: [
      'Everything in Advanced, PLUS:',
      'Done-For-You Google Ads Management',
      'Dedicated Ads Specialist'
    ]
  }

}
