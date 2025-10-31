import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

interface NavLink {
  path: string;
  label: string;
  description: string;
  icon?: string;
}

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  isMobileMenuOpen = signal(false);
  openMegaMenu = signal<string | null>(null);
  private menuCloseTimer: any;

  features: NavLink[] = [
    {
      path: '/features/functional-website',
      label: 'Functional Websites',
      description: 'Your digital storefront that turns visitors into customers.',
      icon: 'M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582',
    },
    {
      path: '/features/all-in-one-inbox',
      label: 'All-In-One Inbox',
      description: 'All your customer conversations in one simple feed.',
      icon: 'M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z',
    },
    {
      path: '/features/5-star-review-funnel',
      label: '5-Star Review Funnel',
      description: 'Automate your review generation process on Google.',
      icon: 'M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345h5.518a.562.562 0 0 1 .321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988h5.518a.563.563 0 0 0 .475-.345L11.48 3.5Z',
    },
    {
      path: '/features/missed-call-text-back',
      label: 'Missed Call Text Back',
      description: 'Instantly text back missed calls so you never lose a lead.',
      icon: 'M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3',
    },
    {
        path: '/features/local-seo',
        label: 'Local SEO',
        description: 'Get found by customers searching on Google.',
        icon: 'M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z',
    },
    {
        path: '/features/printing-services',
        label: 'Printing Services',
        description: 'Bridge the physical and digital with QR code review cards.',
        icon: 'M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0',
    }
  ];

  whyUsLinks: NavLink[] = [
    { path: '/the-phoenix-recovery-difference', label: 'The Difference', description: 'See what sets us apart from the rest.', icon: 'M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' },
    { path: '/our-process', label: 'Our Process', description: 'A transparent, predictable path to success.', icon: 'M3.75 3v11.25A2.25 2.25 0 006 16.5h12M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-12a2.25 2.25 0 01-2.25-2.25V3m16.5 0v1.5m0-1.5v-1.5m0 0h-1.5m-13.5 0h-1.5' },
    { path: '/our-work', label: 'Our Work', description: 'See the results we\'ve delivered for contractors.', icon: 'M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z' },
    { path: '/testimonials', label: 'Testimonials', description: 'Hear directly from our successful clients.', icon: 'M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z' },
  ];

  companyLinks: NavLink[] = [
    { path: '/about', label: 'About Us', description: 'Our mission, our story, and our team.', icon: 'M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.286 2.72a3 3 0 01-4.682-2.72 9.094 9.094 0 013.741-.479m7.286 2.72-.777 2.721A11.025 11.025 0 0112 21a11.025 11.025 0 01-4.473-1.472l-.777-2.721m7.286 2.72-3.64-1.092' },
    { path: '/careers', label: 'Careers', description: 'Join our mission to empower contractors.', icon: 'M20.25 14.15v4.098a2.25 2.25 0 01-2.25 2.25H5.998a2.25 2.25 0 01-2.25-2.25v-4.098m16.5 0a2.25 2.25 0 00-2.25-2.25H5.998a2.25 2.25 0 00-2.25 2.25m16.5 0v-2.25A2.25 2.25 0 0018 9.75h-1.5a2.25 2.25 0 00-2.25 2.25v2.25m-7.5 0v-2.25A2.25 2.25 0 006 9.75H4.5A2.25 2.25 0 002.25 12v2.25' },
    { path: '/partners', label: 'Partners', description: 'The world-class tech behind our platform.', icon: 'M13.5 2.25L15 3.75l-2.25 2.25L15 8.25l-1.5 1.5L11.25 7.5 9 9.75l1.5 1.5L12.75 9 15 11.25l-1.5 1.5L11.25 10.5 9 12.75l1.5 1.5L12.75 12 15 14.25l-1.5 1.5L11.25 13.5 9 15.75l1.5 1.5L12.75 15 15 17.25l-1.5 1.5L11.25 16.5 9 18.75l1.5 1.5L12.75 18 15 20.25l-1.5 1.5L11.25 19.5 9 21.75l-1.5-1.5L9.75 18 7.5 15.75l1.5-1.5L11.25 16.5 9 14.25l1.5-1.5L12.75 15 15 12.75l-1.5-1.5L11.25 9 9 6.75l1.5-1.5L12.75 7.5 15 5.25l-1.5-1.5L11.25 6 9 3.75 7.5 2.25 9 3.75l2.25-2.25L9 3.75 7.5 5.25 9 6.75 6.75 9 9 11.25 6.75 13.5 9 15.75 6.75 18 9 20.25l-1.5 1.5L5.25 18l-1.5-1.5L6 14.25 3.75 12 6 9.75 3.75 7.5 6 5.25 3.75 3 2.25 4.5 4.5 6.75 2.25 9l1.5 1.5L6 8.25l2.25 2.25L6 12.75l-1.5 1.5L6.75 15l2.25-2.25L11.25 15l-1.5 1.5L12 18.75l2.25-2.25L12 14.25l-1.5-1.5L12.75 10.5l2.25-2.25L12.75 6z' },
    { path: '/contact', label: 'Contact Us', description: 'Get in touch with our team.', icon: 'M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75' },
  ];

  handleMenuEnter(menuKey: string) {
    clearTimeout(this.menuCloseTimer);
    this.openMegaMenu.set(menuKey);
  }

  handleMenuLeave() {
    this.menuCloseTimer = setTimeout(() => {
        this.openMegaMenu.set(null);
    }, 200);
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(value => !value);
  }
  
  closeAllMenus() {
    this.isMobileMenuOpen.set(false);
    this.openMegaMenu.set(null);
  }
}
