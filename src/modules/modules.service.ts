import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { GlobalException } from 'src/exceptions/global-exception';

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
      throw new GlobalException("Failed to create module", error.message);
    }
  }

  async getModuleById(id: string) {
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
      throw new GlobalException("Failed to get module", error.message);
    }
  }

  async updateModule(id: string, updateModuleDto: UpdateModuleDto) {
    try {
      const { title } = updateModuleDto;
      const module = await this.getModuleById(id);
      if (!module) throw new NotFoundException(`Module with id ${id} not found`);
      const updatedModule = await this.prisma.module.update({
        where: { id },
        data: { title },
      });
      return updatedModule;
    } catch (error) {
      throw new GlobalException("Failed to update module", error.message);
    }
  }

  async deleteModule(id: string) {
    try {
      const module = await this.getModuleById(id);
      if (!module) throw new NotFoundException(`Module with id ${id} not found`);
      const deletedModule = await this.prisma.module.delete({
        where: { id },
      });
      return deletedModule;
    } catch (error) {
      throw new GlobalException("Failed to delete module", error.message);
    }
  }
}