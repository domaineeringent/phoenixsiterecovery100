import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtaSectionComponent } from '../../components/shared/cta-section/cta-section.component';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-the-difference',
  templateUrl: './the-difference.component.html',
  imports: [CommonModule, CtaSectionComponent, AnimateOnScrollDirective, RouterLink],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TheDifferenceComponent {
  openFaq = signal<number | null>(null);

  toggleFaq(index: number) {
    this.openFaq.update(current => (current === index ? null : index));
  }

  hero = {
    title: `You're a Great Contractor. <br> But You're <span class="text-amber-400">Trapped.</span>`,
    subtitle: `You're stuck on the "Contractor's Hamster Wheel"—juggling a dozen apps, drowning in paperwork, and working 60-hour weeks just to keep up. It's time to escape.`,
    imageUrl: 'https://34b5c4bd622194aff81f417c1e9fe6dc.r2.cloudflarestorage.com/chimera_assets/cbe2a5205a5b79dfaee2a621ca7f3763b4cd869f1b6d56efab66d40805ac387e.webp'
  };

  problem = {
    title: `The Symptoms of "The Trap"`,
    description: `This isn't your fault. The tools you've been given are broken. You've been sold a patchwork of apps that were never designed to work together, creating more work, not less.`,
    points: [
      { text: `Your phone is a chaotic mix of apps, texts, and emails.`, icon: 'M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h-3V1.5m3 0h-3m-3.75 18h15M12 18h.008v.008H12v-.008z' },
      { text: `You spend more time on admin than on the tools.`, icon: 'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z' },
      { text: `You know leads are slipping through the cracks.`, icon: 'M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z' },
    ]
  };

  quantifiedPain = {
    title: `The Hidden "Chaos Tax" on Your Business`,
    description: `This disorganization isn't just stressful; it's a silent tax that costs you thousands every month in lost jobs, wasted time, and expensive, overlapping software subscriptions.`,
    calculation: {
      premise: `The average contractor loses <span class="font-bold text-white">2-3 jobs per month</span> to slow follow-up, wastes <span class="font-bold text-white">5+ hours per week</span> on admin, and pays <span class="font-bold text-white">$500+/mo</span> for apps that don't work together...`,
      value: `-$8,000+`,
      conclusion: `in lost revenue & wasted expenses per month.`
    }
  };
  
  failedSolutions = [
      { title: 'The "All-in-One" CRM', description: 'It promised the world, but it\'s just a glorified, overpriced address book. It doesn\'t manage your leads, your phone, or your reviews.' },
      { title: 'The Marketing Agency', description: 'They send you a bill and a confusing report, but they don\'t give you the tools to actually manage the leads they (might) generate.' },
      { title: 'The Patchwork of Apps', description: 'You\'ve taped together 5-7 different tools. Nothing syncs, leads get lost in the shuffle, and you\'re the poor soul stuck as the human glue holding it all together.' }
  ];
  
  blueprintPillars = [
    { name: 'Systematize Lead Flow', description: 'We unify every lead source—website, Google, Facebook, phone calls—into one inbox so you never miss an opportunity.', icon: 'M13.5 2.25L15 3.75l-2.25 2.25L15 8.25l-1.5 1.5L11.25 7.5 9 9.75l1.5 1.5L12.75 9 15 11.25l-1.5 1.5L11.25 10.5 9 12.75l1.5 1.5L12.75 12 15 14.25l-1.5 1.5L11.25 13.5 9 15.75l1.5 1.5L12.75 15 15 17.25l-1.5 1.5L11.25 16.5 9 18.75l1.5 1.5L12.75 18 15 20.25l-1.5 1.5L11.25 19.5 9 21.75l-1.5-1.5L9.75 18 7.5 15.75l1.5-1.5L11.25 16.5 9 14.25l1.5-1.5L12.75 15 15 12.75l-1.5-1.5L11.25 9 9 6.75l1.5-1.5L12.75 7.5 15 5.25l-1.5-1.5L11.25 6 9 3.75 7.5 2.25 9 3.75l2.25-2.25L9 3.75 7.5 5.25 9 6.75 6.75 9 9 11.25 6.75 13.5 9 15.75 6.75 18 9 20.25l-1.5 1.5L5.25 18l-1.5-1.5L6 14.25 3.75 12 6 9.75 3.75 7.5 6 5.25 3.75 3 2.25 4.5 4.5 6.75 2.25 9l1.5 1.5L6 8.25l2.25 2.25L6 12.75l-1.5 1.5L6.75 15l2.25-2.25L11.25 15l-1.5 1.5L12 18.75l2.25-2.25L12 14.25l-1.5-1.5L12.75 10.5l2.25-2.25L12.75 6z' },
    { name: 'Automate Sales', description: 'We install automated follow-up that engages every lead instantly, ensuring you\'re the first to respond, every time.', icon: 'M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0 0 11.667 0l3.181-3.183m-4.991-2.691v4.99' },
    { name: 'Streamline Operations', description: 'We replace 5+ tools with one platform to manage your communication, reviews, payments, and marketing.', icon: 'M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z' }
  ];

  comparisonData = [
    { feature: 'Core Tools', oldWay: '5-7 Separate Apps', phoenixWay: '1 Unified Platform' },
    { feature: 'Monthly Cost', oldWay: '$500 - $1000+', phoenixWay: 'Starts at $297' },
    { feature: 'Lead Management', oldWay: 'Manual & Leaky', phoenixWay: 'Automated & Centralized' },
    { feature: 'Customer Communication', oldWay: 'Scattered & Disjointed', phoenixWay: 'Unified Inbox' },
    { feature: 'Time Investment', oldWay: '10+ Hours / Week', phoenixWay: '2-3 Hours / Week' },
    { feature: 'Support', oldWay: 'Multiple Support Teams', phoenixWay: 'One Dedicated Team' }
  ];

  caseStudy = {
    name: 'Smith Electric',
    summary: `Mike Smith was using 6 different apps to run his business and working until 10 PM every night. After switching to Phoenix Recovery, he replaced all of them with our single platform. He now finishes his admin work by 5:30 PM, his lead response time has dropped from hours to minutes, and he grew his revenue by 30% in 6 months.`,
    before: { title: 'The Trap', items: ['6 Apps', '10 PM finish time', 'Leads lost daily'] },
    after: { title: 'The Blueprint', items: ['1 Platform', '5:30 PM finish time', 'Every lead captured'] }
  };

  testimonials = [
    { quote: 'Before Phoenix, I was the bottleneck in my own business. Now, the system handles 90% of the follow-up. I\'m working less and making more. It feels like I finally got my life back.', author: 'Mike S., Smith Electric' },
    { quote: 'I was paying for five different tools to do what I can now do in one. I\'m saving hundreds of dollars a month and countless hours of frustration. My only regret is not switching sooner.', author: 'John D., JD Roofing' },
    { quote: 'The biggest difference is control. I finally feel like I\'m in the driver\'s seat of my business, not just reacting to it. I can see everything in one place.', author: 'Carlos G., Garcia Landscaping' }
  ];
  
  onboardingProcess = [
    { number: '01', title: 'Blueprint Call', description: 'A no-pressure call to map out your escape from "The Trap."' },
    { number: '02', title: 'We Build Your System', description: 'Our team builds your website and sets up your entire system for you.' },
    { number: '03', title: 'Launch & Training', description: 'We launch your system and provide a 25-minute training for your team.' }
  ];

  faqs = [
    { q: 'Is it hard to switch from my current tools?', a: 'No. Our "White Glove" onboarding team handles the entire migration for you. We port your numbers, import your contacts, and set up your automations. Your job is to keep doing your job while we get your new system ready.' },
    { q: 'This seems too good to be true. What\'s the catch?', a: 'There\'s no catch. Modern technology makes this possible. We\'ve just been the first to build it specifically for the trades, focusing only on the tools you actually need and integrating them perfectly, without the bloat of generic CRMs.' },
    { q: 'How is this different from [Competitor Name]?', a: 'Most "all-in-one" platforms are just CRMs with a few bolted-on features. We are a true operating system. We don\'t just track your customers; we run your phone system, your lead capture, your review funnel, and your marketing. It\'s a fundamentally different approach.' },
    { q: 'Will I be locked into a long contract?', a: 'No. All our plans are month-to-month. We have to earn your business every single day. We\'re confident you\'ll stay because of the results you see, not because a contract forces you to.' }
  ]
}