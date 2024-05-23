import { Injectable } from '@nestjs/common';
import { GeminiService } from '../gemini/gemini.service';
import { LessonsService } from '../lessons/lessons.service';

@Injectable()
export class QuizService {
  constructor(
    private readonly geminiService: GeminiService,
    private readonly lessonsService: LessonsService,
  ) {}

  async generateQuizQuestions(lessonId: string) {
    const lesson = await this.lessonsService.getLessonById(lessonId);
    const prompt = `Generate a quiz with 5 open-ended questions of varying difficulty levels based on ${lesson.content}. Return a list of questions formatted exactly like this: {question: question answer: answer}---{question: question = answer: answer}. Do not use line break anywhere in your response.`;
    let response;
    try {
      response = await this.geminiService.generateContent(prompt);
    } catch (error) {
      throw new Error('Error generating content with AI');
    }
    const stringArray = response.response.candidates[0].content.parts[0].text.split('---');
    console.log("stringArray", stringArray);
    const objectArray = stringArray.map(item => {
      const properties = item.split('answer:');
      return {
        question: properties[0].replace('{', '').replace('question:', '').trim(),
        answer: properties[1].replace('}', '').trim()
      };
    });
    return objectArray;
  }
}
