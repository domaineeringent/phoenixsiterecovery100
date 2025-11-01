import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CtaSectionComponent } from '../../components/shared/cta-section/cta-section.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-printing',
  templateUrl: './printing.component.html',
  imports: [CtaSectionComponent, RouterLink, CommonModule, AnimateOnScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrintingComponent {
  openFaq = signal<number | null>(null);

  toggleFaq(index: number) {
    this.openFaq.update(current => (current === index ? null : index));
  }

  data = {
    hero: {
      title: `Your Business Card is a Dead End. <br> We Make It a Superhighway to <span class="text-amber-400">5-Star Reviews.</span>`,
      subtitle: `Stop handing out paper that gets thrown in the trash. We'll show you how to turn every physical touchpoint—cards, signs, even your truck—into an interactive tool that builds your reputation and generates leads.`,
      imageUrl: 'chimera_assets/chimera_107_chimera_107.webp'
    },
    problem: {
      title: `Your Printed Marketing is <span class="text-amber-500">Bleeding Money.</span>`,
      description: `You spend hundreds on business cards, door hangers, and yard signs. But what's the ROI? Most of it ends up in a landfill, a dead-end with no way to track its impact, drive online action, or justify the cost.`,
      points: [
        { text: `No trackable ROI.`, icon: 'M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z' },
        { text: `Doesn't drive online action.`, icon: 'M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75' },
        { text: `Ends up in the trash.`, icon: 'M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0' }
      ]
    },
    quantifiedPain: {
      title: `The True Cost of a <span class="text-red-500">Dumb Card</span>`,
      description: `Let's do the math. Your old, static business cards aren't just a missed opportunity; they represent a significant, un-tracked loss.`,
      calculation: {
        premise: `If 1,000 standard business cards ($100) generate <span class="font-bold text-white">ZERO</span> new reviews or leads, but 1,000 QR-code cards ($150) generate 20 reviews that lead to just <span class="font-bold text-white">ONE</span> extra job (avg. $2,500)...`,
        value: `+$2,350`,
        conclusion: `in positive ROI for a tiny extra investment.`
      }
    },
    failedSolutions: [
      { title: 'Standard VistaPrint Cards', description: 'They look fine, but they\'re "dumb." They offer information but demand nothing. They can\'t be tracked and don\'t bridge to your online presence.' },
      { title: 'DIY QR Codes', description: 'You tried a free QR code generator, but it links to a clunky URL, isn\'t trackable, and looks unprofessional on a poorly designed card.' },
      { title: 'Just Ignoring Print', description: 'You decided print is "dead," but you\'re missing the single best opportunity to ask for a review: in person, at the moment of peak customer happiness.' }
    ],
    howItWorks: [
      { number: '01', title: 'We Design Your Tool', description: 'We design your cards, signs, or magnets and embed a unique, trackable QR code linked directly to your review funnel.', icon: 'M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10' },
      { number: '02', title: 'Hand it Off', description: 'Finish a job. The customer is thrilled. You hand them a simple card and say, "We\'d love a review if you have a second!"', icon: 'M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z' },
      { number: '03', title: 'Bridge is Crossed', description: 'The customer scans the code and is taken directly to your Google review page. The physical converts to digital, and your reputation grows.', icon: 'M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345h5.518a.562.562 0 0 1 .321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988h5.518a.563.563 0 0 0 .475-.345L11.48 3.5Z' }
    ],
    productLineup: [
      { name: 'QR Code Review Cards', description: 'Our signature product. A beautifully designed, thick card that feels professional and makes getting reviews effortless.', icon: 'M3.75 4.5a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V7.5a3 3 0 0 0-3-3H3.75Z' },
      { name: 'Yard Signs', description: 'Turn every job site into a 24/7 billboard. Our durable signs can have a QR code linking to your gallery or a special offer.', icon: 'M4.5 3.75a3 3 0 0 0-3 3v.75h21v-.75a3 3 0 0 0-3-3h-15Z M21 8.25H3v10.5a3 3 0 0 0 3 3h15V8.25Z' },
      { name: 'Vehicle Magnets', description: 'Your truck is a mobile advertisement. Add a QR code that lets potential customers instantly visit your website or call you.', icon: 'M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 0a1.125 1.125 0 0 1-1.125 1.125H18m0-3 .25 3m0 0h.25m-9.75 0h.25m0 0h.25m0 0h.25m2.25-3h.25m0 0h.25m0 0h.25M12 15.75h.008v.008H12v-.008Zm0 3h.008v.008H12v-.008Zm-3-3h.008v.008H9v-.008Z' },
      { name: 'Door Hangers', description: 'Perfect for targeting neighbors of a current job. Include a QR code linking to a "neighborhood special" landing page.', icon: 'M16.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 6a6.75 6.75 0 1 1-13.5 0 6.75 6.75 0 0 1 13.5 0Z' }
    ],
    caseStudy: {
      name: 'Clearview Windows',
      before: { value: '15', label: 'Total Google Reviews' },
      after: { value: '95', label: 'in 4 Months' },
      result: '+533%',
      summary: `Bill at Clearview Windows always forgot to ask for reviews. We printed him 500 QR code review cards. He started handing one to every happy customer. The result? His review count skyrocketed, boosting his Google Maps ranking and leading to a noticeable increase in quote requests.`
    },
    testimonials: [
      { quote: 'The QR code cards are brilliant. I leave one behind at every job and I\'ve gotten more reviews in the last two months than I did in the previous two years. It\'s just so easy.', author: 'Bill H., Clearview Windows' },
      { quote: 'I put a QR code on my yard signs that links to my project gallery. I\'ve had two neighbors call me from the same street after seeing the sign and scanning it. It works.', author: 'John D., JD Roofing' }
    ],
    psychology: {
      title: 'The "Moment of Peak Happiness"',
      description: 'The single best time to ask for a review is immediately after you\'ve finished the job and the customer is thrilled with your work. Their positive emotions are at their peak. A simple card makes it frictionless to capture that emotion in a 5-star review before they have a chance to forget.',
      stat: '80%',
      text: 'of reviews come from follow-up requests. Our card IS the follow-up.'
    },
    faqs: [
      { q: 'What kind of paper stock do you use?', a: 'We use high-quality, thick 16pt card stock for a premium feel that won\'t feel flimsy. We offer various finishes like matte and gloss.' },
      { q: 'What is the turnaround time?', a: 'After you approve the final design proof, printing and shipping typically take 5-7 business days.' },
      { q: 'Can I use my own logo and branding?', a: 'Absolutely! Our design team will incorporate your existing logo, colors, and branding to ensure everything is consistent and professional.' },
      { q: 'What if I need to reorder?', a: 'Reordering is easy! We save all your designs. Just send us an email or message in the portal and we\'ll get a new batch printed and shipped.' }
    ]
  };
}