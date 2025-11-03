import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CtaSectionComponent } from '../../components/shared/cta-section/cta-section.component';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [
    RouterLink, 
    CtaSectionComponent, 
    AnimateOnScrollDirective, 
    CommonModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  hero = {
    title: 'Your Website Is Broken. <span class="text-amber-400">We Fix It. Fast.</span>',
    subtitle: 'Critical errors? Security warnings? Get a one-time, emergency fix from an expert. No retainers, no BS. Just a fast, professional repair.'
  };

  packages = [
    {
      name: '$99 SSL Security Fix',
      description: 'We\'ll remove the "Not Secure" warning from your site in under an hour. One-time fee.',
      features: ['Install & configure SSL certificate', 'Force HTTPS across your site', 'Eliminate browser security warnings', 'Boosts visitor trust & SEO'],
      cta: 'Fix My Security'
    },
    {
      name: '$149 Critical Error Repair',
      description: 'Have a broken contact form, a 404 error, or a plugin issue? We\'ll diagnose and fix the single most critical error. One-time fee.',
      features: ['Diagnose one critical website error', 'Repair broken contact forms', 'Fix plugin conflicts or 404s', 'Get your site functional again'],
      cta: 'Repair My Site'
    }
  ];

  guarantee = {
    title: 'Our "No-BS" Guarantee',
    text: 'We fix the specific problem you hired us for, or you don\'t pay. It\'s that simple.'
  };
}