import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-roi-calculator',
  templateUrl: './roi-calculator.component.html',
  imports: [CommonModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class RoiCalculatorComponent {
  private fb = inject(FormBuilder);
  
  calculatorForm = this.fb.group({
    avgJobValue: [2500],
    closeRate: [25],
    missedCalls: [10]
  });

  formValues = toSignal(this.calculatorForm.valueChanges, { initialValue: this.calculatorForm.value });

  // Assuming Stone Systems helps capture 30% more leads and saves 2 missed calls per week
  projectedLeadsCaptured = computed(() => Math.round(this.formValues().missedCalls! * 0.8)); // Capturing 80% of missed calls
  
  projectedNewJobs = computed(() => {
    const newLeads = this.projectedLeadsCaptured();
    const closeRate = this.formValues().closeRate! / 100;
    return Math.round(newLeads * closeRate);
  });

  monthlyRoi = computed(() => {
    const newJobs = this.projectedNewJobs();
    const avgValue = this.formValues().avgJobValue!;
    return newJobs * avgValue;
  });

}