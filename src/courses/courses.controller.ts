import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { CurrentUser } from 'src/shared/decorators/current-user.decorator';
import { UserGuard } from 'src/shared/guards/user.guard';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  @UseGuards(UserGuard)
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.create(createCourseDto);
  }

  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coursesService.findOne(id);
  }

  @Get('/created-by/:authorId')
  findByAuthor(
    @Param('authorId') authorId: string,
    @CurrentUser('id') userId: string | null,
  ) {
    return this.coursesService.findByAuthorId(authorId, userId);
  }

  @Patch(':id')
  @UseGuards(UserGuard)
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.coursesService.update(id, updateCourseDto);
  }

  @Delete(':id')
  @UseGuards(UserGuard)
  remove(@Param('id') id: string) {
    return this.coursesService.remove(id);
  }
}
