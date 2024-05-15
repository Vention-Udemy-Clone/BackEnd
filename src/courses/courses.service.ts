import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course, CoursesResponse } from './entities/course.entity';

@Injectable()
export class CoursesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCourseDto: CreateCourseDto) {
    try {
      const courseData = {
        title: createCourseDto.title,
        level: createCourseDto.level,
        description: createCourseDto.description,
        authorId: createCourseDto.authorId,
        status: createCourseDto.status,
      };

      await this.prisma.course.create({
        data: courseData,
      });

      return {
        message: 'Course created successfully',
      };
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'Error creating course',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll(): Promise<CoursesResponse> {
    const [count, courses] = await this.prisma.$transaction([
      this.prisma.course.count(),
      this.prisma.course.findMany(),
    ]);

    return {
      count: count,
      data: courses,
    };
  }

  async findOne(id: string): Promise<Course> {
    const course = await this.prisma.course.findUnique({
      where: {
        id,
      },
    });

    if (!course) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Course not found',
        },
        HttpStatus.NOT_FOUND,
      );
    }

    return course;
  }

  async update(id: string, updateCourseDto: UpdateCourseDto) {
    await this.findOne(id);

    const courseData = {
      title: updateCourseDto.title,
      description: updateCourseDto.description,
      level: updateCourseDto.level,
      authorId: updateCourseDto.authorId,
      status: updateCourseDto.status,
    };

    try {
      await this.prisma.course.update({
        where: {
          id,
        },
        data: courseData,
      });

      return {
        id,
        message: 'Course updated successfully',
      };
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'Error updating course',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async remove(id: string) {
    await this.findOne(id);

    await this.prisma.course.delete({
      where: {
        id,
      },
    });

    return {
      message: 'Course deleted successfully',
    };
  }
}