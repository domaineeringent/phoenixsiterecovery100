import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';
import { CtaSectionComponent } from '../../components/shared/cta-section/cta-section.component';

@Component({
  selector: 'app-book-call',
  templateUrl: './book-call.component.html',
  standalone: true,
  imports: [CommonModule, AnimateOnScrollDirective, CtaSectionComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookCallComponent {
  openFaq = signal<number | null>(null);

  toggleFaq(index: number) {
    this.openFaq.update(current => (current === index ? null : index));
  }

  data = {
    hero: {
      title: `This is the Most Valuable <span class="text-amber-400">20 Minutes</span> You'll Spend On Your Business This Year.`,
      subtitle: `Stop guessing. Stop wasting money. This isn't a sales demo. This is a complimentary Blueprint Session where we will build a custom, actionable plan to fix your marketing and win back your time.`
    },
    crossroads: {
      title: `You're at a Crossroads.`,
      description: `You're here because you know what you're doing isn't working. You're working harder, not smarter, and leads are slipping through the cracks. You have two paths forward:`,
      path1: {
        title: 'Path 1: More of the Same',
        description: 'Continue juggling a dozen apps, losing leads, and working nights and weekends. Hope things get better.',
        icon: 'M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636'
      },
      path2: {
        title: 'Path 2: The Path to Control',
        description: 'Invest 20 minutes to get a clear, expert blueprint that systematizes your business and gives you your freedom back.',
        icon: 'M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 10.5V6.75a4.5 4.5 0 119 0v3.75'
      }
    },
    whatCallIs: {
      title: `What You Get On This Free "Blueprint Call"`,
      points: [
        { title: 'A Free Website & SEO Audit', text: 'We\'ll put your website on the big screen and show you exactly where you\'re losing leads and why you\'re not ranking on Google.' },
        { title: 'A Custom 3-Step Growth Plan', text: 'You\'ll leave with an actionable, step-by-step plan to get more leads, automate your follow-up, and build a 5-star reputation.' },
        { title: 'A Transparent Look at Our System', text: 'We\'ll show you the exact tools you can use to execute your new growth plan, and answer every single one of your questions.' },
      ]
    },
    whatCallIsNot: {
      title: 'What This Call is <span class="text-red-500">NOT</span>',
      points: [
        'A high-pressure pitch from a slick salesperson.',
        'A generic, one-size-fits-all presentation.',
        'A waste of your valuable time. We guarantee it.'
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
      imageUrl: 'https://34b5c4bd622194aff81f417c1e9fe6dc.r2.cloudflarestorage.com/chimera_assets/b29e92cd90022b406bd03fe891829212f33f4481649e323e2f5d6f6f182c0168.webp',
      bio: `You'll be speaking directly with me. I grew up in a contractor family, and I founded Phoenix Recovery to solve the exact problems that kept my father up at night. I'm not a salesperson; I'm a problem-solver. My only goal is to see if we can help.`
    },
    agenda: {
      title: 'The Hyper-Efficient 20-Minute Agenda',
      steps: [
        { time: '0-5 Min', text: 'Deep Dive: We listen to your goals & biggest headaches.' },
        { time: '5-15 Min', text: 'Blueprint: Live audit & mapping your custom growth plan.' },
        { time: '15-20 Min', text: 'Q&A: We answer your questions and see if we\'re a fit.' },
      ]
    },
    guarantee: {
      title: 'The "Clarity" Guarantee',
      description: 'We know your time is your most valuable asset. We are so confident this Blueprint Call will provide immense value that we offer this promise: If at the end of our call you don\'t have at least <span class="font-bold text-slate-800 dark:text-white">3 actionable strategies</span> you can implement immediately, we will send you a <span class="font-bold text-slate-800 dark:text-white">$50 Home Depot gift card</span> for your time.'
    },
    booking: {
      title: 'Schedule Your Free Blueprint Call',
      subtitle: 'Pick a time that works for you below. Take the first step to getting your time back.'
    },
    whatHappensNext: {
        title: 'What Happens After You Book?',
        steps: [
            { number: '01', title: 'Check Your Email', description: 'You\'ll get an instant confirmation with a calendar invite and a link for our video call.' },
            { number: '02', title: 'We Do Our Homework', description: 'Our team will perform a preliminary audit of your online presence so we can come to the call prepared.' },
            { number: '03', title: 'We Build Your Blueprint', description: 'We\'ll meet at the scheduled time to map out your custom plan for growth.' },
        ]
    },
    testimonials: [
        { quote: 'The initial 20-minute call was the most valuable business consultation I\'ve ever had. I learned more in that call than I did from a year with my old marketing agency.', author: 'John D., JD Roofing' },
        { quote: 'No pressure at all. Alex just listened to my problems and showed me a clear path forward. I felt like he genuinely wanted to help, whether I signed up or not.', author: 'Mike S., Smith Electric' }
    ],
    costOfDelay: {
        title: 'The Cost of "Thinking About It"',
        text: 'Every week you delay putting a real system in place is another week of missed calls, lost leads, and wasted time. The cost of inaction is far greater than the investment in a solution.',
        stat: '$2,000+',
        subtext: 'Average weekly lost revenue from missed opportunities.'
    },
    faqs: [
        { q: 'Is this really free?', a: '100% free. There is no cost, no obligation, and no credit card required. Our goal is to provide value first.' },
        { q: 'What do I need to prepare?', a: 'Nothing. Just come with an open mind and be ready to talk about your business goals and challenges.' },
        { q: 'Will this be a technical call?', a: 'Not at all. We speak in plain English and focus on business results, not technical jargon.' },
        { q: 'Is there any obligation to buy?', a: 'Absolutely not. This is a strategy session, not a sales pitch. We\'ll show you a plan, and if you want our help to implement it, great. If not, the plan is yours to keep, no strings attached.' }
    ],
    areWeAFit: {
        title: 'Are We a Fit? A Quick Check.',
        fit: {
            title: "We're a great fit if you...",
            points: ['Are an ambitious owner who wants to grow.', 'Value systems and efficiency.', 'Are tired of marketing that doesn\'t work.', 'Are a contractor in the home services industry.']
        },
        notFit: {
            title: "We're NOT a fit if you...",
            points: ['Are looking for a "magic bullet" with no effort.', 'Are happy with your current level of growth.', 'Prefer to DIY everything with free tools.', 'Are not a service-based business.']
        }
    }
  };
}
