import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { generateLessonDto } from './dto/generate.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { LessonsService } from './lessons.service';

@Controller('lessons')
export class LessonsController {
  constructor(private readonly lessonsService: LessonsService) {}

  @Post('generate-texts')
  async generate(@Body() body: generateLessonDto) {
    return await this.lessonsService.generateForLesson(body);
  }

  @Post(':moduleId')
  async createLesson(
    @Param('moduleId') moduleId: string,
    @Body() createLessonDto: CreateLessonDto,
  ) {
    const createdLesson = await this.lessonsService.createLesson(
      moduleId,
      createLessonDto,
    );
    return { success: true, data: createdLesson };
  }

  @Get(':id')
  async getLessonById(@Param('id') id: string) {
    const gotLesson = await this.lessonsService.getLessonById(id);
    return { success: true, data: gotLesson };
  }

  @Patch(':id')
  async updateLesson(
    @Param('id') id: string,
    @Body() updateLessonDto: UpdateLessonDto,
  ) {
    const updatedLesson = await this.lessonsService.updateLesson(
      id,
      updateLessonDto,
    );
    return { success: true, data: updatedLesson };
  }

  @Delete(':id')
  async deleteLesson(@Param('id') id: string) {
    const deletedModule = await this.lessonsService.deleteLesson(id);
    return { success: true, data: deletedModule };
  }
}
