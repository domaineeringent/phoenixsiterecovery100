import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CtaSectionComponent } from '../../../components/shared/cta-section/cta-section.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollDirective } from '../../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-all-in-one-inbox',
  templateUrl: './all-in-one-inbox.component.html',
  imports: [CtaSectionComponent, RouterLink, CommonModule, AnimateOnScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllInOneInboxComponent {
  openFaq = signal<number | null>(null);

  toggleFaq(index: number) {
    this.openFaq.update(current => (current === index ? null : index));
  }

  // New, expanded data structure for the 15-section sales page
  hero = {
    title: `Stop Chasing Conversations.<br> Start <span class="text-amber-400">Closing Deals.</span>`,
    subtitle: `The All-in-One Command Center that captures every lead, organizes every conversation, and turns your phone into a money-making machine.`,
    imageUrl: '../../../../chimera_assets/premium_photo-1729000859659-8991bdbbc68c_ixlib_rb-4_1_chimera_111.webp'
  };

  problem = {
    title: `Your Leads Are Scattered Across <span class="text-amber-500">5 Different Apps</span>`,
    description: `Right now, a potential customer could be texting you, emailing you, messaging your Facebook page, or leaving a comment on your Google profile. Juggling all that is a recipe for disaster.`,
    points: [
      { text: `Missed Facebook messages.`, icon: 'M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z' },
      { text: `Forgotten email threads.`, icon: 'M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75' },
      { text: `Lost text messages.`, icon: 'M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h-3V1.5m3 0h-3m-3.75 18h15M12 18h.008v.008H12v-.008z' }
    ]
  };

  quantifiedPain = {
    title: `The True Cost of a <span class="text-red-500">Slow Reply</span>`,
    description: `In the contracting world, speed wins. The first to respond is often the one who gets the job. Communication chaos isn't just stressful; it's expensive.`,
    calculation: {
      premise: `If you lose just <span class="font-bold text-white">ONE job a week</span> (worth $1,500) because a competitor replied faster...`,
      value: `-$6,000`,
      conclusion: `in lost revenue per month.`
    }
  };
  
  failedSolutions = [
      { title: 'Your Personal Text App', description: 'Looks unprofessional, mixes family with business, and gives you zero ability to track or manage leads as a team.' },
      { title: 'Checking 5 Different Apps', description: 'Jumping between Facebook, email, and texts is inefficient. Leads get forgotten, and context is lost.' },
      { title: 'Relying on Voicemail', description: '85% of people who get a voicemail don\'t leave a message. They just hang up and call the next contractor on the list.' }
  ];

  howItWorks = [
    { number: '01', title: 'Connect Everything', description: 'We link your SMS, Email, Facebook, GMB, and Website Chat into one central hub.', icon: 'M13.5 2.25L15 3.75l-2.25 2.25L15 8.25l-1.5 1.5L11.25 7.5 9 9.75l1.5 1.5L12.75 9 15 11.25l-1.5 1.5L11.25 10.5 9 12.75l1.5 1.5L12.75 12 15 14.25l-1.5 1.5L11.25 13.5 9 15.75l1.5 1.5L12.75 15 15 17.25l-1.5 1.5L11.25 16.5 9 18.75l1.5 1.5L12.75 18 15 20.25l-1.5 1.5L11.25 19.5 9 21.75l-1.5-1.5L9.75 18 7.5 15.75l1.5-1.5L11.25 16.5 9 14.25l1.5-1.5L12.75 15 15 12.75l-1.5-1.5L11.25 9 9 6.75l1.5-1.5L12.75 7.5 15 5.25l-1.5-1.5L11.25 6 9 3.75 7.5 2.25 9 3.75l2.25-2.25L9 3.75 7.5 5.25 9 6.75 6.75 9 9 11.25 6.75 13.5 9 15.75 6.75 18 9 20.25l-1.5 1.5L5.25 18l-1.5-1.5L6 14.25 3.75 12 6 9.75 3.75 7.5 6 5.25 3.75 3 2.25 4.5 4.5 6.75 2.25 9l1.5 1.5L6 8.25l2.25 2.25L6 12.75l-1.5 1.5L6.75 15l2.25-2.25L11.25 15l-1.5 1.5L12 18.75l2.25-2.25L12 14.25l-1.5-1.5L12.75 10.5l2.25-2.25L12.75 6z' },
    { number: '02', title: 'Get Notified Instantly', description: 'A lead messages you on any channel. You get an instant notification on your phone and desktop.', icon: 'M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0' },
    { number: '03', title: 'Reply from One Place', description: 'Respond via text, email, or social messenger from one simple feed. On your phone or on your computer.', icon: 'M7.5 8.25h9m-9 3H12m2.25 2.25H12m0 0H9.75M12 15V9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z' }
  ];

  inboxSuperpowers = [
    { name: 'SMS Texting', description: 'The 98% Open Rate Channel. The fastest, most effective way to communicate with leads and customers.', icon: 'M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h-3V1.5m3 0h-3m-3.75 18h15M12 18h.008v.008H12v-.008z' },
    { name: 'Google Business Profile Chat', description: 'Customers messaging you from Google Maps go straight into your inbox. Respond instantly and boost your local ranking.', icon: 'M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z' },
    { name: 'Website Chat Widget', description: 'Turn your website into a real-time conversation starter and capture leads who might otherwise leave.', icon: 'M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582' },
    { name: 'Facebook & Instagram DMs', description: 'Bring your social media conversations into your command center. No more forgetting to check your pages.', icon: 'M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z' },
    { name: 'Saved Replies', description: 'Create templates for common questions (e.g., "Can you send me some photos of the project?"). Reply in seconds with a single tap.', icon: 'M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M21.75 9V5.25A2.25 2.25 0 0019.5 3h-15A2.25 2.25 0 002.25 5.25v13.5A2.25 2.25 0 004.5 21h15a2.25 2.25 0 002.25-2.25V15m-4.5-6.75l-6.478 3.488m6.478-3.488l-6.478-3.488m0 0a2.25 2.25 0 00-2.066 0l-6.478 3.488' },
    { name: 'Internal Team Chat', description: 'Keep your team in the loop. Tag other users and leave private notes on conversations right in the inbox.', icon: 'M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.286 2.72a3 3 0 01-4.682-2.72 9.094 9.094 0 013.741-.479m7.286 2.72-.777 2.721A11.025 11.025 0 0112 21a11.025 11.025 0 01-4.473-1.472l-.777-2.721m7.286 2.72-3.64-1.092' }
  ];

  caseStudy = {
    name: 'Smith Electric',
    before: { value: '24-48 hours', label: 'Avg. Response Time' },
    after: { value: '< 5 minutes', label: 'Avg. Response Time' },
    result: '30%',
    summary: `Mike Smith was losing leads because he'd forget to check his Facebook page or his email until the end of the day. After implementing the All-In-One Inbox, his response time dropped dramatically. He could see and reply to every lead instantly from his phone. This single change led to a 30% increase in booked jobs in the first quarter.`
  };

  testimonials = [
    { quote: 'I used to lose leads because I\'d forget to check my Facebook page. Now everything is in one place and I can reply in minutes from my phone. Game changer.', author: 'Mike S., Smith Electric' },
    { quote: 'Being able to see the entire text and email history with a customer before I call them is huge. I sound more prepared and professional.', author: 'John D., JD Roofing' },
    { quote: 'My office admin and I can both be in the inbox. We can tag each other in notes. It\'s made our team so much more efficient.', author: 'Carlos G., Garcia Landscaping' }
  ];

  comparisonData = [
    { feature: 'Channels', oldWay: 'Texts, FB, GMB, Email, Web Chat', phoenixWay: 'All in one unified feed' },
    { feature: 'Lead Capture', oldWay: 'Leads fall through the cracks', phoenixWay: 'Every lead captured automatically' },
    { feature: 'Cost', oldWay: '$50/mo in separate apps', phoenixWay: 'Included in your plan' }
  ];

  faqs = [
    { q: 'What channels does the inbox support?', a: 'It supports SMS, Facebook Messenger, Instagram DMs, Google Business Profile messages, website chat, and emails.' },
    { q: 'Can multiple team members use the inbox?', a: 'Yes! You can add multiple users and even assign conversations to specific team members to ensure the right person is handling the inquiry.' },
    { q: 'Is there a mobile app?', a: 'Yes, there is a fully-featured mobile app for both iOS and Android, so you can manage conversations from anywhere.' },
    { q: 'Can I send photos and attachments?', a: 'Absolutely. You can send and receive images, PDFs, and other files directly in the conversation feed, just like a normal text message.' }
  ]
}
