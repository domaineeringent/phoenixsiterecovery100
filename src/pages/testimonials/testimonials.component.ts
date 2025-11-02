import { ChangeDetectionStrategy, Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtaSectionComponent } from '../../components/shared/cta-section/cta-section.component';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';
import { RouterLink } from '@angular/router';

interface Testimonial {
  name: string;
  company: string;
  trade: 'Roofing' | 'Electrical' | 'Landscaping' | 'Plumbing' | 'Remodeling' | 'HVAC' | 'Painting' | 'Concrete';
  videoThumbnailUrl: string;
}

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  imports: [CommonModule, CtaSectionComponent, AnimateOnScrollDirective, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialsComponent {
  openFaq = signal<number | null>(null);

  toggleFaq(index: number) {
    this.openFaq.update(current => (current === index ? null : index));
  }
  
  // Data for the 15-section page
  hero = {
    title: `Don't Just Take Our Word For It. <br><span class="text-amber-400">See The Results.</span>`,
    subtitle: `We measure our success by one metric: our clients' success. Explore the real-world stories and measurable growth of contractors who traded chaos for control.`,
    imageUrl: 'https://picsum.photos/seed/testimonials-hero/800/600'
  };

  resultsDashboard = [
    { value: '37%', label: 'Avg. Revenue Growth (YoY)' },
    { value: '5,000+', label: '5-Star Reviews Generated' },
    { value: '8 Hours', label: 'Avg. Time Saved Per Week' },
    { value: '98%', label: 'Client Retention Rate' },
    { value: '10x', label: 'Average First-Year ROI' },
    { value: '$50M+', label: 'In Client Revenue Generated' }
  ];

  authorityLogos = {
    seenOn: [
      { name: 'Forbes', imageUrl: 'https://picsum.photos/seed/forbes/200/50' },
      { name: 'Inc. 5000', imageUrl: 'https://pub-7b0107d999fd4c8a8018460dffd25378.r2.dev/chimera_assets/31cad5cb4731c82ea5770f96ac0a9fd54d153e65bee104318612a4e27c811054.webp' },
      { name: 'Builder Magazine', imageUrl: 'https://pub-7b0107d999fd4c8a8018460dffd25378.r2.dev/chimera_assets/46b4223519875881d690caf602f03530db07d180fb56dbe6bed940e19c64a3d5.webp' }
    ],
    tech: [
      { name: 'Google', imageUrl: 'https://pub-7b0107d999fd4c8a8018460dffd25378.r2.dev/chimera_assets/4189c02db42f173d94477ae4c46b1ddbd4b267f80176269ad3662bf9f1c002f4.webp' },
      { name: 'Twilio', imageUrl: 'https://picsum.photos/seed/twilio/200/50' },
      { name: 'Stripe', imageUrl: 'https://pub-7b0107d999fd4c8a8018460dffd25378.r2.dev/chimera_assets/d7e17d1a9ba2dfdeefa4d2ac6271502335ae3211b000cf3409478980b627d816.webp' }
    ]
  };

  allAuthorityLogos = [...this.authorityLogos.seenOn, ...this.authorityLogos.tech];
  
  featuredStory = {
    name: 'John Doe, JD Roofing',
    title: 'From Burnt-Out Roofer to 7-Figure Business Owner',
    videoThumbnailUrl: 'https://picsum.photos/seed/jdroofing/800/600',
    summary: 'John was working 70-hour weeks, missing calls, and losing jobs to faster competitors. In 6 months with Phoenix Recovery, he automated his lead follow-up, built a 5-star reputation, and doubled his revenue—all while working 20 fewer hours a week.'
  };

  beforeAfterGallery = [
    { 
      name: 'JD Roofing',
      before: { imageUrl: 'https://pub-7b0107d999fd4c8a8018460dffd25378.r2.dev/chimera_assets/ebe02a6196365299b85a6dd53837bb8620aeae0332e288c5a54a07a0c728125a.webp', stats: [{ value: '2-3', label: 'Leads/Week' }, { value: '12', label: 'Reviews' }] },
      after: { imageUrl: 'https://pub-7b0107d999fd4c8a8018460dffd25378.r2.dev/chimera_assets/6e6bd26ded5dbece2b7a5876d34d409a4e317ad0ff987114d6f5460d0d27ac87.webp', stats: [{ value: '15-20', label: 'Leads/Week' }, { value: '87', label: 'Reviews' }] }
    },
    { 
      name: 'Smith Electric',
      before: { imageUrl: 'https://picsum.photos/seed/smithbefore/800/600', stats: [{ value: '48hr', label: 'Response Time' }, { value: 'Manual', label: 'Follow-up' }] },
      after: { imageUrl: 'https://picsum.photos/seed/smithafter/800/600', stats: [{ value: '< 5min', label: 'Response Time' }, { value: 'Automated', label: 'Follow-up' }] }
    }
  ];

  howResultsHappen = [
    { 
      result: 'Doubled Revenue', 
      testimonial: '"The Missed Call Text Back is worth the price alone. I booked 3 extra jobs the first week."',
      author: 'John D., JD Roofing',
      feature: { name: 'Missed Call Text Back', path: '/features/missed-call-text-back' }
    },
    { 
      result: 'Became #1 on Google', 
      testimonial: '"We went from 12 reviews to over 150. Now we\'re the top-rated landscaper in town and the phone rings constantly."',
      author: 'Carlos G., Garcia Landscaping',
      feature: { name: '5-Star Review Funnel', path: '/features/5-star-review-funnel' }
    },
    { 
      result: 'Saved 10+ Hours/Week', 
      testimonial: '"I used to check 5 different apps for leads. Now it\'s all in one place. I can run my business from my truck."',
      author: 'Mike S., Smith Electric',
      feature: { name: 'All-In-One Inbox', path: '/features/all-in-one-inbox' }
    }
  ];
  
  writtenReviews = [
    { source: 'Google', quote: 'The entire system is a game-changer. My new website looks a thousand times more professional and it actually brings in leads.', author: 'Mike Smith, Smith Electric' },
    { source: 'Facebook', quote: 'I used to lose leads because I\'d forget to check my Facebook page. Now everything is in one place. Best investment I\'ve made.', author: 'Carlos Garcia, Garcia Landscaping' },
    { source: 'Capterra', quote: 'I was paying for five different tools to do what I can now do in one. I\'m saving hundreds of dollars a month and countless hours of frustration.', author: 'David Chen, Chen\'s Plumbing' },
    { source: 'Google', quote: 'Our revenue is up 40% year-over-year, and I\'m working less. The automations handle the busy work so I can focus on bids and jobs. It\'s incredible.', author: 'Sarah Jenkins, Jenkins Remodeling' },
  ];

  resultsByTrade = [
    { trade: 'Plumbers', stat: '80%', text: 'Increase in emergency job bookings with Missed Call Text Back.', testimonial: '"The Missed Call Text Back is worth the price alone. I can\'t tell you how many emergency jobs I\'ve landed..." - David C., Chen\'s Plumbing' },
    { trade: 'Roofers', stat: '500%', text: 'Average increase in 5-star reviews in the first 6 months.', testimonial: '"We went from 12 reviews to over 80... We\'re now the top-rated roofer in our city on Google Maps." - John D., JD Roofing' },
    { trade: 'Landscapers', stat: '$15k+', text: 'In new business from a single One-Click reactivation campaign.', testimonial: '"Being able to text my entire customer list about our fall cleanup special booked us solid for two weeks. It took me 5 minutes." - Carlos G., Garcia Landscaping' }
  ];

  roi = {
    investment: 297,
    return: 7500,
    multiplier: 25
  };

  founder = {
    name: 'Alex Riley',
    title: 'Founder & CEO',
    imageUrl: 'https://pub-7b0107d999fd4c8a8018460dffd25378.r2.dev/chimera_assets/79d3730daeb94641da2d6144c8773a4500135724cf713ac4c28d095fa7a89f4e.webp',
    message: `We're obsessed with our clients' success because I've lived the alternative. I watched my family's contracting business struggle with the same problems you face. Every testimonial on this page isn't just a number to us; it's the fulfillment of our mission to give contractors their time, their freedom, and their control back.`
  };
  
  faqs = [
    { q: 'Are these results typical?', a: 'These are real results from real clients. While outcomes vary, clients who fully commit to using the system consistently see significant growth in leads, revenue, and efficiency. Our 98% retention rate speaks for itself.' },
    { q: 'How long does it take to see results like these?', a: 'Some features, like Missed Call Text Back, deliver an ROI on day one. Others, like SEO and reputation building, are assets that grow over 3-6 months. We guarantee you will see a tangible ROI within 90 days.' },
    { q: 'Will this work for a brand new business?', a: 'Absolutely. We provide the foundational system that allows a new business to look professional, operate efficiently, and compete with established players from the very beginning.' },
    { q: 'My business is different. How do I know this will work for me?', a: 'That\'s what our free blueprint call is for. We\'ll do a deep dive into your specific challenges and show you exactly how our system can be tailored to solve them. If we\'re not a perfect fit, we\'ll be the first to tell you.' }
  ];

  // Logic for the "Wall of Fame"
  allTestimonials = signal<Testimonial[]>([
    { name: 'John Doe', company: 'JD Roofing', trade: 'Roofing', videoThumbnailUrl: 'https://pub-7b0107d999fd4c8a8018460dffd25378.r2.dev/chimera_assets/79dd8ccdcf7cc1e30fbc52494c90c1e19409cbec23c02227c432efe4055da89b.webp' },
    { name: 'Mike Smith', company: 'Smith Electric', trade: 'Electrical', videoThumbnailUrl: 'https://pub-7b0107d999fd4c8a8018460dffd25378.r2.dev/chimera_assets/e53d2eb1c79fec733cc19cf069ffdfc6520486ce49344b6e703a235c165969b6.webp' },
    { name: 'Carlos Garcia', company: 'Garcia Landscaping', trade: 'Landscaping', videoThumbnailUrl: 'https://pub-7b0107d999fd4c8a8018460dffd25378.r2.dev/chimera_assets/20b52f18c540d1ae63d798713370942dff6dd90ce3502844d63cae55fba9e731.webp' },
    { name: 'David Chen', company: 'Chen\'s Plumbing', trade: 'Plumbing', videoThumbnailUrl: 'https://pub-7b0107d999fd4c8a8018460dffd25378.r2.dev/chimera_assets/6c1a3b1fa24744625c6b9a25f1b1ae0ee416718348668c912a284124b5d3aed7.webp' },
    { name: 'Sarah Jenkins', company: 'Jenkins Remodeling', trade: 'Remodeling', videoThumbnailUrl: 'https://pub-7b0107d999fd4c8a8018460dffd25378.r2.dev/chimera_assets/6f45f8083cc1953fc29447f3a3616c789cfe1a386e79cefd23e0e2a24ed6a19b.webp' },
    { name: 'Tom Wilson', company: 'Wilson HVAC', trade: 'HVAC', videoThumbnailUrl: 'https://pub-7b0107d999fd4c8a8018460dffd25378.r2.dev/chimera_assets/1243d50daab1a0c2d6524855aaaf1f38f5d74488acb4bb473c5dd31daa76489f.webp' },
    { name: 'Maria Rodriguez', company: 'Rodriguez Painting', trade: 'Painting', videoThumbnailUrl: 'https://pub-7b0107d999fd4c8a8018460dffd25378.r2.dev/chimera_assets/31d1468ac77e63c5abf91290b42579683abc5d5492e1f6489cc1a800d3e0c65e.webp' },
    { name: 'Chris Lee', company: 'Lee Concrete', trade: 'Concrete', videoThumbnailUrl: 'https://picsum.photos/seed/leeconcrete/600/400' },
  ]);

  trades = computed(() => ['All', ...new Set(this.allTestimonials().map(t => t.trade))]);
  activeFilter = signal<string>('All');

  filteredTestimonials = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'All') {
      return this.allTestimonials();
    }
    return this.allTestimonials().filter(t => t.trade === filter);
  });

  setFilter(trade: string) {
    this.activeFilter.set(trade);
  }
}
