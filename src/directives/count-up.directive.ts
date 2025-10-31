import { Directive, ElementRef, inject, Input, OnInit, OnDestroy, signal, effect } from '@angular/core';

@Directive({
  selector: '[appCountUp]',
  standalone: true,
})
export class CountUpDirective implements OnInit, OnDestroy {
  private el = inject(ElementRef);
  private observer: IntersectionObserver | undefined;
  private hasAnimated = false;
  
  @Input('appCountUp') endValue: number = 0;
  @Input() duration: number = 1500;
  @Input() startValue: number = 0;
  
  private currentNumber = signal(0);
  private effectRef = effect(() => {
    this.el.nativeElement.textContent = Math.round(this.currentNumber()).toLocaleString();
  });

  ngOnInit(): void {
    if (typeof IntersectionObserver !== 'undefined') {
      this.observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.hasAnimated) {
            this.hasAnimated = true;
            this.animate();
            this.observer?.unobserve(this.el.nativeElement);
          }
        });
      }, { threshold: 0.5 });
      this.observer.observe(this.el.nativeElement);
    } else {
        // Fallback for environments without IntersectionObserver
        this.currentNumber.set(this.endValue);
    }
  }

  animate() {
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) {
        startTime = timestamp;
      }
      const progress = Math.min((timestamp - startTime) / this.duration, 1);
      const easedProgress = this.easeOutCubic(progress);
      const value = easedProgress * (this.endValue - this.startValue) + this.startValue;
      this.currentNumber.set(value);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        this.currentNumber.set(this.endValue);
      }
    };
    requestAnimationFrame(step);
  }

  easeOutCubic(t: number): number {
    return (--t) * t * t + 1;
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
    this.effectRef.destroy();
  }
}
