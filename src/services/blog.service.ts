import { Injectable, signal } from '@angular/core';

export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  author: string;
  authorImage: string;
  publishDate: string;
  readTime: number;
  tags: string[];
  imageUrl: string;
  content: string; // HTML content
}

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private readonly posts = signal<BlogPost[]>([
    {
      slug: '5-marketing-mistakes-contractors-make',
      title: 'The 5 Biggest Marketing Mistakes Contractors Make (And How to Fix Them)',
      subtitle: 'Stop burning money on marketing that doesn\'t work. Here are the most common pitfalls we see contractors fall into and how you can avoid them to get a better ROI.',
      author: 'Alex Riley',
      authorImage: 'https://pub-7b0107d999fd4c8a8018460dffd25378.r2.dev/chimera_assets/b1d6eac4d6ad574eab7c71695e354a3b85f649d80e5c8a7025d6abfefc8cd07c.webp',
      publishDate: '2024-07-15',
      readTime: 6,
      tags: ['Marketing', 'Lead Generation'],
      imageUrl: 'https://pub-7b0107d999fd4c8a8018460dffd25378.r2.dev/chimera_assets/d2075e35632c4ceac12b46892da43976738c6c85df5e0778c20cee5674cfd5c3.webp',
      content: `
        <p class="mb-4">It's a tough world out there for contractors. You're not just a craftsman; you're a salesperson, a manager, and a marketer. It's easy to make mistakes when you're juggling so much. Here are the top 5 we see:</p>
        <h3 class="text-2xl font-bold mt-6 mb-2 font-oswald">1. Not Answering Your Phone</h3>
        <p class="mb-4">This sounds obvious, but you'd be shocked how many contractors let calls go to voicemail. 85% of customers who can't reach a business on the first try will simply call the next one on the list. You lost the job before you even knew it existed. That's why our Missed Call Text Back is a non-negotiable feature for our clients.</p>
        <h3 class="text-2xl font-bold mt-6 mb-2 font-oswald">2. Having a "Brochure" Website</h3>
        <p class="mb-4">Your website isn't a digital version of your business card. It should be your hardest working employee. If it's broken, outdated, or lacks clear calls-to-action, prominent phone numbers, and easy-to-use quote forms, it's just a pretty picture. It needs to be a tool for conversion.</p>
        <h3 class="text-2xl font-bold mt-6 mb-2 font-oswald">3. Ignoring Your Online Reputation</h3>
        <p class="mb-4">Over 90% of consumers read online reviews before making a purchase decision. If you have no reviews, or worse, a few bad ones, you're losing business to competitors with a stronger reputation. Actively asking every happy customer for a review is the single best way to build trust before you even speak to a prospect. Our 5-Star Review Funnel automates this entire process.</p>
      `,
    },
    {
        slug: 'how-to-dominate-google-maps',
        title: 'How to Dominate Google Maps for Local Leads',
        subtitle: 'Ranking in the Google "Map Pack" is the holy grail for local service businesses. We\'ll break down the three most important factors to get your business visible.',
        author: 'Samantha Chen',
        authorImage: 'https://pub-7b0107d999fd4c8a8018460dffd25378.r2.dev/chimera_assets/15a1ffe876d05ddb6e1011cf73192feba008b5c5f6b00bd5febbae55625b4851.webp',
        publishDate: '2024-07-10',
        readTime: 5,
        tags: ['SEO', 'Google'],
        imageUrl: 'https://pub-7b0107d999fd4c8a8018460dffd25378.r2.dev/chimera_assets/bd932d882718474e0b970d42bca9ef6133d36e6d056204fedafac2df1f4ea4cd.webp',
        content: `
          <p class="mb-4">When a homeowner has a leaky pipe, they don't browse the web for fun. They search "plumber near me" and call one of the first three businesses they see. Getting into that Google Map Pack is a game-changer. Here's how to do it.</p>
          <h3 class="text-2xl font-bold mt-6 mb-2 font-oswald">1. Optimize Your Google Business Profile</h3>
          <p class="mb-4">This is your new homepage. Fill out every single section. Add photos weekly. Post updates. Answer questions. The more active you are on your GMB profile, the more Google will reward you.</p>
          <h3 class="text-2xl font-bold mt-6 mb-2 font-oswald">2. Get a TON of Reviews</h3>
          <p class="mb-4">Reviews are a massive ranking signal. Google wants to show its users the best, most trusted businesses. A steady stream of recent, positive reviews is the clearest signal you can send.</p>
          <h3 class="text-2xl font-bold mt-6 mb-2 font-oswald">3. Build Local Citations</h3>
          <p class="mb-4">Make sure your business Name, Address, and Phone Number (NAP) are consistent across all major online directories like Yelp, Angie's List, etc. Consistency builds trust with Google.</p>
        `,
      },
  ]);

  getPosts() {
    return this.posts();
  }

  getPostBySlug(slug: string): BlogPost | undefined {
    return this.posts().find(p => p.slug === slug);
  }
}