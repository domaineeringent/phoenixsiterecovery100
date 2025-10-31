import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { GeminiService, AnalysisResult } from '../../../services/gemini.service';
import { RouterLink } from '@angular/router';

type GraderState = 'form' | 'loading' | 'results' | 'error';

@Component({
  selector: 'app-ai-website-grader',
  templateUrl: './ai-website-grader.component.html',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class AiWebsiteGraderComponent {
  private fb = inject(FormBuilder);
  private geminiService = inject(GeminiService);

  state = signal<GraderState>('form');
  analysisResult = signal<AnalysisResult | null>(null);
  errorMessage = signal<string | null>(null);

  analysisForm = this.fb.group({
    url: ['', [Validators.required, Validators.pattern('https?://.+')]],
    trade: ['', Validators.required],
    city: ['', Validators.required],
  });

  loadingMessages = [
    'Analyzing mobile-friendliness...',
    'Checking for clear calls-to-action...',
    'Scanning for trust signals like reviews...',
    'Evaluating lead capture forms...',
    'Compiling your personalized report...',
  ];
  currentMessage = signal(this.loadingMessages[0]);

  async getAnalysis() {
    if (this.analysisForm.invalid) {
      return;
    }
    
    this.state.set('loading');
    this.errorMessage.set(null);
    this.startLoadingMessages();

    const { url, trade, city } = this.analysisForm.value;

    try {
      const result = await this.geminiService.analyzeWebsite(url!, trade!, city!);
      this.analysisResult.set(result);
      this.state.set('results');
    } catch (error) {
      this.errorMessage.set(error instanceof Error ? error.message : 'An unknown error occurred.');
      this.state.set('error');
    }
  }

  startLoadingMessages() {
    let index = 0;
    const interval = setInterval(() => {
      index++;
      if (index >= this.loadingMessages.length || this.state() !== 'loading') {
        clearInterval(interval);
      } else {
        this.currentMessage.set(this.loadingMessages[index]);
      }
    }, 2000);
  }

  getScoreColor(score: number): string {
    if (score < 50) return 'text-red-400';
    if (score < 80) return 'text-yellow-400';
    return 'text-green-400';
  }

  getChecklistByCategory(category: string) {
    return this.analysisResult()?.checklist.filter(item => item.category === category) ?? [];
  }

  reset() {
    this.state.set('form');
    this.analysisResult.set(null);
    this.errorMessage.set(null);
    this.analysisForm.reset();
  }
}