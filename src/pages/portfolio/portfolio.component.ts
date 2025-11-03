import { ChangeDetectionStrategy, Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtaSectionComponent } from '../../components/shared/cta-section/cta-section.component';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';
import { RouterLink } from '@angular/router';

interface Project {
  name: string;
  trade: string;
  imageUrl: string;
  beforeUrl: string;
  testimonial: string;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  imports: [CommonModule, CtaSectionComponent, AnimateOnScrollDirective, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioComponent {
  openFaq = signal<number | null>(null);
  activeFilter = signal<string>('All');

  toggleFaq(index: number) {
    this.openFaq.update(current => (current === index ? null : index));
  }

  data = {
    hero: {
      title: `Your Website is a Billboard in the Desert. <br> We Move it to <span class="text-amber-400">Times Square.</span>`,
      subtitle: `A pretty website that no one sees is worthless. We don't just build websites; we build "Digital Job Sites"—high-performance assets engineered to rank on Google and convert visitors into paying customers.`,
      imageUrl: 'https://picsum.photos/seed/portfolio-hero/800/600'
    },
    problem: {
      title: `The Symptoms of a "Digital Ghost Town"`,
      description: `You paid for a website, but it's just sitting there, collecting dust. It's not a tool; it's a digital liability that's actively hurting your brand.`,
      points: [
        { text: `Customers say "I couldn't find you online."`, icon: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z' },
        { text: `It looks broken and embarrassing on a phone.`, icon: 'M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h-3V1.5m3 0h-3m-3.75 18h15M12 18h.008v.008H12v-.008z' },
        { text: `The phone never rings from website visitors.`, icon: 'M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636' }
      ]
    },
    quantifiedPain: {
      title: `The Hidden "Invisibility Tax"`,
      description: `Being invisible on Google isn't just frustrating—it's a massive, un-tracked financial leak in your business.`,
      calculation: {
        premise: `If your top competitor gets just <span class="font-bold text-white">5 jobs a month from Google</span> (at $2,500/job), and you get zero...`,
        value: `-$12,500`,
        conclusion: `in lost revenue per month.`
      }
    },
    failedSolutions: [
      { title: 'The DIY Disaster (Wix/GoDaddy)', description: `It's a generic template that makes you look like an amateur. It's slow, has zero SEO power, and isn't built to capture leads.` },
      { title: 'The Fiverr Freelancer', description: `You got what you paid for: a cheap, clunky site that's now impossible to update. The freelancer is long gone, and you're stuck.` },
      { title: '"My Nephew Built It"', description: `He's a great kid, but he doesn't understand conversion-focused copywriting, local SEO schema, or what makes a homeowner trust you with their biggest asset.` }
    ],
    blueprintPillars: [
      { name: 'Foundation: Built for Google', description: 'Rock-solid SEO, blazing-fast speed, and a mobile-first design ensure customers can find you.' },
      { name: 'Framing: Built for Action', description: 'Strategic calls-to-action, quote forms, and click-to-call buttons make it effortless for visitors to become leads.' },
      { name: 'Finish: Built for Trust', description: 'Professional copy, project galleries, and review streams build the confidence a customer needs to hire you.' }
    ],
    beforeAfter: [
      { beforeUrl: 'https://picsum.photos/seed/before1/800/600', afterUrl: 'https://picsum.photos/seed/after1/800/600' },
      { beforeUrl: 'https://picsum.photos/seed/before2/800/600', afterUrl: 'https://picsum.photos/seed/after2/800/600' },
    ],
    anatomy: {
      imageUrl: 'https://picsum.photos/seed/anatomy/1200/900',
      points: [
        { x: '15%', y: '10%', text: 'Click-to-Call Number' },
        { x: '80%', y: '15%', text: 'Get a Quote CTA' },
        { x: '50%', y: '40%', text: 'Trust-Building Headline' },
        { x: '20%', y: '70%', text: '5-Star Review Stream' },
        { x: '75%', y: '80%', text: 'Project Gallery' },
      ]
    },
    caseStudy: {
      name: 'Apex Roofing Solutions',
      before: { value: '0-1', label: 'Leads From Website / Month' },
      after: { value: '15+', label: 'Leads From Website / Month' },
      summary: `Apex came to us with an outdated, slow website that wasn't mobile-friendly. After launching their new Phoenix "Digital Job Site", their online leads exploded. They now get a consistent flow of high-quality, exclusive leads directly from their website every single week.`
    },
    mobileShowcase: {
      desktop: 'https://picsum.photos/seed/desktop-view/1024/768',
      tablet: 'https://picsum.photos/seed/tablet-view/768/1024',
      mobile: 'https://picsum.photos/seed/mobile-view/400/800',
    },
    designTestimonials: [
      { quote: 'I was blown away by the website design. It looks like something a million-dollar company would have. It\'s given me so much more confidence when talking to new customers.', author: 'David C., Chen\'s Plumbing' },
      { quote: 'My new website looks a thousand times more professional. The best part is that it actually brings in leads. It paid for itself in the first month.', author: 'John D., JD Roofing' },
    ],
    faqs: [
      { q: 'How long does a new website take?', a: 'From our initial consultation call to launch day, the typical timeline is 7-10 business days. This can vary slightly depending on the complexity of the project and how quickly we receive feedback from you.' },
      { q: 'Do I own the website?', a: 'Yes. While your site is part of the Phoenix Recovery platform, you own all your content, images, and your domain name. If you ever decide to leave, we can package up your site for you to take elsewhere.' },
      { q: 'Who writes the content and provides photos?', a: 'We do! Our team writes professional, SEO-friendly copy tailored to your business. We also have access to a library of high-quality stock photography for the trades, or we can use photos you provide.' },
      { q: 'Is the website included in my plan?', a: 'Yes! A brand new, high-performance "Digital Job Site" is included with our flagship Advanced plan.' }
    ]
  };

  allProjects = signal<Project[]>([
    { name: 'Apex Roofing Solutions', trade: 'Roofing', imageUrl: 'https://picsum.photos/seed/apexroof/800/600', beforeUrl: 'https://picsum.photos/seed/before-apex/800/600', testimonial: '"The new site is night and day. Leads are finally coming in from Google."' },
    { name: 'Precision Plumbing Co.', trade: 'Plumbing', imageUrl: 'https://picsum.photos/seed/precisionplumb/800/600', beforeUrl: 'https://picsum.photos/seed/before-precision/800/600', testimonial: '"Looks a thousand times more professional. Customers mention it on the phone."' },
    { name: 'Evergreen Landscaping', trade: 'Landscaping', imageUrl: 'https://picsum.photos/seed/evergreen/800/600', beforeUrl: 'https://picsum.photos/seed/before-evergreen/800/600', testimonial: '"The gallery is perfect for showing off our work to new clients."' },
    { name: 'Volt Electric Services', trade: 'Electrical', imageUrl: 'https://picsum.photos/seed/voltelectric/800/600', beforeUrl: 'https://picsum.photos/seed/before-volt/800/600', testimonial: '"Finally, a website that works on my phone! Looks great."' },
    { name: 'Keystone Remodeling', trade: 'Remodeling', imageUrl: 'https://picsum.photos/seed/keystone/800/600', beforeUrl: 'https://picsum.photos/seed/before-keystone/800/600', testimonial: '"We look like the high-end builders we are now. Huge difference."' },
    { name: 'Chillfactor HVAC', trade: 'HVAC', imageUrl: 'https://picsum.photos/seed/chillfactor/800/600', beforeUrl: 'https://picsum.photos/seed/before-chill/800/600', testimonial: '"The quote form is easy to use and brings in new installation leads."' },
  ]);

  trades = computed(() => ['All', ...new Set(this.allProjects().map(p => p.trade))]);
  
  filteredProjects = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'All') {
      return this.allProjects();
    }
    return this.allProjects().filter(p => p.trade === filter);
  });

  setFilter(trade: string) {
    this.activeFilter.set(trade);
  }
}
