import { Injectable, signal, OnDestroy } from '@angular/core';
import { fromEvent, throttleTime } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExitIntentService implements OnDestroy {
  showModal = signal(false);
  private triggered = false;
  private subscription: any;

  constructor() {
    if (typeof document !== 'undefined') {
        this.subscription = fromEvent(document, 'mouseout')
        .pipe(throttleTime(100))
        .subscribe((e: Event) => this.handleMouseOut(e as MouseEvent));
    }
  }
  
  private handleMouseOut(e: MouseEvent): void {
    if (this.triggered || this.showModal()) return;

    // Check if the mouse is leaving the top of the viewport
    if (e.clientY <= 0) {
      this.triggered = true;
      this.showModal.set(true);
    }
  }

  closeModal(): void {
    this.showModal.set(false);
  }
  
  ngOnDestroy(): void {
      if (this.subscription) {
          this.subscription.unsubscribe();
      }
  }
}