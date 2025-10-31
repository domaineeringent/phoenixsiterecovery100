import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterOutlet, Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { LiveChatWidgetComponent } from './components/shared/live-chat-widget/live-chat-widget.component';
import { SocialProofComponent } from './components/shared/social-proof/social-proof.component';
import { ExitIntentModalComponent } from './components/shared/exit-intent-modal/exit-intent-modal.component';
import { LoadingBarComponent } from './components/shared/loading-bar/loading-bar.component';
import { PreloadingService } from './services/preloading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, LiveChatWidgetComponent, SocialProofComponent, ExitIntentModalComponent, LoadingBarComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private router = inject(Router);
  private preloadingService = inject(PreloadingService);

  loading = signal(false);
  private loadingTimeout: any;
  private isFirstNavigation = true;

  constructor() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        // On a new navigation, always show the loading bar and clear any pending "hide" timers.
        clearTimeout(this.loadingTimeout);
        this.loading.set(true);
      } else if (event instanceof NavigationEnd) {
        // When a navigation ends successfully, schedule hiding the bar.
        this.loadingTimeout = setTimeout(() => this.loading.set(false), 300);

        // After the first successful navigation, trigger background preloading of other hero images.
        if (this.isFirstNavigation) {
            this.isFirstNavigation = false;
            this.preloadingService.preloadHeroImages();
        }
      } else if (event instanceof NavigationError || event instanceof NavigationCancel) {
        // When a navigation definitively ends (in error or cancelled), schedule the loading bar to hide.
        this.loadingTimeout = setTimeout(() => this.loading.set(false), 300);
      }
    });
  }
}
