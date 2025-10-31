import { ChangeDetectionStrategy, Component, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-live-chat-widget',
  templateUrl: './live-chat-widget.component.html',
  imports: [CommonModule, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class LiveChatWidgetComponent implements OnInit, OnDestroy {
  isOpen = signal(false);
  showTyping = signal(false);
  showMessage = signal(false);
  private timers: any[] = [];

  ngOnDestroy(): void {
    this.timers.forEach(timer => clearTimeout(timer));
  }

  ngOnInit(): void {
    // Initial pulse animation trigger
    const pulseTimer = setTimeout(() => {
        // logic if needed
    }, 5000);
    this.timers.push(pulseTimer);
  }
  
  toggleWidget() {
    this.isOpen.update(value => !value);
    if (this.isOpen()) {
      this.startChatFlow();
    } else {
      this.resetChatFlow();
    }
  }

  startChatFlow() {
    this.resetChatFlow();
    const typingTimer = setTimeout(() => {
      this.showTyping.set(true);
      const messageTimer = setTimeout(() => {
        this.showTyping.set(false);
        this.showMessage.set(true);
      }, 1500);
      this.timers.push(messageTimer);
    }, 500);
    this.timers.push(typingTimer);
  }

  resetChatFlow() {
    this.timers.forEach(timer => clearTimeout(timer));
    this.timers = [];
    this.showTyping.set(false);
    this.showMessage.set(false);
  }
}