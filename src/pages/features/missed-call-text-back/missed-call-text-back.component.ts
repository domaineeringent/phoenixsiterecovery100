import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CtaSectionComponent } from '../../../components/shared/cta-section/cta-section.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollDirective } from '../../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-missed-call-text-back',
  templateUrl: './missed-call-text-back.component.html',
  imports: [CtaSectionComponent, RouterLink, CommonModule, AnimateOnScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MissedCallTextBackComponent {
  openFaq = signal<number | null>(null);

  toggleFaq(index: number) {
    this.openFaq.update(current => (current === index ? null : index));
  }

  // New, expanded data structure for the 15-section sales page
  hero = {
    title: `Your Voicemail is a <span class="text-amber-400">Black Hole</span> for New Jobs.`,
    subtitle: `While you're on a ladder, your next big job is calling your competitor. We'll show you how our system catches every single lead, even when you can't answer the phone.`,
    imageUrl: '../../../../chimera_assets/premium_photo-1711987208994-28aa5e73235c_ixlib_rb-4_1_chimera_113.webp'
  };

  problem = {
    title: `The Call You Can't Answer is the Job You <span class="text-amber-500">Just Lost.</span>`,
    description: `You're on a job, your hands are full, and your phone rings with an unknown number. You know what happens next. They don't leave a message. They just hang up and call the next contractor on Google. That job is gone forever.`,
    points: [
      { text: `85% of people won't leave a voicemail.`, icon: 'M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636' },
      { text: `They immediately call your competitor.`, icon: 'M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z' },
      { text: `You lose the job before you even knew it existed.`, icon: 'M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z' }
    ]
  };

  quantifiedPain = {
    title: `The Million-Dollar <span class="text-red-500">Hang-Up</span>`,
    description: `This isn't just an annoyance. It's a catastrophic leak in your sales process that's costing you tens of thousands of dollars a year.`,
    calculation: {
      premise: `If you miss just <span class="font-bold text-white">3 calls a week</span> that go to a competitor, and your average job is worth <span class="font-bold text-white">$2,000</span>...`,
      value: `-$24,000`,
      conclusion: `in lost revenue per month.`
    }
  };
  
  failedSolutions = [
      { title: 'Relying on Voicemail', description: 'This is a graveyard for leads. By the time you check your messages, that customer has already hired someone else.' },
      { title: 'Hiring a Receptionist', description: 'Expensive, and they still take breaks. A full-time salary to solve a problem that affordable technology can handle 24/7.' },
      { title: '"Hoping" they call back', description: 'Hope is not a business strategy. In a competitive market, the fastest contractor wins. Every single time.' }
  ];

  howItWorks = [
    { number: '01', title: 'Call Is Missed', description: 'A potential customer calls, but you\'re on a job and can\'t answer.', icon: 'M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z' },
    { number: '02', title: 'Instant Text-Back', description: 'Our system instantly sends a custom text: "Hi, this is [Your Name]. Saw I missed your call. I\'m on a job but will call back shortly. What\'s this regarding?"', icon: 'M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5' },
    { number: '03', title: 'Lead is Captured', description: 'Their reply lands in your unified inbox. You\'ve captured the lead and can respond via text or call when you\'re free.', icon: 'M7.5 8.25h9m-9 3H12m2.25 2.25H12m0 0H9.75M12 15V9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z' }
  ];

  magicMechanics = [
    { name: 'Fully Customizable', description: 'Tailor the text message to perfectly match your brand voice and business name.', icon: 'M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10' },
    { name: 'Smart Filtering', description: 'The system won\'t text back known contacts in your CRM, preventing awkward messages to your family or suppliers.', icon: 'M12 3c-1.1 0-2.07.36-2.83.94l.84.84A3 3 0 0 1 12 3.75a3 3 0 0 1 2 3.75v.51l.84.84c.58-.76.94-1.73.94-2.83A4.5 4.5 0 0 0 12 3Z M3.75 7.5c0-1.1.36-2.07.94-2.83l.84.84A3 3 0 0 0 3.75 7.5v.51l-.84.84A4.49 4.49 0 0 0 3 7.5Z' },
    { name: 'After-Hours Mode', description: 'Set business hours to send a different message at night, like "Thanks for your call! We\'re closed but will call you first thing in the morning."', icon: 'M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' },
    { name: 'Instant Notifications', description: 'You and your team get an instant push notification that a new lead has been captured, so you can follow up the moment you\'re free.', icon: 'M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0' },
    { name: 'Works on Existing Number', description: 'We can port your existing business number so you get all this power without needing to change your marketing materials.', icon: 'M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3' },
    { name: 'Stops Automatically', description: 'The moment a lead replies to the text, the sequence stops. No robotic, overlapping messages. A human can take over the conversation.', icon: 'M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636' }
  ];

  caseStudy = {
    name: 'Chen\'s Plumbing',
    before: { value: '5-7', label: 'Missed Calls Per Day' },
    after: { value: '80%', label: 'Captured as Leads' },
    result: '4',
    summary: `David Chen was losing jobs constantly while on service calls. After activating Missed Call Text Back, he started capturing an average of 4 extra leads per day that would have otherwise gone to voicemail. This single feature added over $10,000/mo to his bottom line.`
  };

  testimonials = [
    { quote: 'The missed call text back is worth the price of the whole system, period. I can\'t tell you how many emergency jobs I\'ve booked because it texted someone back while I was on another job.', author: 'David C., Chen\'s Plumbing' },
    { quote: 'I used to have so much anxiety about missing calls. I\'d be rushing jobs just to get back to my phone. Now I can focus on the work knowing every single lead is captured.', author: 'Mike S., Smith Electric' },
    { quote: 'It makes us look so much more professional than our competitors. Customers are impressed that we get back to them so fast, even if it\'s just an automated text to start.', author: 'John D., JD Roofing' }
  ];
  
  psychology = [
    { stat: '98%', text: 'of text messages are opened, compared to just 20% of emails.' },
    { stat: 'Speed', text: 'Responding in the first 5 minutes increases lead conversion by 391%.' },
    { stat: 'Preference', text: '75% of consumers prefer to interact with businesses via text.' }
  ];

  faqs = [
    { q: 'Will this work with my current cell phone?', a: 'Yes. We provide you with a business number that forwards to your cell. All the magic happens in our system, so your phone just works as it always has.' },
    { q: 'Will it text back my existing customers or family?', a: 'No. Our system is smart. It can be configured to only activate for numbers that are not already saved as contacts in your system.' },
    { q: 'Can I turn it off?', a: 'Absolutely. You can toggle the feature on and off with a single click in your mobile app or desktop dashboard.' },
    { q: 'What if they call back right after hanging up?', a: 'The system has a built-in cooldown period, so it won\'t text back the same number multiple times in a short window, preventing spammy messages.' }
  ];
}
