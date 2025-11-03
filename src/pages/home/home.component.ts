import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CtaSectionComponent } from '../../components/shared/cta-section/cta-section.component';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [
    RouterLink, 
    CtaSectionComponent, 
    AnimateOnScrollDirective, 
    CommonModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  openFaq = signal<number | null>(null);

  hero = {
    title: `Your Website Is Costing You Jobs. <span class="text-amber-400">We Fix That.</span>`,
    subtitle: `Stop losing leads to a broken, invisible, or embarrassing website. This isn't a sales pitch. It's a rescue mission. Book a free, no-BS Site Audit and we'll give you a battle plan to turn your biggest liability into your #1 salesperson.`,
    avatars: [
      'https://picsum.photos/seed/p1/100/100',
      'https://picsum.photos/seed/p2/100/100',
      'https://picsum.photos/seed/p3/100/100',
    ],
  };

  problems = [
    { 
      title: 'Security Warnings Scare Customers', 
      description: 'Your "Not Secure" warning is a digital stop sign. Customers see it and immediately think you\'re unprofessional or a scam. They don\'t call you. They call your competitor.',
      icon: 'M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z'
    },
    { 
      title: 'Invisible on Google', 
      description: 'You could be the best contractor in town, but if you don\'t show up on Google Maps when a customer searches "plumber near me," you don\'t exist. Your phone stays silent.',
      icon: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
    },
    { 
      title: 'Looks Broken on a Phone', 
      description: 'Over 70% of customers will visit your site on their phone. If it\'s a jumbled, unreadable mess, they assume your work is sloppy too. They\'re gone in seconds.',
      icon: 'M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h-3V1.5m3 0h-3m-3.75 18h15M12 18h.008v.008H12v-.008z'
    }
  ];

  failedSolutions = [
      { title: 'The DIY GoDaddy Nightmare', description: 'You built it yourself to save money, but it looks amateur, it\'s invisible on Google, and it doesn\'t actually generate leads. It\'s a digital paperweight.' },
      { title: 'The "Marketing Guy" Who Vanished', description: 'You paid a monthly fee for vague promises and zero results. Now they won\'t even answer your calls, and you\'re stuck with a broken site you can\'t update.' },
      { title: 'Ignoring It', description: 'You decided your business runs on "word of mouth." Meanwhile, your competitors are using their websites as 24/7 salespeople to systematically steal your customers.' }
  ];

  recoveryPlan = {
      title: `The Phoenix <span class="text-amber-500">Recovery Plan</span>`,
      subtitle: `This isn't a 6-month marketing retainer. It's a fast, surgical strike to fix what's broken and turn your website into a lead-generating asset.`,
      steps: [
        { number: '1', title: 'Free Site Audit Call', description: 'A 20-minute, no-BS call where we put your site on the screen and show you exactly what\'s broken, why it\'s costing you jobs, and how to fix it. You get a clear action plan, whether you hire us or not.' },
        { number: '2', title: 'We Execute the Fixes', description: 'If we\'re a fit, our team gets to work immediately. We fix the security issues, optimize for mobile, dial in the on-site SEO, and install the critical lead-capture tools. We do the work. You keep running your business.' },
        { number: '3', title: 'You Get Control Back', description: 'Within days, your website is no longer a liability. It\'s a professional, trustworthy sales tool that you can be proud of, capturing leads and building your brand while you sleep.' }
      ]
  };

  faqs = [
    {
      question: 'Is this a whole new website?',
      answer: 'It can be. If your site is salvageable, our Recovery Plan focuses on fixing and upgrading it. If it\'s a total loss, the plan includes deploying a brand new, high-performance site. We determine the best path on our initial call.'
    },
    {
      question: 'How fast does this work?',
      answer: 'Our goal is to get your site fixed and functional within 7-10 business days from our first call. This is not a long, drawn-out process. It\'s a rapid deployment to stop the bleeding and get you results.'
    },
    {
      question: 'What does a "Recovery Plan" cost?',
      answer: 'We don\'t have one-size-fits-all pricing. Every situation is different. We\'ll diagnose the issues on our free Site Audit call and give you a simple, transparent quote with a clear ROI. There are no long-term contracts or hidden fees.'
    },
    {
      question: 'Do I need to be tech-savvy?',
      answer: 'Absolutely not. We handle everything. Our job is to take the technical headaches off your plate so you can focus on what you do best. We speak plain English, not "geek speak."'
    }
  ];

  toggleFaq(index: number) {
    this.openFaq.update(current => (current === index ? null : index));
  }
}