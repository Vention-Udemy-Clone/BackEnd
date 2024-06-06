import {
  BadRequestException,
  Injectable,
  NotFoundException,
  ServiceUnavailableException,
} from '@nestjs/common';
import { GeminiService } from '../gemini/gemini.service';
import { LessonsService } from '../lessons/lessons.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateQuizDto } from './dto/create-quiz.dto';

@Injectable()
export class QuizService {
  constructor(
    private readonly geminiService: GeminiService,
    private readonly lessonsService: LessonsService,
    private readonly prismaService: PrismaService,
  ) {}

  async generate(lessonId: string) {
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
    const quizResponse = response.response.text().split('---');
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

  async create(lessonId: string, quizQuestions: CreateQuizDto) {
    try {
      const lesson = await this.prismaService.lesson.findUnique({
        where: { id: lessonId },
      });

      if (!lesson) {
        throw new NotFoundException('Lesson not found');
      }

      const quiz = await this.prismaService.quiz.create({
        data: {
          lessonId,
          content: {
            create: quizQuestions.questions.map((question) => ({
              question: question.question,
              answer: question.answer,
            })),
          },
        },
        include: { content: true },
      });

      return quiz;
    } catch (error) {
      throw new BadRequestException('Error creating quiz', error);
    }
  }

  async findOne(lessonId: string) {
    try {
      const quiz = await this.prismaService.quiz.findFirst({
        where: { lessonId },
        include: { content: true },
      });

      if (!quiz) {
        throw new NotFoundException('Quiz not found');
      }

      return quiz;
    } catch (error) {
      throw new BadRequestException('Error finding quiz', error);
    }
  }

  async update(lessonId: string, quizQuestions: CreateQuizDto) {
    try {
      const lesson = await this.prismaService.lesson.findUnique({
        where: { id: lessonId },
      });

      if (!lesson) {
        throw new NotFoundException('Lesson not found');
      }

      const quiz = await this.prismaService.quiz.update({
        where: { lessonId },
        data: {
          content: {
            deleteMany: {},
            create: quizQuestions.questions.map((question) => ({
              question: question.question,
              answer: question.answer,
            })),
          },
        },
        include: { content: true },
      });

      return quiz;
    } catch (error) {
      throw new BadRequestException('Error updating quiz', error);
    }
  }

  async delete(lessonId: string) {
    try {
      const lesson = await this.prismaService.lesson.findUnique({
        where: { id: lessonId },
      });

      if (!lesson) {
        throw new NotFoundException('Lesson not found');
      }

      const quiz = await this.findOne(lessonId);

      await this.prismaService.quiz_Question.deleteMany({
        where: { quizId: quiz.id },
      });

      const deletedQuiz = await this.prismaService.quiz.delete({
        where: { lessonId },
        include: { content: true },
      });

      return deletedQuiz;
    } catch (error) {
      throw new BadRequestException('Error deleting quiz', error);
    }
  }
}
