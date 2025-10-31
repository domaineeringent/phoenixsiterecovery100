import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { CountUpDirective } from '../../../directives/count-up.directive';

@Component({
  selector: 'app-cost-of-chaos-calculator',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CountUpDirective],
  templateUrl: './cost-of-chaos-calculator.component.html',
  styleUrl: './cost-of-chaos-calculator.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CostOfChaosCalculatorComponent {
  private fb = inject(FormBuilder);
  
  calculatorForm = this.fb.group({
    avgJobValue: [2500],
    missedCalls: [10], // Per week
    wastedHours: [5]   // Per week
  });

  formValues = toSignal(this.calculatorForm.valueChanges, { initialValue: this.calculatorForm.value });

  lostRevenueFromCalls = computed(() => {
    const missedCallsPerMonth = this.formValues().missedCalls! * 4;
    // Assuming 25% of missed calls could have been jobs
    const lostJobs = missedCallsPerMonth * 0.25;
    return lostJobs * this.formValues().avgJobValue!;
  });

  lostRevenueFromTime = computed(() => {
    const wastedHoursPerMonth = this.formValues().wastedHours! * 4;
    // Assuming time is worth $100/hr
    return wastedHoursPerMonth * 100;
  });

  totalLostRevenue = computed(() => {
    return this.lostRevenueFromCalls() + this.lostRevenueFromTime();
  });

  // Controls the water level in the bucket (0 = full, 100 = empty)
  waterLevel = computed(() => {
    const maxLoss = 50000; // An arbitrary max for visualization scaling
    const level = (this.totalLostRevenue() / maxLoss) * 100;
    return Math.min(level, 100);
  });
}
