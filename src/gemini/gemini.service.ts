import { GenerateContentResult } from '@google/generative-ai';
import { Injectable } from '@nestjs/common';
import { GlobalException } from 'src/exceptions/global.exception';
import { geminiAI } from 'src/utils/gemini';

@Injectable()
export class GeminiService {
  constructor() {}

  async generateContent(prompt: string): Promise<GenerateContentResult> {
    try {
      const content = await geminiAI(prompt);

      return content;
    } catch (error) {
      throw new GlobalException('Error generating content', error);
    }
  }
}
