import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BlogService, BlogPost } from '../../services/blog.service';
import { CtaSectionComponent } from '../../components/shared/cta-section/cta-section.component';
import { AiWebsiteGraderComponent } from '../../components/shared/ai-website-grader/ai-website-grader.component';
import { RoiCalculatorComponent } from '../../components/shared/roi-calculator/roi-calculator.component';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-resource-hub',
  templateUrl: './resource-hub.component.html',
  imports: [
    CommonModule, 
    RouterLink, 
    CtaSectionComponent, 
    AiWebsiteGraderComponent,
    RoiCalculatorComponent,
    AnimateOnScrollDirective
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ResourceHubComponent {
  private blogService = inject(BlogService);
  posts = this.blogService.getPosts();
  featuredPost = this.posts[0];
  
  openFaq = signal<number | null>(null);

  toggleFaq(index: number) {
    this.openFaq.update(current => (current === index ? null : index));
  }

  data = {
    hero: {
      title: `Welcome to the <br><span class="text-amber-400">Contractor Growth Academy.</span>`,
      subtitle: `Actionable playbooks, not just articles. This is the free knowledge hub built to help you stop working IN your business and start working ON it.`
    },
    problem: {
      title: `Drowning in Bad Advice?`,
      description: `You're bombarded by "gurus" and marketing agencies selling you the latest shiny object. Most have never swung a hammer or run a real contracting business. It's time to tune out the noise and tune into proven strategies that actually work for the trades.`,
      imageUrl: 'https://picsum.photos/seed/bad-advice/800/600'
    },
    philosophy: {
      title: 'Our Guiding Philosophy',
      points: ['Systemize', 'Automate', 'Dominate']
    },
    mentors: [
      { name: 'Alex Riley', role: 'Founder & CEO', imageUrl: 'https://pub-7b0107d999fd4c8a8018460dffd25378.r2.dev/chimera_assets/9ef4782eaeaf500a6daad205a7c2559249184b1bfba9707890299a1c38510d4a.webp', bio: 'Grew up in a contractor family. Obsessed with building systems that give contractors their time back.' },
      { name: 'Samantha Chen', role: 'Marketing Director', imageUrl: 'https://pub-7b0107d999fd4c8a8018460dffd25378.r2.dev/chimera_assets/771f368e816a76f6e930ca5781c494031ec7f56cd75b9947dcd794f34e593153.webp', bio: 'A master of local SEO and digital marketing. She turns contractors into the go-to choice in their local market.' },
    ],
    caseStudy: {
      name: 'JD Roofing',
      summary: `John D. applied the principles in our "5 Marketing Mistakes" playbook. He fixed his website, automated his review requests, and started capturing missed calls. The result? A 40% increase in revenue in 6 months and he finally took his first family vacation in 5 years.`,
      imageUrl: 'https://picsum.photos/seed/jd-success/800/600'
    },
    knowledgeGap: {
        title: `The "Knowing vs. Doing" Gap`,
        description: `This academy will give you the knowledge. But we know the #1 thing you're short on is TIME. Reading how to fix your SEO is one thing. Spending 20 hours implementing it is another. That's where we come in.`
    },
    testimonials: [
        { quote: 'The resources are great, but the real magic was having the Phoenix team actually DO it all for me. They didn\'t just give me a fish; they built me a fish-catching machine.', author: 'John D., JD Roofing' },
        { quote: 'I learned more from their free articles than I did from a year with my old marketing agency. When it was time to upgrade, choosing them was a no-brainer.', author: 'Mike S., Smith Electric' }
    ],
    faqs: [
        { q: 'Is all this content really free?', a: 'Yes, 100%. Our mission is to empower contractors. We believe that by providing immense value for free, the right contractors will see the expertise and choose to partner with us to implement these strategies at a higher level.' },
        { q: 'How is this different from other marketing blogs?', a: 'We\'re not content marketers; we\'re contractors and problem-solvers first. Every article is written through the lens of a busy contractor who needs practical, actionable advice, not marketing fluff.' },
        { q: 'What\'s the difference between this free content and your paid service?', a: 'This content is the "what" and the "why." Our paid service is the "how"—or more accurately, the "DONE." We take these proven strategies and do all the implementation, management, and optimization for you, saving you hundreds of hours.' }
    ]
  };
}
