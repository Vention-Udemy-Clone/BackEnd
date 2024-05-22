import {
  GenerateContentResult,
  GoogleGenerativeAI,
} from '@google/generative-ai';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GeminiService {
  private genAI: GoogleGenerativeAI;

  constructor() {
    const apiKey = process.env.GEMINI_API_KEY;
    this.genAI = new GoogleGenerativeAI(apiKey);
  }

  async generateContent(prompt: string): Promise<GenerateContentResult> {
    const model = this.genAI.getGenerativeModel({
      model: 'gemini-pro',
    });

    return model.generateContent(prompt);
  }
}
