import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CtaSectionComponent } from '../../../components/shared/cta-section/cta-section.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-one-click-marketing',
  templateUrl: '../feature-page.component.html',
  imports: [CtaSectionComponent, RouterLink, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OneClickMarketingComponent {
  openFaq = signal<number | null>(null);

  toggleFaq(index: number) {
    this.openFaq.update(current => (current === index ? null : index));
  }
  
  data = {
    hero: {
      subtitle: 'Reactivate Past Customers',
      title: 'One-Click Marketing <span class="text-amber-400">Campaigns</span>',
      description: 'Launch powerful marketing campaigns to your entire customer list with a single click. Re-engage past clients, ask for reviews, or announce special promotions.',
      imageUrl: 'https://picsum.photos/seed/marketing/800/600',
    },
    problem: {
      title: 'Your Biggest Asset is Collecting Dust',
      description: 'Your list of past customers is a gold mine. But you\'re too busy to manually contact them all for repeat business, referrals, or reviews. That\'s untapped revenue sitting in a spreadsheet.',
      painPoints: [
        { imageUrl: 'https://picsum.photos/seed/forgotten/100/100', text: 'Past customers forget about you.' },
        { imageUrl: 'https://picsum.photos/seed/tooslow/100/100', text: 'Manually texting/emailing is too slow.' },
        { imageUrl: 'https://picsum.photos/seed/repeatbiz/100/100', text: 'Losing out on easy repeat business.' },
      ]
    },
    solution: {
      title: 'Tap Your Customer Gold Mine with <span class="text-amber-400">One Click</span>',
      description: 'Easily upload your customer list and use our proven templates to send mass text campaigns. Whether it\'s a seasonal promotion, a request for reviews, or a simple check-in, you can reach hundreds of customers in seconds.',
      benefits: [
        { title: 'Contractor Lead Revival', description: 'Got a list of at least 150 of your past customers who haven\'t booked in a while? Send a text campaign to get them through the door again.' },
        { title: 'Contractor 5-Star Review Injection', description: 'Provide us a list of at least 150 past customers and we\'ll send them a review request, encouraging them to leave feedback and boost your ratings.' },
        { title: 'Contractor Customer Nurture', description: 'We\'ll run a customer nurture campaign to re-engage past customers, keeping your services top-of-mind and encouraging repeat business.' }
      ]
    },
    howItWorks: {
      title: 'Launch a Campaign in Minutes',
      steps: [
        { number: '01', title: 'Upload Your List', description: 'Easily upload a spreadsheet (CSV) of your past customers with their names and phone numbers.' },
        { number: '02', title: 'Choose a Template', description: 'Select from our library of proven campaign templates (e.g., "Spring Cleanup Special," "Review Request").' },
        { number: '03', title: 'Launch & Reply', description: 'Click "Send." All replies flow directly into your All-In-One Inbox for you to manage the conversations.' },
      ]
    },
    featureDeepDive: {
      title: 'Smart & Simple Campaigning',
      features: [
        { title: 'Proven Templates', description: 'Don\'t worry about what to say. We provide a set of high-converting message templates written specifically for contractors.', imageUrl: 'https://picsum.photos/seed/marketfeature1/800/600' },
        { title: 'Personalization Tags', description: 'Automatically insert the customer\'s first name into each text message, making your mass campaigns feel like personal, one-to-one conversations.', imageUrl: 'https://pub-7b0107d999fd4c8a8018460dffd25378.r2.dev/chimera_assets/2cf2ceb3b92cad023d29ff3c6b18c7debacca4ebc5f1129994f8d71afd145ce1.webp' },
        { title: 'Scheduling', description: 'Plan your campaigns in advance. Write your message today and schedule it to be sent next week, next month, or whenever you want.', imageUrl: 'https://picsum.photos/seed/marketfeature3/800/600' },
      ]
    },
    statistic: {
      value: '98%',
      text: 'of text messages are read within 3 minutes, making it the most effective way to reach your customers.',
    },
    scenario: {
      title: 'Meet Kevin, The Pressure Washer',
      imageUrl: 'https://pub-7b0107d999fd4c8a8018460dffd25378.r2.dev/chimera_assets/b4d58888da182f5d335bcdc673f59733ec34bd8c2d7d01328b57a173e19da895.webp',
      story: 'Kevin\'s business is slow in the fall. He uploaded his list of 300 customers from the spring and sent a "Fall Gutter Cleaning" special with one click. Within an hour, his inbox had 40 replies. He booked 15 jobs that week from a single text campaign that took him 5 minutes to set up.'
    },
    testimonial: {
      quote: 'The one-click campaigns are my secret weapon for slow seasons. I can drum up thousands of dollars in business in a single afternoon. It\'s the best ROI in marketing.',
      author: 'Kevin P., Precision Pressure Washing'
    },
    faq: {
      title: 'Campaign FAQs',
      questions: [
        { q: 'Is this TCPA compliant?', a: 'Yes, we provide the tools and best practices for TCPA compliance, including ensuring you have consent to text your customers and honoring opt-out requests automatically.' },
        { q: 'How many texts can I send?', a: 'Your plan includes a generous number of text message segments. We can discuss specific volume needs based on the size of your customer list.' },
        { q: 'What if I don\'t have a customer list?', a: 'Our system is the perfect place to start building one! Every new lead and customer you interact with is automatically saved in your contacts, building your asset for future campaigns.' },
        { q: 'Can I send picture messages (MMS)?', a: 'Yes, MMS is supported. You can send images of your work, flyers for promotions, or anything else that helps you stand out.' }
      ]
    }
  };
}