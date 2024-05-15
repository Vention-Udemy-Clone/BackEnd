import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post } from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { HttpException, HttpStatus } from '@nestjs/common';

@Controller('lessons')
export class LessonsController {
  constructor(private readonly lessonsService: LessonsService) {}

  @Post(':moduleId')
  async createLesson(@Param('moduleId') moduleId: string, @Body() createLessonDto: CreateLessonDto) {
    try {
      return await this.lessonsService.createLesson(moduleId, createLessonDto);
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: 'There was a problem creating the lesson',
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(':id')
  async getLessonById(@Param('id') id: string) {
    try {
      return this.lessonsService.getLessonById(id);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Patch(':id')
  async updateLesson(@Param('id') id: string, @Body() updateLessonDto: UpdateLessonDto) {
    try {
      return this.lessonsService.updateLesson(id, updateLessonDto);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Delete(':id')
  async deleteLesson(@Param('id') id: string) {
    try {
      return this.lessonsService.deleteLesson(id);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
