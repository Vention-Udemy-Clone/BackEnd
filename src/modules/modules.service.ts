import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ModulesService {
  constructor(private prisma: PrismaService) {}

  async createModule(courseId: string, createModuleDto: CreateModuleDto) {
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
  }

  async getModuleById(id: string) {
    const module = await this.prisma.module.findUnique({
      where: { id },
      include: { Lesson: true },
    });
    if (!module) {
      throw new NotFoundException(`Module with id ${id} not found`);
    }
    return module;
  }

  async updateModule(id: string, updateModuleDto: UpdateModuleDto) {
    const { title } = updateModuleDto;
    const module = await this.getModuleById(id);
    return this.prisma.module.update({
      where: { id },
      data: { title },
    });
  }

  async deleteModule(id: string) {
    const module = await this.getModuleById(id);
    return this.prisma.module.delete({
      where: { id },
    });
  }
}