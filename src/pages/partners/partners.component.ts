import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtaSectionComponent } from '../../components/shared/cta-section/cta-section.component';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  imports: [CommonModule, CtaSectionComponent, AnimateOnScrollDirective, RouterLink],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PartnersComponent {
  openFaq = signal<number | null>(null);

  toggleFaq(index: number) {
    this.openFaq.update(current => (current === index ? null : index));
  }

  data = {
    hero: {
      title: `You're Losing a Tech Arms Race You Didn't Know You Were In.`,
      subtitle: `Your competitors are leveraging world-class technology to get faster, smarter, and more efficient. We've assembled the arsenal you need to fight back and win—all in one simple platform.`,
      imageUrl: 'https://pub-7b0107d999fd4c8a8018460dffd25378.r2.dev/chimera_assets/51e9eeba9807271bef3067b819476d6ac325683e9fc18b7b5f847d653bc51499.webp'
    },
    problem: {
      title: `The "Tech Tax" is Crippling Your Business`,
      description: `You're paying for it with more than just money. You're paying with your time, your sanity, and lost jobs.`,
      points: [
        { text: `The confusion of a dozen different apps.`, icon: 'M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z' },
        { text: `The headache of trying to make them "talk" to each other.`, icon: 'M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.83-5.83a1.5 1.5 0 0 0-2.12 0l-1.538 1.538c-.53.53-.53 1.38 0 1.91l2.12 2.12c.53.53 1.38.53 1.91 0l1.538-1.538Z' },
        { text: `The constant worry that a critical tool will break.`, icon: 'M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z' }
      ]
    },
    quantifiedPain: {
      title: `The Real Cost of a "Duct Tape" System`,
      description: `It's not just the subscription fees. The real cost is in the inefficiencies and lost opportunities.`,
      calculation: {
        premise: `Average contractor pays <span class="font-bold text-white">$500+/mo for 5+ apps</span> that don't work together, wastes <span class="font-bold text-white">10+ hours/week</span> on admin, and loses <span class="font-bold text-white">2 jobs/month</span> to system failures...`,
        value: `-$7,000+`,
        conclusion: `in lost revenue & wasted time per month.`
      }
    },
    failedSolutions: [
      { title: 'The "Duct Tape" Solution', description: 'You tried to patch together 5-7 different apps. The result is a fragile, inefficient mess where leads get lost and time gets wasted.' },
      { title: 'The Overpriced "All-in-One"', description: 'You paid a premium for a generic CRM that promised the world but delivered a clunky, complicated system that wasn\'t built for your trade.' },
      { title: 'Ignoring It', description: 'You decided to "keep it simple" with a pen and paper, but your competitors are using technology to get faster, look more professional, and win your jobs.' }
    ],
    theReveal: {
      title: `Stop Being a Systems Integrator. We've Done The Work For You.`,
      description: `We've spent years vetting, partnering with, and deeply integrating the world's best technology into a single, seamless platform. When you partner with Phoenix, you get the power of a multi-million dollar tech stack working for you from day one, for one simple price.`,
      imageUrl: 'https://pub-7b0107d999fd4c8a8018460dffd25378.r2.dev/chimera_assets/a4387e5501bbcca09ce549bbd15d628a9c13d2ab024aee63aab14dd3bf62cfb1.webp'
    },
    arsenal: [
      { 
        category: 'Communication Powerhouse', 
        description: 'Ensuring every call, text, and email is delivered instantly and reliably.',
        partners: [
          { name: 'Twilio', logoUrl: 'https://pub-7b0107d999fd4c8a8018460dffd25378.r2.dev/chimera_assets/b0c0f0f0fc6d565296c7beb4be94dade3cb46d4f6ed72b6ba0a252f76987f8c3.webp', benefit: 'For bulletproof SMS & voice reliability.' },
          { name: 'Mailgun', logoUrl: 'https://picsum.photos/seed/mailgun/200/50', benefit: 'For best-in-class email deliverability.' },
        ]
      },
      { 
        category: 'Search Dominance Engine', 
        description: 'Leveraging the same tools the big marketing agencies use to get you ranked.',
        partners: [
          { name: 'Google', logoUrl: 'https://pub-7b0107d999fd4c8a8018460dffd25378.r2.dev/chimera_assets/f7e05bf55eadf5e78783e52bb9baf740c76683fcd50fef951f040306cbb15674.webp', benefit: 'The core of your local search presence.' },
          { name: 'Ahrefs', logoUrl: 'https://pub-7b0107d999fd4c8a8018460dffd25378.r2.dev/chimera_assets/713b64a750b1a3bbe4fa7a4f40960e368766223b13293617de0da97c46e3dc19.webp', benefit: 'For deep competitor and keyword analysis.' },
        ]
      },
      { 
        category: 'Automation & AI Core', 
        description: 'The brains behind your 24/7 automated sales and operations assistant.',
        partners: [
          { name: 'OpenAI', logoUrl: 'https://picsum.photos/seed/openai/200/50', benefit: 'Powering intelligent responses and summaries.' },
          { name: 'Zapier', logoUrl: 'https://pub-7b0107d999fd4c8a8018460dffd25378.r2.dev/chimera_assets/a51e33002c6528156cfaa39fc16e8bb2d4cd93d265c3e4b3dfca5af29237bc37.webp', benefit: 'Connecting our platform to thousands of other tools.' },
        ]
      },
      { 
        category: 'Payment & Security Fortress', 
        description: 'Providing you and your customers with secure, trustworthy payment processing.',
        partners: [
          { name: 'Stripe', logoUrl: 'https://picsum.photos/seed/stripe/200/50', benefit: 'The gold standard for secure online payments.' },
        ]
      },
    ],
    integrationMagic: {
      title: `The Magic isn't the Parts. It's How They Work <span class="text-amber-500">Together.</span>`,
      description: `Anyone can buy these tools. The Phoenix difference is how we've woven them into a single, intelligent system. When a lead comes from your Google Ad, it instantly triggers a Twilio text message, creates a contact in your CRM, and notifies you—all in less than a second. That's the power of true integration.`,
      imageUrl: 'https://pub-7b0107d999fd4c8a8018460dffd25378.r2.dev/chimera_assets/6c9c5abb23ce74aee752280f57e3f950cc1d0c69d38396075125851eeac8707f.webp'
    },
    futurePacing: {
        title: `Your Competitors are Playing Checkers. We Give You Chess.`,
        description: `While your competition is wrestling with their broken tech, you're focused on what you do best: delivering great work. Your system just works. It's your unfair advantage.`,
        imageUrl: 'https://picsum.photos/seed/future-pacing-partners/800/600'
    },
    caseStudy: {
      name: 'Chillfactor HVAC',
      summary: `Tom at Chillfactor HVAC was paying over $600/mo for 7 different apps. Nothing talked to each other, and he spent his evenings manually moving data between them. After switching to Phoenix, he replaced all 7 apps, saved over $300/mo, and automated 90% of his admin work. This freed him up to hire another technician and grow his business by 40% in one year.`,
      before: { title: 'The "Duct Tape" Mess', cost: '$600/mo', apps: '7', time: '10+ hrs/wk' },
      after: { title: 'The Phoenix OS', cost: '$297/mo', apps: '1', time: '2 hrs/wk' }
    },
    testimonials: [
      { quote: 'I don\'t know what a "Twilio" is, and I don\'t care. All I know is that my phone works, my texts get delivered, and my business is growing. Phoenix handles the tech so I don\'t have to.', author: 'Tom W., Chillfactor HVAC' },
      { quote: 'It\'s like having a full-time IT department for the price of a gym membership. I feel like I\'m running a much bigger, more professional operation now.', author: 'David C., Chen\'s Plumbing' }
    ],
    rdBenefit: {
        title: `We're Your Outsourced R&D Department`,
        description: `The tech world moves fast. A new, game-changing tool is launched every week. We are constantly testing, vetting, and integrating the next generation of technology into the Phoenix platform. You get the benefit of a Silicon Valley R&D team without the multi-million dollar price tag. Your tech stack will never be obsolete.`,
        imageUrl: 'https://picsum.photos/seed/rd-department/800/600'
    },
    guarantee: {
      title: `The "Future-Proof" Guarantee`,
      description: `We guarantee that your business will always be running on a best-in-class, modern tech stack. As technology evolves, we evolve the platform for you. We handle the updates, the integrations, and the security so you can focus on your business. You will never be left behind by technology again.`,
    },
    faqs: [
      { q: 'Why can\'t I just buy these tools myself?', a: 'You could, but you would pay 5-10x more and spend hundreds of hours trying to integrate them. We leverage our scale to get enterprise-level pricing, and our expertise to build the seamless integrations that make the magic happen.' },
      { q: 'What happens if one of your partners has an outage?', a: 'Because we partner with the best, outages are rare. However, our system is built with redundancies. More importantly, you have one team to call: us. We manage the relationship with our partners so you don\'t have to.' },
      { q: 'Do I have to create accounts with all these partners?', a: 'No. You have one account, one login, and one bill with Phoenix Recovery. We manage all the underlying technology for you. That\'s the beauty of the system.' },
      { q: 'What if a better technology comes out?', a: 'That\'s our job! We are constantly evaluating new technology. If a better tool emerges, we will work to integrate it into the platform so you always have the best of the best.' }
    ]
  };
}
