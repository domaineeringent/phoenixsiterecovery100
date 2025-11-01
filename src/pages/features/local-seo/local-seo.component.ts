import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CtaSectionComponent } from '../../../components/shared/cta-section/cta-section.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollDirective } from '../../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-local-seo',
  templateUrl: './local-seo.component.html',
  imports: [CtaSectionComponent, RouterLink, CommonModule, AnimateOnScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocalSeoComponent {
  openFaq = signal<number | null>(null);

  toggleFaq(index: number) {
    this.openFaq.update(current => (current === index ? null : index));
  }
  
  // New, expanded data structure for the 15-section sales page
  hero = {
    title: `Stop Being a Ghost. <br> Start Being The <span class="text-amber-400">Go-To Contractor.</span>`,
    subtitle: `When customers search for your trade in your city, do they find you or your competitors? We put you on the map—literally—and turn Google into your #1 source of exclusive, high-intent leads.`,
    imageUrl: 'https://picsum.photos/seed/localseo-hero/800/600'
  };

  problem = {
    title: `Your Competitors Are Stealing Your <span class="text-amber-500">Best Local Jobs.</span>`,
    description: `You could be the most skilled contractor in town, but if a customer with an emergency can't find you on Google, you don't exist. They're calling the business they see first. Right now, that's not you.`,
    points: [
      { text: `You're invisible on Google Maps.`, icon: 'M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z' },
      { text: `Your top competitor gets all the calls.`, icon: 'M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z' },
      { text: `Your leads from the web are zero.`, icon: 'M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636' }
    ]
  };

  quantifiedPain = {
    title: `The High Cost of Being on <span class="text-red-500">Page 2</span>`,
    description: `Page 2 of Google might as well be the Sahara Desert. 92% of searchers never go past the first page. Being invisible isn't just frustrating; it's a massive financial drain.`,
    calculation: {
      premise: `If ranking in the top 3 on Google Maps brings in just <span class="font-bold text-white">5 extra jobs a month</span> (at an average of $2,000/job)...`,
      value: `-$10,000`,
      conclusion: `in lost revenue per month.`
    }
  };
  
  failedSolutions = [
      { title: 'The Cheap "SEO Guy"', description: 'You paid a monthly fee for vague promises and reports you didn\'t understand. Your rankings never moved, and you saw zero ROI.' },
      { title: 'The Directory Scams', description: 'You paid to be listed on some random online directory that nobody has ever heard of, with zero impact on your actual Google ranking.' },
      { title: 'Trying to DIY', description: 'You watched a few YouTube videos and updated some keywords. But local SEO is a complex, ongoing battle that requires specialized tools and expertise.' }
  ];

  blueprintPillars = [
    { name: 'Pillar 1: Google Business Profile', description: 'We transform your GMB listing into a lead-generating machine with constant updates, photos, and engagement.' },
    { name: 'Pillar 2: Website Authority', description: 'We optimize your website with the local keywords and content that tells Google you are the authority in your area.' },
    { name: 'Pillar 3: Citations & Reviews', description: 'We build a powerful network of consistent business listings and leverage your 5-star reviews to boost your ranking.' }
  ];

  gmbDeepDive = {
    title: 'Your GMB Profile: The New Homepage',
    description: 'Your Google Business Profile is often the first impression a customer has of your business. We treat it with the importance it deserves.',
    imageUrl: 'https://picsum.photos/seed/gmb-profile/800/600',
    features: ['Weekly Posts & Updates', 'Geo-tagged Photo Uploads', 'Service & Product Optimization', 'Q&A Management']
  };

  websiteDeepDive = {
    title: 'Your Website: The Authority Hub',
    description: 'Your website is the central hub that validates your expertise to Google. We ensure it\'s technically sound and content-rich.',
    imageUrl: '/chimera_assets/chimera_116_chimera_116.webp',
    features: ['Local Keyword Targeting', 'Service & City Page Creation', 'Schema Markup Implementation', 'Mobile Speed Optimization']
  };

  citationsDeepDive = {
    title: 'Citations & Reviews: The Trust Signals',
    description: 'Consistency and reputation across the web are huge trust signals for Google. We build and manage them for you.',
    imageUrl: '/chimera_assets/premium_photo-1744345196350-c55cd2b28cab_ixlib_rb-4_1_chimera_117.webp',
    features: ['NAP Consistency Audit & Cleanup', 'High-Authority Directory Submissions', 'Review Velocity Monitoring', 'Automated Review Streaming to Website']
  };

  caseStudy = {
    name: 'Rodriguez Painting',
    before: { value: 'Page 3', label: 'for "painters near me"' },
    after: { value: '#2', label: 'in the Google Map Pack' },
    result: '+500%',
    summary: `Maria Rodriguez's business was all word-of-mouth. She was virtually invisible online. After 6 months of our Local SEO service, she's now consistently in the top 3 on Google Maps for her most important keywords. This has led to a 500% increase in leads from her website and GMB profile.`
  };

  testimonials = [
    { quote: 'I didn\'t understand SEO, I just knew I needed to be on Google. The team at Phoenix Recovery took care of everything and now my phone rings from Google searches. It\'s that simple.', author: 'Maria R., Rodriguez Painting' },
    { quote: 'We used to be on page 4. Now we\'re in the map pack for three different towns we service. The investment paid for itself in the first two months.', author: 'John D., JD Roofing' },
    { quote: 'Seeing my business pop up first on Google Maps is the best feeling. It gives you instant credibility. The leads that come from there are always high quality.', author: 'Mike S., Smith Electric' }
  ];

  algorithmExplained = [
    { name: 'Authority', text: 'Does Google see you as the go-to expert for your trade in your city?' },
    { name: 'Relevance', text: 'Does your online presence accurately match what the customer is searching for?' },
    { name: 'Proximity', text: 'How close is your business to the person searching? (We can\'t change this, but we maximize the other two!)' }
  ];

  faqs = [
    { q: 'How long does it take to see results?', a: 'Local SEO is a marathon, not a sprint. While some improvements can be seen in the first 30-60 days, it typically takes 4-6 months to see significant, lasting ranking improvements in competitive markets.' },
    { q: 'Is this included in my plan?', a: 'Our Advanced plan includes foundational SEO setup. Our Supreme plan includes the ongoing, proactive management needed to truly dominate competitive local markets.' },
    { q: 'Can you guarantee a #1 ranking?', a: 'No reputable SEO provider can guarantee rankings, as Google\'s algorithm is complex and always changing. We do guarantee we will execute a proven, best-practice strategy to give you the best possible chance of ranking at the top.' },
    { q: 'What do you need from me?', a: 'We\'ll need access to your Google Business Profile and some details about your services and service areas. After the initial strategy session, our team handles all the ongoing work.' }
  ]
}
