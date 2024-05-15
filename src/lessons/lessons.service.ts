import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LessonsService {
  constructor(private prisma: PrismaService) {}

  async createLesson(moduleId: string, createLessonDto: CreateLessonDto) {
    const { title, description, content } = createLessonDto;
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
        description,
        content,
        module: { connect: { id: moduleId } },
      },
    });
    return lesson;
  }

  async getLessonById(id: string) {
    const lesson = await this.prisma.lesson.findUnique({
      where: { id },
    });
    if (!lesson) {
      throw new NotFoundException(`Lesson with id ${id} not found`);
    }
    return lesson;
  }

  async updateLesson(id: string, updateLessonDto: UpdateLessonDto) {
    const lesson = await this.getLessonById(id);
    return this.prisma.lesson.update({
      where: { id },
      data: updateLessonDto,
    });
  }

  async deleteLesson(id: string) {
    const lesson = await this.getLessonById(id);
    return this.prisma.lesson.delete({
      where: { id },
    });
  }
}
