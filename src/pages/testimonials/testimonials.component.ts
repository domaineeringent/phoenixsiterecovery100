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
    imageUrl: '/chimera_assets/premium_photo-1661407712516-207bacca35b6_ixlib_rb-4_1_chimera_23.webp'
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
      { name: 'Forbes', imageUrl: '/chimera_assets/chimera_24_chimera_24.webp' },
      { name: 'Inc. 5000', imageUrl: '/chimera_assets/premium_photo-1752230054438-53a8e7493f55_ixlib_rb-4_1_chimera_25.webp' },
      { name: 'Builder Magazine', imageUrl: '/chimera_assets/premium_photo-1752230474246-95d49be14a23_ixlib_rb-4_1_chimera_26.webp' }
    ],
    tech: [
      { name: 'Google', imageUrl: '/chimera_assets/premium_photo-1681400110107-d995a9a196e2_ixlib_rb-4_1_chimera_27.webp' },
      { name: 'Twilio', imageUrl: '/chimera_assets/chimera_28_chimera_28.webp' },
      { name: 'Stripe', imageUrl: '/chimera_assets/premium_photo-1668902224245-0f09f90a7a15_ixlib_rb-4_1_chimera_29.webp' }
    ]
  };

  allAuthorityLogos = [...this.authorityLogos.seenOn, ...this.authorityLogos.tech];
  
  featuredStory = {
    name: 'John Doe, JD Roofing',
    title: 'From Burnt-Out Roofer to 7-Figure Business Owner',
    videoThumbnailUrl: '/chimera_assets/premium_photo-1682928136677-260d9971adb4_ixlib_rb-4_1_chimera_30.webp',
    summary: 'John was working 70-hour weeks, missing calls, and losing jobs to faster competitors. In 6 months with Phoenix Recovery, he automated his lead follow-up, built a 5-star reputation, and doubled his revenue—all while working 20 fewer hours a week.'
  };

  beforeAfterGallery = [
    { 
      name: 'JD Roofing',
      before: { imageUrl: '/chimera_assets/chimera_31_chimera_31.webp', stats: [{ value: '2-3', label: 'Leads/Week' }, { value: '12', label: 'Reviews' }] },
      after: { imageUrl: '/chimera_assets/premium_photo-1664301167194-455b2ea6f8e7_ixlib_rb-4_1_chimera_32.webp', stats: [{ value: '15-20', label: 'Leads/Week' }, { value: '87', label: 'Reviews' }] }
    },
    { 
      name: 'Smith Electric',
      before: { imageUrl: '/chimera_assets/premium_photo-1682309689730-1d2f757cd49d_ixlib_rb-4_1_chimera_33.webp', stats: [{ value: '48hr', label: 'Response Time' }, { value: 'Manual', label: 'Follow-up' }] },
      after: { imageUrl: '/chimera_assets/chimera_34_chimera_34.webp', stats: [{ value: '< 5min', label: 'Response Time' }, { value: 'Automated', label: 'Follow-up' }] }
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
    imageUrl: '/chimera_assets/chimera_35_chimera_35.webp',
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
    { name: 'John Doe', company: 'JD Roofing', trade: 'Roofing', videoThumbnailUrl: '/chimera_assets/premium_photo-1679168116777-4f62f41cbb6d_ixlib_rb-4_1_chimera_36.webp' },
    { name: 'Mike Smith', company: 'Smith Electric', trade: 'Electrical', videoThumbnailUrl: '/chimera_assets/premium_photo-1682086494778-a03e240fd089_ixlib_rb-4_1_chimera_37.webp' },
    { name: 'Carlos Garcia', company: 'Garcia Landscaping', trade: 'Landscaping', videoThumbnailUrl: '/chimera_assets/premium_photo-1747908374283-a320c13de4d2_ixlib_rb-4_1_chimera_38.webp' },
    { name: 'David Chen', company: 'Chen\'s Plumbing', trade: 'Plumbing', videoThumbnailUrl: '/chimera_assets/premium_photo-1723651413630-0802b171b3ed_ixlib_rb-4_1_chimera_39.webp' },
    { name: 'Sarah Jenkins', company: 'Jenkins Remodeling', trade: 'Remodeling', videoThumbnailUrl: 'https://picsum.photos/seed/jenkinsreno/600/400' },
    { name: 'Tom Wilson', company: 'Wilson HVAC', trade: 'HVAC', videoThumbnailUrl: '/chimera_assets/premium_photo-1661270485523-5fbf42d9dbeb_ixlib_rb-4_1_chimera_41.webp' },
    { name: 'Maria Rodriguez', company: 'Rodriguez Painting', trade: 'Painting', videoThumbnailUrl: '/chimera_assets/chimera_42_chimera_42.webp' },
    { name: 'Chris Lee', company: 'Lee Concrete', trade: 'Concrete', videoThumbnailUrl: '/chimera_assets/chimera_43_chimera_43.webp' },
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
