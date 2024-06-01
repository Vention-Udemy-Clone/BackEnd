import { BadRequestException, Injectable, NotFoundException, ServiceUnavailableException } from '@nestjs/common';
import { GeminiService } from '../gemini/gemini.service';
import { LessonsService } from '../lessons/lessons.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class QuizService {
  constructor(
    private readonly geminiService: GeminiService,
    private readonly lessonsService: LessonsService,
    private readonly prismaService: PrismaService
  ) {}

  async generateQuizQuestions(lessonId: string) {
    const lesson = await this.prismaService.lesson.findUnique({
      where: { id: lessonId },
    });
    if (!lesson) {
      throw new NotFoundException('Lesson not found');
    }
    const prompt = `Generate a quiz with 5 open-ended questions of intermediate difficulty levels based on ${lesson.content}. Return a list of questions formatted exactly like this: {question: question answer: answer}---{question: question answer: answer}. Do not use line breaks or any other formatting except provided in this prompt.`;
    let response;
    try {
      response = await this.geminiService.generateContent(prompt);
    } catch (error) {
      throw new ServiceUnavailableException('Error generating content with AI');
    }
    const quizResponse =
      response.response.text().split('---');
    if (!quizResponse) {
      throw new BadRequestException('Error generating quiz questions');
    }
    const quizObject = quizResponse.map((item) => {
      const properties = item.split('answer:');
      return {
        question: properties[0]
          ?.replace('{', '')
          .replace('question:', '')
          .trim(),
        answer: properties[1]?.replace('}', '').trim(),
      };
    });
    return quizObject;
  }
}
