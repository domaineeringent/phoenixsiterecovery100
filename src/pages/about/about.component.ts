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
      imageUrl: 'https://picsum.photos/seed/alex/500/500'
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
      { name: 'Alex Riley', role: 'Founder & CEO', imageUrl: 'https://picsum.photos/seed/alex/500/500', bio: 'The Architect. Ensures every tool we build solves a real contractor problem.' },
      { name: 'Jessica Miller', role: 'Head of Client Success', imageUrl: 'https://34b5c4bd622194aff81f417c1e9fe6dc.r2.cloudflarestorage.com/chimera_assets/51f62f6ed91c60d882d50c551ec180be8854cc496de57b0dd00456d9eb4bc5ff.webp', bio: 'Your Partner. Makes sure your phone never stops ringing with new leads.' },
      { name: 'Ben Carter', role: 'Lead Developer', imageUrl: 'https://picsum.photos/seed/ben/500/500', bio: 'The Builder. Crafts the simple, powerful tools that save you 10+ hours a week.' },
      { name: 'Samantha Chen', role: 'Marketing Director', imageUrl: 'https://picsum.photos/seed/samantha/500/500', bio: 'The Megaphone. Tells the world why you\'re the best contractor for the job.' },
    ],
    mapData: {
      title: `Join the Nationwide Network of <span class="text-amber-500 dark:text-amber-400">Winning Contractors</span>`,
      subtitle: `From coast to coast, we're the unfair advantage for contractors who are serious about growth.`,
      imageUrl: 'https://picsum.photos/seed/map/1024/600'
    },
    workshop: {
      title: 'Our Digital Workshop',
      subtitle: `We're a remote-first team of passionate builders and problem-solvers obsessed with crafting the perfect tools for the trades.`,
      images: [
        'https://34b5c4bd622194aff81f417c1e9fe6dc.r2.cloudflarestorage.com/chimera_assets/d4ea11d51e09b5bb400aad5e19a1b93e814e98d82b629264b5deefe7de59c1c4.webp',
        'https://34b5c4bd622194aff81f417c1e9fe6dc.r2.cloudflarestorage.com/chimera_assets/e9442cd3a2abd5beca28e2fff69c248a43be10c415cbf17912e25f45b298ed3a.webp',
        'https://34b5c4bd622194aff81f417c1e9fe6dc.r2.cloudflarestorage.com/chimera_assets/5e199d39322c4522a34e468571d0703c109c6207e0c656c74855ade5de12654a.webp',
        'https://34b5c4bd622194aff81f417c1e9fe6dc.r2.cloudflarestorage.com/chimera_assets/29e9370fadcdc14307faf7c693bfc48c397a09062255fc662dfc3ac24877982f.webp'
      ]
    },
    phoenixStandard: {
      title: 'The Phoenix Standard',
      subtitle: `Our Commitment to Craftsmanship`,
      description: `The world doesn't move without skilled tradespeople. You build our homes, fix our infrastructure, and keep our lives running. You deserve technology that works as hard as you do. Our commitment is to apply the principles of good craftsmanship—precision, durability, and integrity—to the digital tools we build for you.`
    },
    arsenal: [
      { name: 'Google', imageUrl: 'https://34b5c4bd622194aff81f417c1e9fe6dc.r2.cloudflarestorage.com/chimera_assets/4189c02db42f173d94477ae4c46b1ddbd4b267f80176269ad3662bf9f1c002f4.webp' },
      { name: 'Twilio', imageUrl: 'https://picsum.photos/seed/twilio/200/50' },
      { name: 'Stripe', imageUrl: 'https://34b5c4bd622194aff81f417c1e9fe6dc.r2.cloudflarestorage.com/chimera_assets/ec907f1b4af57e6342eec9da41602830afca84a0084fd0901d18b1fac4e839c8.webp' },
      { name: 'OpenAI', imageUrl: 'https://34b5c4bd622194aff81f417c1e9fe6dc.r2.cloudflarestorage.com/chimera_assets/4189c02db42f173d94477ae4c46b1ddbd4b267f80176269ad3662bf9f1c002f4.webp' },
      { name: 'Meta', imageUrl: 'https://picsum.photos/seed/meta/200/50' },
      { name: 'Zapier', imageUrl: 'https://34b5c4bd622194aff81f417c1e9fe6dc.r2.cloudflarestorage.com/chimera_assets/51c6bf4c15dfff6c34bdac2883e33c4ff01d04aaf822cd4b1a50d9c8c9244c36.webp' },
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
      imageUrl: 'https://34b5c4bd622194aff81f417c1e9fe6dc.r2.cloudflarestorage.com/chimera_assets/1802e70141b98d8f5edb94b3392c480bb51fb67c68c9f981af376bb564c87469.webp'
    }
  };
}
