import { Injectable, NotFoundException } from '@nestjs/common';
import { Lesson } from '@prisma/client';
import { GlobalException } from 'src/exceptions/global.exception';
import { GeminiService } from 'src/gemini/gemini.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { formatChatHistory } from 'src/utils/formatChatHistory';

@Injectable()
export class LessonsService {
  constructor(
    private prisma: PrismaService,
    private readonly gemini: GeminiService,
  ) {}
  private lessonId: string | null = null;

  async createLesson(moduleId: string, createLessonDto: CreateLessonDto) {
    try {
      const module = await this.prisma.module.findUnique({
        where: { id: moduleId },
      });
      if (!module) {
        throw new NotFoundException(`Module with id ${moduleId} not found`);
      }
      const lesson = await this.prisma.lesson.create({
        data: {
          ...createLessonDto,
          module: { connect: { id: moduleId } },
        },
      });
      return lesson;
    } catch (error) {
      throw new GlobalException('Failed to create lesson', error.message);
    }
  }

  async getLessonById(id: string): Promise<Lesson> {
    try {
      const lesson = await this.prisma.lesson.findUnique({
        where: { id },
        include: {
          module: {
            select: {
              title: true,
              id: true,
            },
          },
        },
      });
      if (!lesson) {
        throw new NotFoundException(`Lesson with id ${id} not found`);
      }
      return lesson;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new GlobalException('Failed to get lesson', error.message);
    }
  }

  async updateLesson(id: string, updateLessonDto: UpdateLessonDto) {
    await this.getLessonById(id);
    try {
      const updatedLesson = await this.prisma.lesson.update({
        where: { id },
        data: updateLessonDto,
      });
      return updatedLesson;
    } catch (error) {
      throw new GlobalException('Failed to update lesson', error.message);
    }
  }

  async deleteLesson(id: string) {
    await this.getLessonById(id);
    try {
      const deletedLesson = await this.prisma.lesson.delete({
        where: { id },
      });
      return deletedLesson;
    } catch (error) {
      throw new GlobalException('Failed to delete lesson', error.message);
    }
  }

  async lessonChat(lessonId: string, question: string) {
    let prompt: string | string[];
    const isNewLesson = this.lessonId !== lessonId;

    if (isNewLesson) {
      this.lessonId = lessonId;

      const lesson = await this.getLessonById(lessonId);

      const configPrompt = `Below i will provide you title, overview and content of the lesson /n.
      You need to answer the questions based on the content of the lesson. /n
      Before answering for each of the question, check whether the context of the question is closely related to the lesson or not.
      If not don't answer the question.  /n
      Exception: Greetings. /n
      Each answer should be in text format and not more than 200 words. /n 
      Title: ${lesson.title} /n
      Overview: ${lesson.overview} /n
      Content: ${lesson.content}`;

      prompt = [configPrompt, question];
    } else {
      prompt = question;
    }

    try {
      const result = await this.gemini.lessonChat(prompt, isNewLesson);
      const history = formatChatHistory(result);

      return { success: true, history };
    } catch (error) {
      throw new GlobalException('Failed to get chat', error.message);
    }
  }
}
