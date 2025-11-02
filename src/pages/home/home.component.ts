import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CtaSectionComponent } from '../../components/shared/cta-section/cta-section.component';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';
import { CommonModule } from '@angular/common';

// New Interactive Components
import { ResultsDashboardComponent } from './results-dashboard/results-dashboard.component';
import { TransformationSliderComponent } from './transformation-slider/transformation-slider.component';
import { CommandCenterComponent } from './command-center/command-center.component';
import { OnboardingProcessComponent } from './onboarding-process/onboarding-process.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [
    RouterLink, 
    CtaSectionComponent, 
    AnimateOnScrollDirective, 
    CommonModule,
    ResultsDashboardComponent,
    TransformationSliderComponent,
    CommandCenterComponent,
    OnboardingProcessComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  openFaq = signal<number | null>(null);

  hero = {
    title: `The Operating System for America's Most <span class="text-amber-400">Successful Contractors</span>`,
    subtitle: `We provide the platform, process, and partnership that turns great contractors into dominant business owners. Stop fighting chaos. Start building an empire.`,
    avatars: [
      'https://34b5c4bd622194aff81f417c1e9fe6dc.r2.cloudflarestorage.com/chimera_assets/5b57fedb283a08933c5e2a20a943d3b7cd0c6337aee5e12d34234eb8a4ba391d.webp',
      'https://34b5c4bd622194aff81f417c1e9fe6dc.r2.cloudflarestorage.com/chimera_assets/1c27307e9a7eedcf913f61feda635770ee4fd474d6b32499454009b8b7eab241.webp',
      'https://34b5c4bd622194aff81f417c1e9fe6dc.r2.cloudflarestorage.com/chimera_assets/93fdcd99cee1369f2ad615bc575d36f92d112c88258eef2c67b79583c015b583.webp',
      'https://34b5c4bd622194aff81f417c1e9fe6dc.r2.cloudflarestorage.com/chimera_assets/e6762d09d03bd7d899930516e8bfe241372daf0d819c66173f5f757f66725c54.webp',
      'https://picsum.photos/seed/p5/100/100'
    ],
  };

  authorityLogos = [
    { name: 'Forbes', imageUrl: 'https://34b5c4bd622194aff81f417c1e9fe6dc.r2.cloudflarestorage.com/chimera_assets/5e69e47e12be4129c04682f641ef88a041d9d7d24698301da51429a1045ed583.webp' },
    { name: 'Inc. 5000', imageUrl: 'https://picsum.photos/seed/inc5000/200/50' },
    { name: 'Builder Magazine', imageUrl: 'https://34b5c4bd622194aff81f417c1e9fe6dc.r2.cloudflarestorage.com/chimera_assets/9cd6dfda9c91c7cc824196e3eeaaeda8611b3a5c81d00bccdb56b3024a4a08f7.webp' },
    { name: 'Roofing Contractor', imageUrl: 'https://picsum.photos/seed/roofermag/200/50' },
    { name: 'This Old House', imageUrl: 'https://picsum.photos/seed/oldhouse/200/50' },
    { name: 'HGTV', imageUrl: 'https://34b5c4bd622194aff81f417c1e9fe6dc.r2.cloudflarestorage.com/chimera_assets/9a260ea48906b55ebf88c915985e808bfc2a440800f4b8001df209d1db8a0460.webp' }
  ];

  problemAgitation = [
    { title: 'The "Sunday Night Dread"', description: 'That sinking feeling when you realize your weekend is over and you have a mountain of paperwork, callbacks, and quotes to deal with before you can even start the real work.' },
    { title: 'Phone Glued To Your Hand', description: 'You can\'t even have dinner with your family without one eye on your phone, terrified you\'ll miss a lead. Every buzz is a potential job, but also an interruption.' },
    { title: 'Lead Follow-Up Purgatory', description: 'You remember to call a new lead... two days later. By then, they\'ve already hired someone else who was faster. Another one slipped through the cracks.' }
  ];

  quantifiedPain = [
      { title: 'The Cost of a Missed Call', description: 'If your average job is worth <span class="font-bold">$2,500</span> and you miss just <span class="font-bold">2 calls a week</span> that go to a competitor...', value: '$5,000+', subtext: 'in lost potential revenue per month.' },
      { title: 'The Cost of Wasted Time', description: 'If you spend <span class="font-bold">5 hours a week</span> on admin tasks that could be automated, and your time is worth <span class="font-bold">$100/hr</span>...', value: '$2,000', subtext: 'in lost personal or billable time per month.' }
  ];

  failedSolutions = [
      { title: 'DIY / "The Nephew"', description: 'You tried building a Wix site or had a family member "help." It looks amateur, doesn\'t work on mobile, and worse, does nothing to actually capture leads.' },
      { title: 'The Patchwork of Apps', description: 'You\'ve taped together 5 different tools for your CRM, phone, reviews, etc. Nothing talks to each other, leads get lost in the shuffle, and you\'re paying a fortune in subscriptions.' },
      { title: 'The Cheap Agency', description: 'You hired a "marketing guy" who charged you a monthly fee for vague "SEO services" and delivered zero tangible results or ROI. They don\'t understand your business.' }
  ];
  
  videoTestimonials = [
    { name: 'John Doe', company: 'JD Roofing', videoThumbnailUrl: 'https://34b5c4bd622194aff81f417c1e9fe6dc.r2.cloudflarestorage.com/chimera_assets/8cffef3d6db47a5588906d2367fcefe5584bae52baa488c9db04cf76b0b254fe.webp' },
    { name: 'Mike Smith', company: 'Smith Electric', videoThumbnailUrl: 'https://34b5c4bd622194aff81f417c1e9fe6dc.r2.cloudflarestorage.com/chimera_assets/7b87c81709d5504610c56a6fd1cd86f7bd568496d6aff9bd3ddc698cec2891ae.webp' },
    { name: 'Carlos Garcia', company: 'Garcia Landscaping', videoThumbnailUrl: 'https://34b5c4bd622194aff81f417c1e9fe6dc.r2.cloudflarestorage.com/chimera_assets/d304e29cab5c7bfacf4b9e3e95dd87ea6bb3219d6c914a2e39f823ee557cfc4c.webp' },
  ];
  
  writtenReviews = [
      { source: 'Google', quote: 'The entire system is a game-changer. My new website looks a thousand times more professional and it actually brings in leads.', author: 'Mike Smith, Smith Electric' },
      { source: 'Facebook', quote: 'I used to lose leads because I\'d forget to check my Facebook page. Now everything is in one place. Best investment I\'ve made.', author: 'Carlos Garcia, Garcia Landscaping' }
  ];

  founder = {
    name: 'Alex Riley',
    title: 'Founder & CEO',
    imageUrl: 'https://34b5c4bd622194aff81f417c1e9fe6dc.r2.cloudflarestorage.com/chimera_assets/30b0c61402492f08951827d55c3a4727b1a8813b6cb375692dc07ec40f69ef18.webp',
    story: `Alex grew up in a family of contractors. He saw firsthand the long hours and the stress of running a business after their outdated website was hacked, shutting down their main source of leads. After a decade in tech, Alex founded Phoenix Recovery with a single mission: to give contractors the bulletproof technology and systems they deserve, so they can win back their time and dominate their market.`
  };

  coreValues = [
    { title: 'We Give a F*ck', description: 'We genuinely care about our clients\' success. Your wins are our wins.' },
    { title: 'Execute', description: 'Talk is cheap. We focus on getting things done and delivering results.' },
    { title: 'Integrity', description: 'We do what we say we\'re going to do. No excuses, no bullshit.' },
    { title: 'Human', description: 'We are real people you can talk to. We build relationships, not just accounts.' }
  ];
  
  faqs = [
    {
      question: 'Is this just another CRM?',
      answer: 'No. While we have CRM-like features, Phoenix Recovery is a complete marketing and business management platform. It replaces your CRM, your phone system, your review software, your website, and your marketing agency with one unified system built specifically for contractors.'
    },
    {
      question: 'Is there a long-term contract?',
      answer: 'No. All our plans are month-to-month. We believe in earning your business every single day. You can cancel at any time, no questions asked.'
    },
    {
      question: 'How long does the setup process take?',
      answer: 'Our typical onboarding process, from your first call to launching your new website and system, takes about 7-10 business days. We handle all the heavy lifting for you.'
    },
    {
      question: 'Will this work for a one-man-show?',
      answer: 'Absolutely. The platform is designed to scale. It\'s just as powerful for a solo operator who needs to get organized and look professional as it is for a multi-crew company looking to grow aggressively.'
    },
    {
      question: 'Do I need to be tech-savvy to use this?',
      answer: 'Not at all. We designed the platform to be incredibly simple and intuitive. If you can use a smartphone, you can use Phoenix Recovery. Plus, our team provides full training and ongoing support.'
    }
  ];

  toggleFaq(index: number) {
    this.openFaq.update(current => (current === index ? null : index));
  }
}
