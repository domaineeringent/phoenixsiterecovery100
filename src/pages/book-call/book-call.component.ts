import { ChangeDetectionStrategy, Component, signal, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-call',
  templateUrl: './book-call.component.html',
  standalone: true,
  imports: [CommonModule, AnimateOnScrollDirective, ReactiveFormsModule, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookCallComponent implements OnInit {
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);

  submissionState = signal<'idle' | 'submitting' | 'success' | 'error'>('idle');

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    websiteUrl: ['', [Validators.required, Validators.pattern('https?://.+')]],
    service: ['$99 SSL Security Fix', Validators.required],
    description: ['', Validators.required]
  });

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      const service = params.get('service');
      if (service) {
        this.contactForm.patchValue({ service });
      }
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    this.submissionState.set('submitting');
    console.log('Form Submitted:', this.contactForm.value);

    // Simulate network request
    setTimeout(() => {
      // To test error state, uncomment the following line
      // this.submissionState.set('error');
      this.submissionState.set('success');
    }, 1500);
  }
}