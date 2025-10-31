import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CtaSectionComponent } from '../../../components/shared/cta-section/cta-section.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollDirective } from '../../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-review-funnel',
  templateUrl: './review-funnel.component.html',
  imports: [CtaSectionComponent, RouterLink, CommonModule, AnimateOnScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewFunnelComponent {
  openFaq = signal<number | null>(null);

  toggleFaq(index: number) {
    this.openFaq.update(current => (current === index ? null : index));
  }

  // New, expanded data structure for the 15-section sales page
  hero = {
    title: `Stop Asking For Reviews. <br> Start <span class="text-amber-400">Automating</span> Your 5-Star Reputation.`,
    subtitle: `Our "Magic" Review Funnel turns your happy customers into a powerful marketing engine that dominates local search and builds unstoppable trust.`,
    imageUrl: 'https://picsum.photos/seed/review-hero/800/600'
  };

  problem = {
    title: `Happy Customers Forget. <span class="text-amber-500">Unhappy Ones Never Do.</span>`,
    description: `You do great work, but your online reputation is a ghost town. Or worse, it's defined by that one unhappy client from two years ago, scaring away new customers before they even call you.`,
    points: [
      { text: `It's awkward to ask for reviews.`, icon: 'M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9 9.563A1.5 1.5 0 0110.5 8h.008a1.5 1.5 0 010 3h-.008A1.5 1.5 0 019 9.563zm4.5 0a1.5 1.5 0 00-1.5 1.5h.008a1.5 1.5 0 000-3h-.008a1.5 1.5 0 00-1.5 1.5v.002z' },
      { text: `Your rating doesn't reflect your quality.`, icon: 'M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345h5.518a.562.562 0 0 1 .321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988h5.518a.563.563 0 0 0 .475-.345L11.48 3.5Z' },
      { text: `You have no system to get them.`, icon: 'M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0 0 11.667 0l3.181-3.183m-4.991-2.691v4.99' }
    ]
  };

  quantifiedPain = {
    title: `The True Cost of a <span class="text-red-500">Bad Reputation</span>`,
    description: `A few bad reviews aren't just ugly—they're a silent killer of your business, costing you jobs you never even knew you were in the running for.`,
    calculation: {
      premise: `If a poor online reputation costs you just <span class="font-bold text-white">2 jobs a month</span> (at an average of $3,000/job)...`,
      value: `-$6,000`,
      conclusion: `in lost revenue per month.`
    }
  };

  failedSolutions = [
      { title: 'The Awkward Ask', description: 'Asking in person feels pushy. You forget, or the customer says "sure" but never follows through.' },
      { title: 'The Manual Text', description: 'You remember to text a few customers, but it\'s inconsistent. There\'s no system, so it rarely gets done.' },
      { title: '"Hoping & Praying"', description: 'Just hoping happy customers will leave a review is a losing strategy. The only ones motivated enough are usually the unhappy ones.' }
  ];

  howItWorks = [
    { number: '01', title: 'Mark Job Complete', description: 'At the end of a job, you mark the customer as complete in our simple mobile app.', icon: 'M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' },
    { number: '02', title: 'System Sends Request', description: 'Our system automatically sends a friendly, personalized text message with a direct link to leave a review.', icon: 'M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5' },
    { number: '03', title: 'Reviews Roll In', description: 'The customer clicks the link and leaves a 5-star review on Google. Your reputation and local ranking improve on autopilot.', icon: 'M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345h5.518a.562.562 0 0 1 .321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988h5.518a.563.563 0 0 0 .475-.345L11.48 3.5Z' }
  ];

  reviewFunnelMechanics = [
    { name: 'Automated SMS Requests', description: 'The system automatically texts your customers after a job. Set it and forget it. The 98% open rate of SMS ensures your request is seen.', icon: 'M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0 0 11.667 0l3.181-3.183m-4.991-2.691v4.99' },
    { name: 'Direct-to-Google Link', description: 'No extra steps. The link takes customers directly to the 5-star rating form on your Google Business Profile, maximizing completions.', icon: 'M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244' },
    { name: 'Website Review Stream', description: 'Your best 4 and 5-star reviews are automatically streamed to your website, creating powerful, trust-building social proof for new visitors.', icon: 'M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582' },
    { name: 'Internal Feedback System', description: 'Optionally, send customers to an internal feedback page first. Happy customers are sent to Google, while unhappy ones submit private feedback to you, preventing public negative reviews.', icon: 'M9 12.75 11.25 15 15 9.75' },
    { name: 'QR Code Review Cards', description: 'Bridge the physical and digital. Hand a happy customer a card with a QR code that goes straight to your review link. Perfect for in-person interactions.', icon: 'M3.75 4.5a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V7.5a3 3 0 0 0-3-3H3.75Z' },
    { name: 'Review Management', description: 'See all your reviews from across the web in one dashboard and easily reply to them, showing customers you\'re engaged.', icon: 'M7.5 8.25h9m-9 3H12m2.25 2.25H12m0 0H9.75M12 15V9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z' }
  ];

  caseStudy = {
    name: 'Garcia Landscaping',
    before: { value: '12', label: 'Total Google Reviews' },
    after: { value: '157', label: 'Total Google Reviews' },
    result: '+1200%',
    summary: `Carlos Garcia did great work but had only 12 reviews after 5 years in business. After activating the 5-Star Review Funnel, his review count exploded. He's now the top-rated landscaper on Google Maps in his city, and he gets a steady stream of calls from people who say "I saw all your great reviews."`
  };

  testimonials = [
    { quote: 'Getting reviews used to be like pulling teeth. Now they just show up. We went from 15 reviews to over 100 in six months. It completely changed our visibility on Google.', author: 'Carlos G., Garcia Landscaping' },
    { quote: 'The review stream on my website is awesome. New customers see it and it instantly builds trust. I don\'t have to "sell" as hard on the phone anymore.', author: 'John D., JD Roofing' },
    { quote: 'We had one bad review that was haunting us for years. After using the funnel for 3 months, we had 30 new 5-star reviews that completely buried the old one. Huge relief.', author: 'Mike S., Smith Electric' }
  ];

  whyReviewsMatter = [
    { stat: '97%', text: 'of consumers read online reviews for local businesses.' },
    { stat: 'Top 3', text: 'Reviews are one of the top 3 ranking factors for Google Maps.' },
    { stat: '88%', text: 'of consumers trust online reviews as much as personal recommendations.' }
  ];

  faqs = [
    { q: 'What if a customer leaves a bad review?', a: 'Our system notifies you instantly so you can respond. More importantly, our optional internal feedback system helps capture negative experiences privately *before* they become public reviews.' },
    { q: 'Which review sites does this work with?', a: 'We primarily focus on Google because it has the biggest impact on your local search ranking, but we can configure links for Facebook, Yelp, or other industry-specific sites.' },
    { q: 'Can I send requests to past customers?', a: 'Absolutely! We can import your past customer list and send a "blast" campaign to quickly generate a large number of initial reviews and kickstart your reputation.' },
    { q: 'Is this automatic?', a: 'Yes. Once it\'s set up, you can configure it to send a review request automatically when a job is marked as "complete" in the system, or you can send requests manually with a single click.' }
  ]
}
