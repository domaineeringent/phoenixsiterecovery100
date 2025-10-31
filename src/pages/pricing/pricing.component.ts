import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CtaSectionComponent } from '../../components/shared/cta-section/cta-section.component';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

// New Interactive Components
import { CostOfChaosCalculatorComponent } from './cost-of-chaos-calculator/cost-of-chaos-calculator.component';
import { FeatureValueStackComponent } from './feature-value-stack/feature-value-stack.component';
import { PricingCaseStudySliderComponent } from './pricing-case-study-slider/pricing-case-study-slider.component';
import { InteractivePricingTiersComponent } from './interactive-pricing-tiers/interactive-pricing-tiers.component';

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  imports: [
    CommonModule,
    RouterLink,
    CtaSectionComponent,
    AnimateOnScrollDirective,
    CostOfChaosCalculatorComponent,
    FeatureValueStackComponent,
    PricingCaseStudySliderComponent,
    InteractivePricingTiersComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricingComponent {
  openFaq = signal<number | null>(null);

  problemAgitation = [
    { title: '"The Sunday Night Dread"', description: 'That sinking feeling when you realize your weekend is over and you have a mountain of paperwork, callbacks, and quotes to deal with before you can even start the real work.' },
    { title: '"Phone Glued To Your Hand"', description: 'You can\'t even have dinner with your family without one eye on your phone, terrified you\'ll miss a lead. Every buzz is a potential job, but also an interruption.' },
    { title: '"Lead Follow-Up Purgatory"', description: 'You remember to call a new lead... two days later. By then, they\'ve already hired someone else who was faster. Another one slipped through the cracks.' }
  ];

  failedSolutions = [
    { title: 'DIY / "The Nephew"', description: 'You tried building a Wix site or had a family member "help." It looks amateur, doesn\'t work on mobile, and worse, does nothing to actually capture leads.' },
    { title: 'The Patchwork of Apps', description: 'You\'ve taped together 5 different tools for your CRM, phone, reviews, etc. Nothing talks to each other, leads get lost in the shuffle, and you\'re paying a fortune in subscriptions.' },
    { title: 'The Cheap Agency', description: 'You hired a "marketing guy" who charged you a monthly fee for vague "SEO services" and delivered zero tangible results or ROI. They don\'t understand your business.' }
  ];

  onboardingProcess = [
    { number: 'Step 1', title: 'Blueprint Call', description: 'A 45-minute strategy session to map out your entire system.' },
    { number: 'Step 2', title: 'We Build', description: 'Our team builds your website, writes content, and configures automations.' },
    { number: 'Step 3', title: 'Launch & Train', description: 'We launch your system and provide a 25-minute "keys to the cockpit" training.' }
  ];
  
  faqs: FaqItem[] = [
    { question: 'Is this just another CRM?', answer: 'No. While we have CRM-like features, Phoenix Recovery is a complete marketing and business management platform. It replaces your CRM, your phone system, your review software, your website, and your marketing agency with one unified system built specifically for contractors.' },
    { question: 'Is there a long-term contract?', answer: 'No. All our plans are month-to-month. We believe in earning your business every single day. You can cancel at any time, no questions asked.' },
    { question: 'Is there a setup fee?', answer: 'Yes, we have a one-time onboarding fee to cover your professional website build, system setup, automation configuration, and team training. It\'s how we ensure you\'re set up for success from day one.' },
    { question: 'What if I\'m not tech-savvy?', answer: 'Not a problem. We designed the platform to be incredibly simple and intuitive. If you can use a smartphone, you can use Phoenix Recovery. Plus, our team provides full training and ongoing support.' },
    { question: 'How long does the setup process take?', answer: 'Our typical onboarding process, from your first call to launching your new website and system, takes about 7-10 business days. We handle all the heavy lifting for you.' },
    { question: 'I already have a website. Can I keep it?', answer: 'You can, but you\'ll miss out on the seamless integration that makes our platform so powerful. Our websites are specifically designed to work with our marketing automation tools to maximize lead capture and conversion. We include a new website build with every plan.' },
    { question: 'Will this work for a one-man-show?', answer: 'Absolutely. The platform is designed to scale. It\'s just as powerful for a solo operator who needs to get organized and look professional as it is for a multi-crew company looking to grow aggressively.' },
    { question: 'Do I own my website and my customer list?', answer: 'Absolutely. You 100% own your domain, your website content, and your customer list. If you ever decide to leave, you take all your assets with you.' }
  ];

  toggleFaq(index: number) {
    this.openFaq.update(current => (current === index ? null : index));
  }
}