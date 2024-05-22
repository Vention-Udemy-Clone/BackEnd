import { GenerateContentResult } from '@google/generative-ai';
import { Injectable } from '@nestjs/common';
import { geminiAI } from 'src/utils/gemini';

@Injectable()
export class GeminiService {
  constructor() {}

  async generateContent(prompt: string): Promise<GenerateContentResult> {
    const content = await geminiAI(prompt);

    return content;
  }
}
