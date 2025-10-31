import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AboutComponent } from './pages/about/about.component';
import { TradesComponent } from './pages/trades/trades.component';
import { ProcessComponent } from './pages/process/process.component';
import { CareersComponent } from './pages/careers/careers.component';
import { PartnersComponent } from './pages/partners/partners.component';
import { PrintingComponent } from './pages/printing/printing.component';
import { BookCallComponent } from './pages/book-call/book-call.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TheDifferenceComponent } from './pages/the-difference/the-difference.component';
import { ResourceHubComponent } from './pages/resources/resource-hub.component';
import { BlogPostComponent } from './pages/resources/blog-post.component';
import { LoginComponent } from './pages/login/login.component';

// Feature Pages
import { FunctionalWebsiteComponent } from './pages/features/functional-website/functional-website.component';
import { AllInOneInboxComponent } from './pages/features/all-in-one-inbox/all-in-one-inbox.component';
import { ReviewFunnelComponent } from './pages/features/review-funnel/review-funnel.component';
import { MissedCallTextBackComponent } from './pages/features/missed-call-text-back/missed-call-text-back.component';
import { LocalSeoComponent } from './pages/features/local-seo/local-seo.component';
import { BusinessPhoneComponent } from './pages/features/business-phone/business-phone.component';
import { OneClickMarketingComponent } from './pages/features/one-click-marketing/one-click-marketing.component';
import { AutomatedLeadFollowUpComponent } from './pages/features/automated-lead-follow-up/automated-lead-follow-up.component';

export const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'our-work', component: PortfolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'trades-we-serve', component: TradesComponent },
  { path: 'our-process', component: ProcessComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'partners', component: PartnersComponent },
  { path: 'printing-services', redirectTo: 'features/printing-services', pathMatch: 'full' },
  { path: 'book-a-call', component: BookCallComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'the-phoenix-recovery-difference', component: TheDifferenceComponent },
  { path: 'resources', component: ResourceHubComponent },
  { path: 'resources/:slug', component: BlogPostComponent },
  { 
    path: 'features',
    children: [
      { path: 'functional-website', component: FunctionalWebsiteComponent },
      { path: 'all-in-one-inbox', component: AllInOneInboxComponent },
      { path: '5-star-review-funnel', component: ReviewFunnelComponent },
      { path: 'missed-call-text-back', component: MissedCallTextBackComponent },
      { path: 'local-seo', component: LocalSeoComponent },
      { path: 'printing-services', component: PrintingComponent },
      { path: 'business-phone', component: BusinessPhoneComponent },
      { path: 'one-click-marketing-campaigns', component: OneClickMarketingComponent },
      { path: 'automated-lead-follow-up', component: AutomatedLeadFollowUpComponent },
    ]
  },
  { path: '**', component: NotFoundComponent }
];