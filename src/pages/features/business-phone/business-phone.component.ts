import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CtaSectionComponent } from '../../../components/shared/cta-section/cta-section.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-business-phone',
  templateUrl: '../feature-page.component.html',
  imports: [CtaSectionComponent, RouterLink, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusinessPhoneComponent {
  openFaq = signal<number | null>(null);

  toggleFaq(index: number) {
    this.openFaq.update(current => (current === index ? null : index));
  }
  
  data = {
    hero: {
      subtitle: 'A Professional Line',
      title: 'Business <span class="text-amber-400">Phone</span>',
      description: 'Separate your personal and business calls. Get a dedicated local business phone number that works on your existing cell phone, complete with call tracking and recording.',
      imageUrl: '/chimera_assets/premium_photo-1661304756317-7f9e6f3c90e0_ixlib_rb-4_1_chimera_126.webp',
    },
    problem: {
      title: 'Is Your Personal Cell Phone Your Business Line?',
      description: 'Using your personal number for business looks unprofessional, makes it impossible to disconnect, and gives you no data on where your calls are coming from. It mixes business with family.',
      painPoints: [
        { imageUrl: '/chimera_assets/premium_photo-1661964461399-c090141a6c34_ixlib_rb-4_1_chimera_127.webp', text: 'Customers calling at all hours.' },
        { imageUrl: '/chimera_assets/premium_photo-1702598860883-7f3bc393dab7_ixlib_rb-4_1_chimera_128.webp', text: 'Looking like a one-man show.' },
        { imageUrl: '/chimera_assets/premium_photo-1661687607639-b34a51b70388_ixlib_rb-4_1_chimera_129.webp', text: 'No tracking of call performance.' },
      ]
    },
    solution: {
      title: 'The Professional Phone System <span class="text-amber-400">You Deserve</span>',
      description: 'Get a dedicated local business number that works on your existing cell phone. All the features of a big company phone system—call recording, analytics, Missed Call Text Back—without the cost or complexity.',
      benefits: [
        { title: 'Legal Business Phone Number', description: 'Establish a professional presence with a dedicated local phone number that clearly separates business from personal calls.' },
        { title: 'Call Tracking', description: 'Every call is monitored and recorded, giving you valuable insights into your marketing and sales process. This ensures you never miss an important call.' },
        { title: 'Separate Personal and Business', description: 'By using separate phone numbers for personal and business, you can maintain a clear boundary between work and personal life. This helps you maintain a clear boundary between work and personal life, and presents a professional image to clients.' }
      ]
    },
    howItWorks: {
      title: 'Setup is a Breeze',
      steps: [
        { number: '01', title: 'Choose Your Number', description: 'We help you select a new local number for your business, or we can port your existing one.' },
        { number: '02', title: 'Connect to Your Phone', description: 'We forward your new business number to your cell phone. When a call comes in, you\'ll see it\'s a business call.' },
        { number: '03', title: 'Activate Features', description: 'We turn on all the powerful features like call recording, analytics, and Missed Call Text Back.' },
      ]
    },
    featureDeepDive: {
      title: 'Big Business Phone Features',
      features: [
        { title: 'Call Recording', description: 'Automatically record all incoming and outgoing calls for quality assurance, training, and dispute resolution. Never again wonder "What did that customer say?"', imageUrl: 'https://picsum.photos/seed/phonefeature1/800/600' },
        { title: 'Marketing Analytics', description: 'See exactly how many calls your marketing is generating. Track call volume, duration, and answer rates to understand your ROI.', imageUrl: '/chimera_assets/premium_photo-1681487767138-ddf2d67b35c1_ixlib_rb-4_1_chimera_131.webp' },
        { title: 'Mobile App Calling', description: 'Make outbound calls using your business number directly from our mobile app, so your personal cell number always stays private.', imageUrl: 'https://picsum.photos/seed/phonefeature3/800/600' },
      ]
    },
    statistic: {
      value: '80%',
      text: 'of calls to contractors with a business phone lead to jobs.',
    },
    scenario: {
      title: 'Meet Jenny, The HVAC Tech',
      imageUrl: 'https://picsum.photos/seed/contractor7/500/500',
      story: 'Jenny used her personal cell for years. She was frustrated by late-night calls and couldn\'t tell if her Google Ads were even working. With her new Phoenix Recovery number, her phone is quiet after 6 PM, and her dashboard shows she got 15 calls from her ads last month. She feels in control of her business and her life again.'
    },
    testimonial: {
      quote: 'Getting a separate business line was one of the best decisions I made. It makes me look more professional, and the call recording has saved me from disputes twice now.',
      author: 'Tom W., Wilson HVAC'
    },
    faq: {
      title: 'Business Phone FAQs',
      questions: [
        { q: 'Can I keep my existing business number?', a: 'Yes, in most cases we can "port" your existing number over to our system. The process is seamless and there\'s no downtime.' },
        { q: 'How will I know if it\'s a business call?', a: 'When a call comes in through your business line, you can set it up to announce "This is a business call" before connecting, or have a different ringtone.' },
        { q: 'Do I need a special phone or hardware?', a: 'Not at all. The entire system works with your existing smartphone. No new hardware is required.' },
        { q: 'Is this a VOIP service?', a: 'Yes, it\'s a sophisticated VOIP (Voice over Internet Protocol) system packed with features designed specifically for contractors.' }
      ]
    }
  };
}