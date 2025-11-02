import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtaSectionComponent } from '../../components/shared/cta-section/cta-section.component';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  imports: [CommonModule, CtaSectionComponent, AnimateOnScrollDirective],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  openFaq = signal<number | null>(null);

  toggleFaq(index: number) {
    this.openFaq.update(current => (current === index ? null : index));
  }

  data = {
    hero: {
      title: `You're One Call Away From a <span class="text-amber-400">Better Business.</span>`,
      subtitle: `This isn't a sales call. It's a free, 20-minute strategy session where we'll build a custom blueprint to solve your biggest challenges. Stop guessing. Start growing.`
    },
    whyCall: {
      title: `This is a Blueprint Call, Not a Sales Pitch.`,
      description: `Our goal is to give you a massive amount of value in a short amount of time. We'll listen to your challenges and map out a clear, actionable plan to help you get more leads, save time, and build a more profitable business.`,
      points: [
        { title: 'Free Website & SEO Audit', text: 'We\'ll analyze your current online presence to find your biggest opportunities.' },
        { title: 'Custom Growth Blueprint', text: 'You\'ll leave with a 3-step plan you can implement immediately.' },
        { title: 'No-Pressure Q&A', text: 'We\'ll answer all your questions about marketing, tech, and our system.' },
      ]
    },
    notCall: {
      title: 'What This Call is <span class="text-red-500">NOT</span>',
      points: [
        'A high-pressure pitch from a pushy salesperson.',
        'A generic presentation that doesn\'t apply to you.',
        'A waste of your valuable time. We promise.'
      ]
    },
    whoFor: {
      title: 'This Blueprint Call is for Contractors Who Are...',
      points: [
        'Tired of working 60+ hour weeks and feeling stuck.',
        'Serious about growing their business and building a real brand.',
        'Ready to stop wasting money on marketing that doesn\'t work.',
        'Looking for a system to get organized and win back their time.'
      ]
    },
    guide: {
      name: 'Alex Riley',
      title: 'Founder & Head of Strategy',
      imageUrl: 'https://pub-7b0107d999fd4c8a8018460dffd25378.r2.dev/chimera_assets/21c2d8abd967dc603680c09461b33734fbafe37fac4961d3583c0fdc608f2d65.webp',
      bio: `You'll be speaking directly with me. I grew up in a contractor family, and I founded Phoenix Recovery to solve the exact problems that kept my father up at night. I'm not a salesperson; I'm a problem-solver. My only goal is to see if we can help.`
    },
    agenda: {
      title: 'The 20-Minute Blueprint Agenda',
      steps: [
        { time: '0-5 Min', text: 'Listen to your goals & biggest challenges.' },
        { time: '5-15 Min', text: 'Live audit of your online presence & map out your growth plan.' },
        { time: '15-20 Min', text: 'Answer your questions and see if we\'re a good fit to help.' },
      ]
    },
    leaveWith: {
      title: 'You Will Leave This Call With:',
      points: [
        'A clear diagnosis of your website\'s lead-leaking problems.',
        'A 3-step action plan to increase your leads and revenue.',
        'A transparent, no-fluff quote if you\'d like our help to execute the plan.'
      ]
    },
    guarantee: {
      title: 'The "Worth Your Time" Guarantee',
      description: 'We know your time is your most valuable asset. We are so confident this Blueprint Call will provide immense value that we offer this promise: If at the end of our call you don\'t feel it was worth your time, we will send you a <span class="font-bold text-slate-800 dark:text-white">$50 Home Depot gift card</span> to thank you for the opportunity.'
    },
    booking: {
      title: 'Schedule Your Free Blueprint Call',
      subtitle: 'Pick a time that works for you below. It only takes a minute.'
    },
    testimonials: [
        { quote: 'The initial 20-minute call was the most valuable business consultation I\'ve ever had. I learned more in that call than I did from a year with my old marketing agency.', author: 'John D., JD Roofing' },
        { quote: 'No pressure at all. Alex just listened to my problems and showed me a clear path forward. I felt like he genuinely wanted to help, whether I signed up or not.', author: 'Mike S., Smith Electric' }
    ],
    costOfWaiting: {
        title: 'The Cost of "I\'ll do it later..."',
        text: 'Every week you delay putting a real system in place is another week of missed calls, lost leads, and wasted time. The cost of inaction is far greater than the investment in a solution. Book your call today and stop the bleeding.',
        stat: '$2,000+',
        subtext: 'Average weekly lost revenue from missed opportunities.'
    },
    faqs: [
        { q: 'Is this really free?', a: '100% free. There is no cost, no obligation, and no credit card required. Our goal is to provide value first.' },
        { q: 'What do I need to prepare?', a: 'Nothing. Just come with an open mind and be ready to talk about your business goals and challenges.' },
        { q: 'Will this be a technical call?', a: 'Not at all. We speak in plain English and focus on business results, not technical jargon.' },
        { q: 'Is there any obligation to buy?', a: 'Absolutely not. This is a strategy session, not a sales pitch. We\'ll show you a plan, and if you want our help to implement it, great. If not, the plan is yours to keep, no strings attached.' }
    ],
    otherMethods: {
      title: 'Not Ready for a Call?',
      subtitle: 'No problem. Here are other ways to get in touch.',
      phone: '800-555-1234',
      email: 'hello@phoenixsiterecovery.com'
    },
    map: {
        title: 'Serving Contractors Nationwide',
        imageUrl: 'https://pub-7b0107d999fd4c8a8018460dffd25378.r2.dev/chimera_assets/53bd22237596f0799688ddb3a6dd4b33db0d8d64b490c06a428adc5e03a2b71b.webp'
    }
  };
}
