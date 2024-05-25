import { ChatSession, GenerateContentResult } from '@google/generative-ai';
import { Injectable } from '@nestjs/common';
import { geminiAI, startChat } from 'src/utils/gemini';

@Injectable()
export class GeminiService {
  constructor() {}
  private geminiChat: ChatSession | null = null;

  async generateContent(prompt: string): Promise<GenerateContentResult> {
    const content = await geminiAI(prompt);

    return content;
  }

  async lessonChat(prompt: string | string[], isNewLesson: boolean) {
    if (!this.geminiChat || isNewLesson) this.geminiChat = startChat();

    await this.geminiChat.sendMessage(prompt);
    const result = await this.geminiChat.getHistory();

    return result;
  }
}
