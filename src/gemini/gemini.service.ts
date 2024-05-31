import { ChatSession, GenerateContentResult } from '@google/generative-ai';
import { Injectable } from '@nestjs/common';
import { GlobalException } from 'src/exceptions/global.exception';
import { geminiAI, startChat, geminiAIPro } from 'src/utils/gemini';

@Injectable()
export class GeminiService {
  constructor() {}
  private geminiChat: ChatSession | null = null;

  async generateContent(prompt: string): Promise<GenerateContentResult> {
    try {
      const content = await geminiAI(prompt);

      return content;
    } catch (error) {
      throw new GlobalException('Error generating content', error);
    }
  }

  async generateProContent(prompt: string): Promise<GenerateContentResult> {
    try {
      const content = await geminiAIPro(prompt);

      return content;
    } catch (error) {
      throw new GlobalException('Error generating content', error);
    }
  }

  async lessonChat(prompt: string | string[], isNewLesson: boolean) {
    try {
      if (!this.geminiChat || isNewLesson) this.geminiChat = startChat();

      await this.geminiChat.sendMessage(prompt);
      const result = await this.geminiChat.getHistory();

      return result;
    } catch (error) {
      throw new GlobalException('Error creating chat', error);
    }
  }
}
