import { Injectable, NotFoundException } from '@nestjs/common';
import { GlobalException } from 'src/exceptions/global.exception';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';
import { Module } from './entities/module.entity';

@Injectable()
export class ModulesService {
  constructor(private prisma: PrismaService) {}

  async createModule(courseId: string, createModuleDto: CreateModuleDto) {
    try {
      const { title } = createModuleDto;
      const course = await this.prisma.course.findUnique({
        where: { id: courseId },
        include: { Module: true },
      });
      if (!course) {
        throw new NotFoundException(`Course with id ${courseId} not found`);
      }
      const module = await this.prisma.module.create({
        data: {
          title,
          course: { connect: { id: courseId } },
        },
      });
      return module;
    } catch (error) {
      throw new GlobalException('Failed to create module', error.message);
    }
  }

  async getModuleById(id: string): Promise<Module> {
    try {
      const module = await this.prisma.module.findUnique({
        where: { id },
        include: { Lesson: true },
      });
      if (!module) {
        throw new NotFoundException(`Module with id ${id} not found`);
      }
      return module;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new GlobalException('Failed to get module', error.message);
    }
  }

  async updateModule(id: string, updateModuleDto: UpdateModuleDto) {
    await this.getModuleById(id);
    try {
      const { title } = updateModuleDto;
      const updatedModule = await this.prisma.module.update({
        where: { id },
        data: { title },
      });
      return updatedModule;
    } catch (error) {
      throw new GlobalException('Failed to update module', error.message);
    }
  }

  async deleteModule(id: string) {
    await this.getModuleById(id);
    try {
      const lessonsInModule = await this.prisma.lesson.findMany({
        where: { moduleId: id },
      });

      lessonsInModule.forEach(async (lesson) => {
        await this.prisma.lesson.delete({ where: { id: lesson.id } });
      });

      const deletedModule = await this.prisma.module.delete({
        where: { id },
      });
      return deletedModule;
    } catch (error) {
      throw new GlobalException('Failed to delete module', error.message);
    }
  }
}
