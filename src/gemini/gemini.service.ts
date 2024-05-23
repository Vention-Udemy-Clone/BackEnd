import { GenerateContentResult } from '@google/generative-ai';
import { Injectable } from '@nestjs/common';
import { LessonsService } from 'src/lessons/lessons.service';
import { geminiAI } from 'src/utils/gemini';

@Injectable()
export class GeminiService {
  constructor(private lessonsService: LessonsService) {}

  async generateContent(prompt: string): Promise<GenerateContentResult> {
    const content = await geminiAI(prompt);

    return content;
  }

  async lessonChat(
    prompt: string,
    lessonId: string,
  ): Promise<GenerateContentResult> {
    const lesson = await this.lessonsService.getLessonById(lessonId);
    console.log(lesson);
    const content = await geminiAI(prompt);

    return content;
  }
}
