import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma, Status } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { courseMapper } from 'src/utils/courseMapper';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { CoursesResponse } from './entities/course.entity';

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

      const { id } = await this.prisma.course.create({
        data: courseData,
      });

      return { success: true, data: { id } };
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
      this.prisma.course.findMany({
        // where: { status: 'PUBLISHED' },
        orderBy: {
          createdAt: 'desc',
        },
        include: { author: true },
      }),
    ]);

    const courseData = courses.map((course) => courseMapper(course));

    return {
      count: count,
      data: courseData,
    };
  }

  async findOne(id: string) {
    const course = await this.prisma.course.findUnique({
      where: { id },
      include: {
        author: true,
        Module: {
          select: {
            id: true,
            title: true,
            Lesson: {
              select: {
                id: true,
                title: true,
              },
            },
          },
        },
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

    return { success: true, data: course };
  }

  async findByAuthorId(
    authorId: string,
    userId?: string,
  ): Promise<CoursesResponse> {
    const where: Prisma.CourseWhereInput =
      userId === authorId
        ? { authorId }
        : { authorId, status: Status.PUBLISHED };

    const [count, courses] = await this.prisma.$transaction([
      this.prisma.course.count({
        where,
      }),

      this.prisma.course.findMany({
        where,
        include: {
          author: true,
        },
      }),
    ]);

    const courseData = courses.map((course) => courseMapper(course));

    return {
      count: count,
      data: courseData,
    };
  }

  async findMyCourses(authorId: string): Promise<any> {
    const [count, courses] = await this.prisma.$transaction([
      this.prisma.course.count({ where: { authorId } }),
      this.prisma.course.findMany({
        where: { authorId },
        include: { author: true },
      }),
    ]);

    const courseData = courses.map((course) => courseMapper(course));

    return { count, data: courseData };
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
        where: { id },
        data: courseData,
      });

      return { success: true, data: { id } };
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
      where: { id },
    });

    return { message: 'Course deleted successfully' };
  }
}
