import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CtaSectionComponent } from '../../components/shared/cta-section/cta-section.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  imports: [CtaSectionComponent, RouterLink, CommonModule, AnimateOnScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProcessComponent {
  openFaq = signal<number | null>(null);

  toggleFaq(index: number) {
    this.openFaq.update(current => (current === index ? null : index));
  }
  
  // Data structure for the 15-section high-conversion page
  data = {
    hero: {
      title: `Most "Solutions" Take 3 Months to Launch.<br> We Launch Yours in <span class="text-amber-400">7 Days.</span>`,
      subtitle: `Stop waiting. Our "White Glove" Onboarding Process is a rapid-deployment system that takes you from consultation to a fully-operational marketing and sales machine in one business week.`,
      imageUrl: '../../../chimera_assets/chimera_83_chimera_83.webp'
    },
    problem: {
      title: `Welcome to "Onboarding Hell"`,
      description: `You've been there before. You sign up for a new tool or agency, and what follows is a soul-crushing parade of endless meetings, technical jargon, and surprise delays.`,
      points: [
        { text: `Months of back-and-forth emails.`, icon: 'M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75' },
        { text: `A final product that doesn't work.`, icon: 'M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z' },
        { text: `You end up doing most of the work.`, icon: 'M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9 9.563A1.5 1.5 0 0110.5 8h.008a1.5 1.5 0 010 3h-.008A1.5 1.5 0 019 9.563zm4.5 0a1.5 1.5 0 00-1.5 1.5h.008a1.5 1.5 0 000-3h-.008a1.5 1.5 0 00-1.5 1.5v.002z' }
      ]
    },
    quantifiedPain: {
      title: `The 3-Month Delay Tax`,
      description: `A slow launch isn't just frustrating—it's incredibly expensive. Every month you wait is a month you're not generating new, high-margin jobs.`,
      calculation: {
        premise: `If a properly launched system could generate just <span class="font-bold text-white">4 new jobs a month</span> (at an average of $2,500/job), a 3-month delay costs you...`,
        value: `-$30,000`,
        conclusion: `in lost revenue before you even get started.`
      }
    },
    failedSolutions: [
      { title: 'The Agency "Discovery" Phase', description: 'They spend 2 months "learning your business" (on your dime) only to deliver a generic plan you could have Googled.' },
      { title: 'The DIY CRM Setup', description: 'You spend 4 weekends trying to configure a complex CRM, importing spreadsheets, and watching YouTube tutorials, only to abandon it in frustration.' },
      { title: 'The "We Just Need Your Content" Web Designer', description: 'They build a pretty shell, but then put the entire project on hold for weeks, waiting for you—the busy contractor—to write all the website copy.' }
    ],
    howItWorks: [
      { day: '1', title: 'Blueprint Call', description: 'A 45-minute architectural session where we map out your entire system—website, automations, and lead flow.' },
      { day: '2-5', title: 'We Build', description: 'Our team gets to work. We build your website, write your content, and configure your automations. You do nothing.' },
      { day: '6-7', title: 'Launch & Train', description: 'We launch your system and provide a 25-minute "keys to the cockpit" training for you and your team.' }
    ],
    deepDive: {
      day1: {
        title: "Day 1: The Blueprint Call",
        description: "This isn't a sales call. It's a mission-critical strategy session. We'll dive deep into your business goals, your customer journey, and your biggest operational headaches. We leave the call with a precise architectural plan for your new business operating system. You leave the call with clarity and confidence.",
        imageUrl: "../../../chimera_assets/chimera_84_chimera_84.webp"
      },
      day2_5: {
        title: "Days 2-5: The 'White Glove' Buildout",
        description: "This is where the magic happens, and where we are fundamentally different. While other companies give you homework, we do the work. Our team of writers, designers, and automation specialists builds your entire system based on the blueprint. Your only job is to provide feedback on the finished product.",
        imageUrl: "../../../chimera_assets/chimera_85_chimera_85.webp"
      },
      day6_7: {
        title: "Days 6-7: Launch & Training",
        description: "We don't hand you a 100-page manual. We give you the keys. We launch your new website and system, and then conduct a hyper-efficient 25-minute training session. Our platform is so intuitive, that's all you'll need to feel like a pro and start running your business with more control than ever before.",
        imageUrl: "../../../chimera_assets/premium_photo-1682310058947-b9d7dc7702c7_ixlib_rb-4_1_chimera_86.webp"
      }
    },
    caseStudy: {
      name: 'JD Roofing',
      summary: `John at JD Roofing was stuck with a broken website and no system. On Monday, we had our Blueprint call. The following Tuesday—just 7 business days later—his new website was live, his Missed Call Text Back was active, and his review funnel was ready. On day 8, he captured his first lead from a call he missed while on a roof.`,
      before: 'Broken Website, 0 Leads/Week',
      after: 'Fully Operational System in 7 Days'
    },
    testimonials: [
      { quote: 'I was dreading the setup process, but the Phoenix team handled literally everything. I was shocked when they told me we were ready to launch in less than two weeks. The speed and professionalism were just on another level.', author: 'John D., JD Roofing' },
      { quote: 'The onboarding was the easiest part. The blueprint call was incredibly valuable, and then they just went and built it. It was the opposite of every other software experience I\'ve ever had.', author: 'Mike S., Smith Electric' }
    ],
    philosophy: {
      title: "Our Obsession with Speed",
      description: "Why are we so focused on a 7-day launch? Because we understand the cost of delay. Every day you operate in chaos is a day you're losing money, time, and peace of mind. Our process is designed to get you from pain to profit as quickly as humanly possible. We believe our job is to give you time, not take it."
    },
    guarantee: {
      title: `The "On-Time Launch" Guarantee`,
      description: `We put our money where our mouth is. We guarantee that your core system—your new website, business phone line, and All-in-One Inbox—will be live and operational within <span class="font-bold text-slate-800 dark:text-white">7 business days</span> of your completed Blueprint Call. If we fail to meet that deadline for any reason on our end, your first month of service is on us.`,
    },
    faqs: [
      { q: 'What do you need from me during the 7 days?', a: 'Very little. We\'ll need your logo, access to your domain registrar, and timely feedback on the website design. We handle the rest.' },
      { q: 'Is the 25-minute training really enough?', a: 'Yes. We\'ve designed the platform to be incredibly intuitive for contractors. We focus on the core features you\'ll use every day. Plus, you have unlimited access to our support team and video tutorials after launch.' },
      { q: 'What if I need changes after we launch?', a: 'No problem. Your plan includes ongoing support. We can make tweaks and adjustments to your website and system as your business evolves.' },
      { q: 'Does this include setting up Google Ads or SEO?', a: 'The 7-Day Launchpad focuses on your core operating system. The ongoing work of SEO and Ads management (part of our Supreme plan) begins immediately after your system is live and running.' }
    ]
  };
}
