import { Injectable, NotFoundException } from '@nestjs/common';
import { Lesson } from '@prisma/client';
import { GlobalException } from 'src/exceptions/global.exception';
import { GeminiService } from 'src/gemini/gemini.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { LessonContext } from 'src/shared/types/auth-user.types';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { generateLessonDto } from './dto/generate.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';

@Injectable()
export class LessonsService {
  constructor(
    private prisma: PrismaService,
    private readonly gemini: GeminiService,
  ) {}

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

  async generateForLesson(body: generateLessonDto) {
    try {
      const prompt = `You are experienced contend maker.
      Your goal to generate a lesson ${body.context.toString().toLocaleLowerCase()} for a lesson titled "${body.title}".
      ${body.context === LessonContext.OVERVIEW ? 'The overview should be designed to help students learn the basics of the topic and build a strong foundation.' : 'The content should shortly cover the topic and provide a brief explanation.'}
      Provide response as plain text, no any styling required. Do not use Markdown or HTML. Do not use '**' or '__' for bold or italic.
      No Heading or Title required.
      As it is plain text, for styling use symbols like '*', '-' and other. But do not use Markdown styling format.
      The ${body.context.toString().toLocaleLowerCase()} should be around ${body.words} words.`;

      const data = await this.gemini.generateContent(prompt);
      return {
        success: true,
        data: {
          text: data.response.candidates[0].content.parts[0].text,
        },
      };
    } catch (error) {
      throw new GlobalException('Error generating course description', error);
    }
  }
}
