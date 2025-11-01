import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtaSectionComponent } from '../../components/shared/cta-section/cta-section.component';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  imports: [CommonModule, CtaSectionComponent, AnimateOnScrollDirective, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  data = {
    hero: {
      title: `We're Not a Tech Company. <br> We're a Contractor Company that <span class="text-amber-400">Builds Tech.</span>`,
      subtitle: `We believe contractors deserve better than generic, clunky software built by people who've never stepped on a job site. We're a team of builders, problem-solvers, and innovators with dirt on our boots, dedicated to one mission: giving you back your time.`
    },
    originStory: {
      title: `Born from <span class="text-amber-500">Crisis</span>`,
      story: `Our founder, Alex Riley, grew up in a family of contractors. He saw the 70-hour weeks, the missed family dinners, and the constant stress. The breaking point came when his family's outdated website was hacked, shutting down their main source of leads for weeks. It was a costly disaster that nearly crippled the business. After a decade in tech, Alex founded Phoenix Recovery not as a business idea, but as a personal mission: to ensure no other contractor family had to go through that hell.`,
      imageUrl: 'chimera_assets/chimera_67_chimera_67.webp'
    },
    manifesto: {
      title: `Our Manifesto`,
      statement: `"To be the operating system for America's most successful contractors, giving them the power of a full marketing team in one simple, affordable platform. We fight chaos. We build freedom. We empower owners."`
    },
    contractorsCode: [
      { title: 'Your Business is Our Business', description: 'We don\'t succeed unless you do. We\'re obsessed with your ROI, your growth, and your success. Your wins are the only metric we care about.' },
      { title: 'Measure Twice, Cut Once', description: 'We are deliberate and strategic. We don\'t chase fads. We build durable, effective tools based on data and real-world results.' },
      { title: 'Do What You Say', description: 'Our word is our bond. No excuses, no fine print. We deliver on our promises and take ownership of the outcomes.' },
      { title: 'Real People, Real Talk', description: 'No corporate jargon. No support tickets into the void. You get a dedicated team of real people you can talk to, who understand your business.' }
    ],
    theCrew: [
      { name: 'Alex Riley', role: 'Founder & CEO', imageUrl: 'chimera_assets/chimera_67_chimera_67.webp', bio: 'The Architect. Ensures every tool we build solves a real contractor problem.' },
      { name: 'Jessica Miller', role: 'Head of Client Success', imageUrl: 'chimera_assets/chimera_68_chimera_68.webp', bio: 'Your Partner. Makes sure your phone never stops ringing with new leads.' },
      { name: 'Ben Carter', role: 'Lead Developer', imageUrl: 'chimera_assets/chimera_69_chimera_69.webp', bio: 'The Builder. Crafts the simple, powerful tools that save you 10+ hours a week.' },
      { name: 'Samantha Chen', role: 'Marketing Director', imageUrl: 'https://picsum.photos/seed/samantha/500/500', bio: 'The Megaphone. Tells the world why you\'re the best contractor for the job.' },
    ],
    mapData: {
      title: `Join the Nationwide Network of <span class="text-amber-500 dark:text-amber-400">Winning Contractors</span>`,
      subtitle: `From coast to coast, we're the unfair advantage for contractors who are serious about growth.`,
      imageUrl: 'chimera_assets/chimera_71_chimera_71.webp'
    },
    workshop: {
      title: 'Our Digital Workshop',
      subtitle: `We're a remote-first team of passionate builders and problem-solvers obsessed with crafting the perfect tools for the trades.`,
      images: [
        'chimera_assets/chimera_72_chimera_72.webp',
        'chimera_assets/chimera_73_chimera_73.webp',
        'chimera_assets/chimera_74_chimera_74.webp',
        'chimera_assets/chimera_75_chimera_75.webp'
      ]
    },
    phoenixStandard: {
      title: 'The Phoenix Standard',
      subtitle: `Our Commitment to Craftsmanship`,
      description: `The world doesn't move without skilled tradespeople. You build our homes, fix our infrastructure, and keep our lives running. You deserve technology that works as hard as you do. Our commitment is to apply the principles of good craftsmanship—precision, durability, and integrity—to the digital tools we build for you.`
    },
    arsenal: [
      { name: 'Google', imageUrl: 'chimera_assets/chimera_76_chimera_76.webp' },
      { name: 'Twilio', imageUrl: 'https://picsum.photos/seed/twilio/200/50' },
      { name: 'Stripe', imageUrl: 'https://picsum.photos/seed/stripe/200/50' },
      { name: 'OpenAI', imageUrl: 'https://picsum.photos/seed/openai/200/50' },
      { name: 'Meta', imageUrl: 'https://picsum.photos/seed/meta/200/50' },
      { name: 'Zapier', imageUrl: 'chimera_assets/chimera_81_chimera_81.webp' },
    ],
    resultsDashboard: [
      { value: '$50M+', label: 'In Client Revenue Generated' },
      { value: '5,000+', label: '5-Star Reviews Delivered' },
      { value: '8 Hours', label: 'Avg. Time Saved Per Week' }
    ],
    testimonials: [
      { quote: 'It feels less like a software company and more like a partner who is genuinely invested in my business. The support is unlike anything I\'ve ever experienced.', author: 'John D., JD Roofing' },
      { quote: 'They get it. They understand my business and my problems. Every feature they build feels like it was designed specifically for me.', author: 'Mike S., Smith Electric' }
    ],
    comparison: [
      { feature: 'Who We Serve', generic: 'Everyone', phoenix: 'Contractors Only' },
      { feature: 'Our Focus', generic: 'Selling Software', phoenix: 'Delivering ROI' },
      { feature: 'Support Model', generic: 'Support Tickets', phoenix: 'Dedicated Success Rep' },
      { feature: 'Your Status', generic: 'You\'re a User', phoenix: 'You\'re a Partner' }
    ],
    foundersPromise: {
      title: `A Promise, from One Builder to Another`,
      message: `"I built this platform to solve the exact problems that kept my father up at night. My promise to you is that we will never lose sight of that. We will never stop fighting to build the tools that give you your time, your freedom, and your control back. Your success is the only thing that matters."`,
      imageUrl: 'https://picsum.photos/seed/alex-promise/150/150'
    }
  };
}
