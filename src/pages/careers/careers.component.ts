import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
  why: string;
}

interface Value {
  title: string;
  description: string;
  icon: string;
}

interface Perk {
  title: string;
  description: string;
  icon: string;
}

interface MissionBriefing {
  id: string;
  title: string;
  department: 'Sales' | 'Engineering' | 'Marketing' | 'Success';
  mission: string;
  responsibilities: string[];
  qualifications: string[];
}

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  imports: [CommonModule, AnimateOnScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CareersComponent {
  openPosition = signal<string | null>(null);

  togglePosition(positionId: string) {
    this.openPosition.update(current => (current === positionId ? null : positionId));
  }

  data = {
    hero: {
      title: `Your Code Could Save a Contractor's Marriage. <br> This is More Than a Job. This is a <span class="text-amber-400">Mission.</span>`,
      subtitle: `We're an elite team fighting to rescue contractors from the chaos of 70-hour weeks and broken technology. We're looking for builders who want their work to matter.`
    },
    theEnemy: {
      title: `The Enemy We Fight is <span class="text-red-500">Chaos</span>`,
      description: `The average contractor works 60+ hours a week, fighting a losing battle against paperwork, missed calls, and a patchwork of clunky software. They're masters of their trade, but prisoners of their business. This chaos costs them time, money, and moments with their families. We exist to end this.`,
      images: [
        '../../../chimera_assets/premium_photo-1711987230578-7ad6c53f2f54_ixlib_rb-4_1_chimera_87.webp',
        '../../../chimera_assets/chimera_88_chimera_88.webp',
        '../../../chimera_assets/chimera_89_chimera_89.webp'
      ]
    },
    battleCry: {
      title: `Our Battle Cry`,
      statement: `"To be the operating system for America's most successful contractors, giving them the power of a full marketing team in one simple, affordable platform. We fight chaos. We build freedom. We empower owners."`
    },
    impact: {
      title: `The <span class="text-green-500">Impact</span> You'll Make`,
      points: [
        { stat: '8 Hours', text: 'Saved per week for the average client, thanks to the automations our engineers build.' },
        { stat: '30%', text: 'Average revenue growth for clients, driven by the strategies our marketing & success teams execute.' },
        { stat: '100+', text: '5-star reviews generated per month, a direct result of the seamless tools we create.' }
      ],
      testimonial: {
        quote: `"Because of the tool Ben built, I was able to stop working Saturdays and coach my son's baseball team for the first time. You can't put a price on that."`,
        author: 'John D., JD Roofing'
      }
    },
    theCrew: [
      { name: 'Alex Riley', role: 'Founder & CEO', imageUrl: '../../../chimera_assets/premium_photo-1683121404662-867e305eeb96_ixlib_rb-4_1_chimera_90.webp', bio: 'The Architect. Ensures every tool we build solves a real contractor problem.', why: 'I saw my family struggle. I build so others don\'t have to.' },
      { name: 'Jessica Miller', role: 'Head of Client Success', imageUrl: '../../../chimera_assets/premium_photo-1661775014674-b7872f66127b_ixlib_rb-4_1_chimera_91.webp', bio: 'Your Partner. Makes sure your phone never stops ringing with new leads.', why: 'The moment a client says "we just had our best month ever" is why I\'m here.' },
      { name: 'Ben Carter', role: 'Lead Developer', imageUrl: '../../../chimera_assets/chimera_92_chimera_92.webp', bio: 'The Builder. Crafts the simple, powerful tools that save you 10+ hours a week.', why: 'I love building elegant solutions to complex, real-world problems. This is a builder\'s paradise.' },
      { name: 'Samantha Chen', role: 'Marketing Director', imageUrl: '../../../chimera_assets/chimera_93_chimera_93.webp', bio: 'The Megaphone. Tells the world why you\'re the best contractor for the job.', why: 'I get to tell the stories of hardworking people and help them win. It\'s the most fulfilling marketing job there is.' },
    ],
    codeWeLiveBy: [
      { title: 'We Give a F*ck', description: 'Your wins are our wins. We\'re personally invested in the success of our clients and our teammates.', icon: 'M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z' },
      { title: 'Execute', description: 'Talk is cheap. We are a team of doers. We prioritize action, ship fast, and deliver results. No excuses.', icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z' },
      { title: 'Extreme Ownership', description: 'We take responsibility for our work and our results. When something goes wrong, we don\'t blame; we fix it.', icon: 'M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' },
      { title: 'Stay Human', description: 'We build relationships, not just accounts. We treat our clients and each other with respect, empathy, and a sense of humor.', icon: 'M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z' }
    ],
    workshop: {
      title: 'Our Digital Workshop',
      subtitle: `We're a remote-first team of passionate builders and problem-solvers obsessed with crafting the perfect tools for the trades. Here's how we operate.`,
      tools: ['Slack', 'Notion', 'Figma', 'Linear', 'GitHub', 'Vercel']
    },
    perks: [
      { title: 'Work From Anywhere', description: 'We\'re a 100% remote team. Live and work where you\'re happiest and most productive.', icon: 'M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25' },
      { title: 'Flexible PTO', description: 'We believe in work-life balance. Take the time you need to rest and recharge. We trust you to manage your time.', icon: 'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0h18' },
      { title: 'Top-Tier Benefits', description: 'Comprehensive health, dental, and vision insurance. We\'ve got you and your family covered.', icon: 'M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z' },
      { title: 'Annual Retreats', description: 'We work hard remotely, and we celebrate our wins together in person at amazing locations.', icon: 'M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582' },
      { title: 'Growth Stipend', description: 'We invest in your growth. Get a yearly stipend for books, courses, and conferences to sharpen your skills.', icon: 'M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5' },
      { title: 'Latest Tech', description: 'Get the best tools for the job. A new M-series MacBook Pro and whatever else you need to do your best work.', icon: 'M9 17.25v1.007a3 3 0 0 1-.375 .565L5.25 21.001a3 3 0 0 1-3.535 0L1.16 20.445a3 3 0 0 1 0-3.535l4.215-4.215a3 3 0 0 1 .565-.375h1.007v-1.007a3 3 0 0 1 .375-.565L12.001 5.25a3 3 0 0 1 3.535 0l.555.555a3 3 0 0 1 0 3.535l-4.215 4.215a3 3 0 0 1-.565.375h-1.007v1.007ZM12.001 12l4.215-4.215a1.5 1.5 0 0 0-2.121-2.121L12.001 7.879l-4.215-4.215a1.5 1.5 0 0 0-2.121 2.121L7.879 12.001l-4.215 4.215a1.5 1.5 0 0 0 2.121 2.121L12.001 16.12l4.215 4.215a1.5 1.5 0 0 0 2.121-2.121L16.12 12.001Z' }
    ],
    compensation: {
      title: 'Top Pay for Top Talent',
      description: 'We believe in compensating our team at the top of the market. We don\'t do games or low-ball offers. We make one great offer for the right person. Your success is our success, and you will be rewarded for it.'
    },
    missionBriefings: [
      { id: 'sales', title: 'Sales Associate', department: 'Sales', mission: 'Onboard 10 new contractors this month who desperately need our help, guiding them through the sales process with empathy and expertise.', responsibilities: ['Conducting discovery calls & demos', 'Closing new accounts', 'Managing sales pipeline'], qualifications: ['2+ years in SaaS sales', 'Excellent communication skills', 'A passion for helping small businesses'] },
      { id: 'seo', title: 'Senior SEO Specialist', department: 'Marketing', mission: 'Get 5 of our clients to the #1 spot on Google Maps for their primary keyword, transforming their business by generating a flood of organic leads.', responsibilities: ['Manage client SEO strategies', 'On-page, off-page, and local SEO execution', 'Reporting on performance'], qualifications: ['4+ years in SEO', 'Proven track record in local SEO', 'Expert with tools like Ahrefs, SEMRUSH'] }
    ],
    interviewProcess: {
      title: 'Our Interview Gauntlet',
      steps: [
        { number: '01', title: 'Application Review', description: 'We review every application to find the best fit.' },
        { number: '02', title: 'Initial Screen', description: 'A 30-minute chat to get to know you and your background.' },
        { number: '03', title: 'Role-Specific Interview', description: 'A deeper dive with the team lead to discuss your skills and experience.' },
        { number: '04', title: 'Final "Crew" Chat', description: 'A final conversation to ensure you\'re a great fit for our culture and mission.' }
      ]
    },
    testimonials: [
        { quote: "The best part of working here is seeing our clients succeed. When a contractor tells us they were able to hire a new employee because of the leads we helped them generate, that's the best feeling.", author: 'Jessica Miller, Head of Client Success', imageUrl: '../../../chimera_assets/premium_photo-1661775014674-b7872f66127b_ixlib_rb-4_1_chimera_91.webp' },
        { quote: "We have a culture of 'builders'. We're always looking for ways to improve the product and make it even more valuable for our clients. It's a challenging and rewarding environment.", author: 'Ben Carter, Lead Developer', imageUrl: '../../../chimera_assets/chimera_92_chimera_92.webp' }
    ],
    idealCandidate: {
      title: 'Are You a Builder?',
      description: 'We\'re looking for a specific type of person. A builder. Someone who isn\'t afraid to get their hands dirty, take ownership, and build something that matters.',
      traits: ['Problem-Solver', 'High Ownership', 'Customer-Obsessed', 'Pragmatic', 'Lifelong Learner']
    }
  };
}
