import { ChangeDetectionStrategy, Component, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Notification {
  trade: string;
  city: string;
  action: 'analyzed their website' | 'booked a demo' | 'got a 5-star review';
  imageUrl: string;
}

@Component({
  selector: 'app-social-proof',
  templateUrl: './social-proof.component.html',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class SocialProofComponent implements OnInit, OnDestroy {
  notifications: Notification[] = [
    { trade: 'Roofer', city: 'Dallas, TX', action: 'analyzed their website', imageUrl: 'https://picsum.photos/seed/analyze/100/100' },
    { trade: 'Plumber', city: 'Miami, FL', action: 'booked a demo', imageUrl: 'https://picsum.photos/seed/demo/100/100' },
    { trade: 'Landscaper', city: 'Denver, CO', action: 'got a 5-star review', imageUrl: 'https://picsum.photos/seed/review/100/100' },
    { trade: 'Electrician', city: 'Phoenix, AZ', action: 'analyzed their website', imageUrl: 'https://picsum.photos/seed/analyze2/100/100' }
  ];

  currentNotification = signal<Notification | null>(null);
  isVisible = signal(false);
  private intervalId: any;

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  
  ngOnInit(): void {
    setTimeout(() => {
      this.showNextNotification();
      this.intervalId = setInterval(() => this.showNextNotification(), 12000);
    }, 8000);
  }

  showNextNotification() {
    this.isVisible.set(false);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * this.notifications.length);
      this.currentNotification.set(this.notifications[randomIndex]);
      this.isVisible.set(true);
      setTimeout(() => this.isVisible.set(false), 5000);
    }, 500);
  }
}