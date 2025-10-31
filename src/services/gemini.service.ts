import { Injectable } from '@angular/core';
import { GoogleGenAI, Type } from '@google/genai';

export interface AnalysisResult {
  overallScore: number;
  summary: string;
  checklist: ChecklistItem[];
}

export interface ChecklistItem {
  category: string;
  text: string;
  pass: boolean;
  commentary: string;
}

@Injectable({
  providedIn: 'root',
})
export class GeminiService {
  private ai: GoogleGenAI | null = null;

  constructor() {
    // This code needs to be environment-safe. 'process' is not defined in the browser.
    // We check for its existence before trying to access it.
    // The API key should be injected via a build-time environment variable.
    let apiKey: string | undefined;
    if (typeof process !== 'undefined' && process.env) {
      apiKey = process.env.API_KEY;
    }

    if (!apiKey) {
      console.warn(
        'Gemini Service is not initialized: API_KEY is not available in this environment. The AI Website Grader will not function.'
      );
    } else {
      this.ai = new GoogleGenAI({ apiKey });
    }
  }

  async analyzeWebsite(
    url: string,
    trade: string,
    city: string
  ): Promise<AnalysisResult> {
    if (!this.ai) {
      console.error('GeminiService.analyzeWebsite called but the service is not initialized.');
      throw new Error('AI service is not configured. Please ensure the API Key is set.');
    }

    const prompt = `Analyze the fictional website '${url}' for a '${trade}' business in '${city}'. Based on best practices for contractor websites, generate an audit report. Focus on lead capture, trust signals, and mobile experience.`;
    
    const responseSchema = {
      type: Type.OBJECT,
      properties: {
        overallScore: {
          type: Type.INTEGER,
          description: 'A score from 0 to 100, where 100 is perfect. Base this on how many checks passed.',
        },
        summary: {
          type: Type.STRING,
          description: 'A 2-3 sentence summary of the website\'s strengths and main weaknesses from a lead-generation perspective.',
        },
        checklist: {
          type: Type.ARRAY,
          description: 'An array of audit checks. MUST include at least 2 checks for each of the 3 categories.',
          items: {
            type: Type.OBJECT,
            properties: {
              category: {
                type: Type.STRING,
                description: 'The category of the check. Must be one of: "Lead Capture", "Trust & Authority", or "Mobile Experience".',
              },
              text: {
                type: Type.STRING,
                description: 'The specific check being performed, e.g., "Prominent click-to-call phone number."',
              },
              pass: {
                type: Type.BOOLEAN,
                description: 'True if the site likely passes this check, false otherwise. Be critical; most sites will have flaws.',
              },
              commentary: {
                type: Type.STRING,
                description: 'A short, 1-sentence explanation of why this is important or what was found. This should be helpful and slightly critical, pointing out the business value.',
              },
            },
            required: ['category', 'text', 'pass', 'commentary'],
          },
        },
      },
      required: ['overallScore', 'summary', 'checklist'],
    };

    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
          responseSchema: responseSchema,
        },
      });

      const jsonString = response.text.trim();
      const result = JSON.parse(jsonString);

      // Basic validation to ensure the result matches the expected structure
      if (
        typeof result.overallScore !== 'number' ||
        typeof result.summary !== 'string' ||
        !Array.isArray(result.checklist)
      ) {
        throw new Error('Invalid response structure from Gemini API.');
      }

      return result as AnalysisResult;

    } catch (error) {
      console.error('Error calling Gemini API:', error);
      throw new Error('Failed to get analysis from AI. Please try again.');
    }
  }
}