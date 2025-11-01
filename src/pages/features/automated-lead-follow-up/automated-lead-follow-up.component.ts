import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CtaSectionComponent } from '../../../components/shared/cta-section/cta-section.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-automated-lead-follow-up',
  templateUrl: '../feature-page.component.html',
  imports: [CtaSectionComponent, RouterLink, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutomatedLeadFollowUpComponent {
  openFaq = signal<number | null>(null);

  toggleFaq(index: number) {
    this.openFaq.update(current => (current === index ? null : index));
  }
  
  data = {
    hero: {
      subtitle: 'Never Let a Lead Go Cold',
      title: 'Automated SMS <span class="text-amber-400">Lead Follow-up</span>',
      description: 'The fortune is in the follow-up. Our system automatically follows up with new leads via text message over several days until they respond, ensuring you get the highest possible conversion rate.',
      imageUrl: 'chimera_assets/chimera_118_chimera_118.webp',
    },
    problem: {
      title: 'You\'re Too Busy to Chase Every Lead',
      description: 'A new lead is interested right now, but you\'re on a job. By the time you call them back hours later, they\'ve already spoken to three other contractors. You lost the job before you even had a chance.',
      painPoints: [
        { imageUrl: 'https://picsum.photos/seed/leadscold/100/100', text: 'Leads go cold before you can call.' },
        { imageUrl: 'https://picsum.photos/seed/forgetfollowup/100/100', text: 'Forgetting to follow up after one try.' },
        { imageUrl: 'https://picsum.photos/seed/losejobs/100/100', text: 'Losing jobs to faster competitors.' },
      ]
    },
    solution: {
      title: 'Your Automatic, Persistent <span class="text-amber-400">Sales Assistant</span>',
      description: 'Our automated follow-up campaigns act as your virtual assistant. When a new lead comes in, a series of pre-written text messages are sent over several days, keeping you top-of-mind and prompting a response.',
      benefits: [
        { title: 'Website Quote Forms', description: 'When a prospect fills out a form on your website, we automatically send them a text to confirm their inquiry. You\'ll also receive a notification to follow up.' },
        { title: 'Chat Widget', description: 'When a lead comes from your website, we automatically send them a text message to get the conversation started. This makes you stand out from the competition and ensures you\'ll never miss an opportunity.' },
        { title: 'Instagram & Facebook Lead Follow-up', description: 'When a customer messages you on Facebook or Instagram, we can set up an automated response. This makes you stand out and ensures you can follow up quickly.' }
      ]
    },
    howItWorks: {
      title: 'Set It and Forget It Follow-up',
      steps: [
        { number: '01', title: 'Lead Arrives', description: 'A new lead comes in from your website, Google Business Profile, or Facebook.' },
        { number: '02', title: 'Campaign Triggers', description: 'The system automatically starts a multi-day SMS follow-up campaign.' },
        { number: '03', title: 'They Respond', description: 'Once the lead replies, the automation stops and the conversation appears in your inbox for you to take over.' },
      ]
    },
    featureDeepDive: {
      title: 'Intelligent Automation',
      features: [
        { title: 'Customizable Campaigns', description: 'We work with you to write the follow-up messages, making sure they match your brand voice. You control the timing and content of every text.', imageUrl: 'chimera_assets/chimera_122_chimera_122.webp' },
        { title: 'Smart Stop', description: 'The moment a lead responds to any message in the sequence, the automated campaign for them stops instantly. This ensures you can take over with a natural, human conversation.', imageUrl: 'chimera_assets/chimera_123_chimera_123.webp' },
        { title: 'Reactivation Campaigns', description: 'Use the same automation power to re-engage old leads that went cold. A simple "Hey, are you still looking for help with [service]?" can bring dead leads back to life.', imageUrl: 'https://picsum.photos/seed/autofeature3/800/600' },
      ]
    },
    statistic: {
      value: '72%',
      text: 'of contractors boost sales with automated follow-ups.',
    },
    scenario: {
      title: 'Meet Frank, The Roofer',
      imageUrl: 'chimera_assets/chimera_125_chimera_125.webp',
      story: 'A homeowner filled out Frank\'s website form at 9 PM on a Tuesday. Frank was asleep. The system instantly texted the lead, "Thanks for your roof quote request! We\'ll review and get back to you in the morning." The next day, it followed up again. The homeowner replied, impressed by the professional communication, and Frank booked the quote.'
    },
    testimonial: {
      quote: 'I used to let leads slip through the cracks all the time because I just didn\'t have time to follow up more than once. The automations have easily doubled the number of quotes I book.',
      author: 'Frank W., Apex Roofing'
    },
    faq: {
      title: 'Automation FAQs',
      questions: [
        { q: 'Is this going to feel robotic to my customers?', a: 'Not at all. We design the messages to sound human and conversational. The goal is to start a conversation, not close a deal via robot.' },
        { q: 'How many messages does it send?', a: 'Our standard campaign is typically 3-4 messages spread out over 5-7 days, but this is fully customizable to your preference.' },
        { q: 'Can I see the automated messages that are being sent?', a: 'Yes, every automated message sent appears in your conversation history with the contact, so you always have full visibility.' },
        { q: 'What if a customer says "STOP"?', a: 'Our system automatically recognizes opt-out keywords like STOP and will immediately cease all communication with that contact to ensure compliance.' }
      ]
    }
  };
}