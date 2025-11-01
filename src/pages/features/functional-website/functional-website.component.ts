import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CtaSectionComponent } from '../../../components/shared/cta-section/cta-section.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollDirective } from '../../../directives/animate-on-scroll.directive';

// New Interactive Components
import { AnatomyOfAWebsiteComponent } from './anatomy-of-a-website/anatomy-of-a-website.component';
import { WebsiteBeforeAfterComponent } from './website-before-after/website-before-after.component';
import { MobileShowcaseComponent } from './mobile-showcase/mobile-showcase.component';


@Component({
  selector: 'app-functional-website',
  standalone: true,
  templateUrl: './functional-website.component.html',
  imports: [
    CtaSectionComponent, 
    RouterLink, 
    CommonModule, 
    AnimateOnScrollDirective,
    AnatomyOfAWebsiteComponent,
    WebsiteBeforeAfterComponent,
    MobileShowcaseComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FunctionalWebsiteComponent {
  openFaq = signal<number | null>(null);

  toggleFaq(index: number) {
    this.openFaq.update(current => (current === index ? null : index));
  }

  // New, expanded data structure for the 15-section sales page
  hero = {
    title: `Your Website Isn't a Brochure. <br> It's Your <span class="text-amber-400">#1 Salesperson.</span>`,
    subtitle: `Stop letting your website be a passive, online business card. We build high-performance "Digital Job Sites" engineered for one purpose: to turn clicks into customers, 24/7.`,
    imageUrl: '../../../../chimera_assets/chimera_110_chimera_110.webp'
  };

  problem = {
    title: `Is Your Website a <span class="text-amber-500">Ghost Town?</span>`,
    description: `You know you need a website, but your current one feels like a dead-end. It gets some visitors, but the phone isn't ringing. It's not a tool; it's just a bill.`,
    points: [
      { text: `Doesn't show up on Google.`, icon: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z' },
      { text: `Looks broken on a phone.`, icon: 'M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h-3V1.5m3 0h-3m-3.75 18h15M12 18h.008v.008H12v-.008z' },
      { text: `Doesn't generate leads.`, icon: 'M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.122 2.122l7.81-7.81' }
    ]
  };

  quantifiedPain = {
    title: `The "Invisibility Tax" on Your Business`,
    description: `A bad website isn't just an annoyance; it's an invisible leak that's actively draining money from your business.`,
    calculation: {
      premise: `If your website fails to convert just <span class="font-bold text-white">3 potential customers</span> a month, and your average job is worth <span class="font-bold text-white">$2,500</span>...`,
      value: `-$7,500`,
      conclusion: `in lost revenue per month.`
    }
  };

  failedSolutions = [
      { title: 'The DIY Disaster (Wix/Squarespace)', description: 'Looks generic, isn\'t optimized for contractors, and has zero lead-capture muscle. It’s a digital business card, not a sales tool.' },
      { title: 'The Cheap Freelancer', description: 'You paid someone a few hundred bucks on a marketplace. They delivered a slow, clunky site and disappeared, leaving you with a broken mess.' },
      { title: '"My Nephew Built It"', description: 'He\'s great at video games, but he doesn\'t understand conversion rate optimization, local SEO, or what makes a customer trust you enough to call.' }
  ];

  testimonials = [
    { quote: 'I was blown away by the website design. It looks like something a million-dollar company would have. It\'s given me so much more confidence when talking to new customers.', author: 'David C., Chen\'s Plumbing' },
    { quote: 'My new website looks a thousand times more professional. The best part is that it actually brings in leads. It paid for itself in the first month.', author: 'John D., JD Roofing' },
    { quote: 'The team handled everything from the writing to the photos. The final product was better than I could have imagined. I\'m getting compliments from customers on it.', author: 'Mike S., Smith Electric' }
  ];

  faqs = [
    { q: 'Can I use my own domain name?', a: 'Absolutely. We can use your existing domain or help you secure a new one.' },
    { q: 'Who writes the content?', a: 'We do! Our team writes professional, SEO-friendly content tailored to your business and service area.' },
    { q: 'Can I make updates to the site myself?', a: 'While we handle the heavy lifting, we can provide access for you to make minor updates if you wish. Most clients prefer we handle everything.' },
    { q: 'How long does it take to build?', a: 'Typically, your new website will be live within 7-10 business days after your onboarding call.' }
  ]
}
