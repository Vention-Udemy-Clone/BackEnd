import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { GlobalException } from 'src/exceptions/global.exception';

@Injectable()
export class LessonsService {
  constructor(private prisma: PrismaService) {}

  async createLesson(moduleId: string, createLessonDto: CreateLessonDto) {
    try {
      const { title, content } = createLessonDto;
      const module = await this.prisma.module.findUnique({
        where: { id: moduleId },
        include: { Lesson: true },
      });
      if (!module) {
        throw new NotFoundException(`Module with id ${moduleId} not found`);
      }
      const lesson = await this.prisma.lesson.create({
        data: {
          title,
          content,
          module: { connect: { id: moduleId } },
        },
      });
      return lesson;
    } catch (error) {
        throw new GlobalException("Failed to create lesson", error.message);  }
  }

  async getLessonById(id: string) {
    try {
      const lesson = await this.prisma.lesson.findUnique({
        where: { id },
      });
      if (!lesson) {
        throw new NotFoundException(`Lesson with id ${id} not found`);
      }
      return lesson;
    } catch (error) {
      if (error instanceof NotFoundException) {
          throw error;
        }
      throw new GlobalException("Failed to get lesson", error.message)
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
      throw new GlobalException("Failed to update lesson", error.message);
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
      throw new GlobalException("Failed to delete lesson", error.message);
    }
  }
}
