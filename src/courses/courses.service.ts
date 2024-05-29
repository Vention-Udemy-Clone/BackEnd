import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Level, Prisma, Status } from '@prisma/client';
import { GlobalException } from 'src/exceptions/global.exception';
import { GeminiService } from 'src/gemini/gemini.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { removeCommas } from 'src/utils';
import { courseMapper } from 'src/utils/courseMapper';
import { CreateCourseDto } from './dto/create-course.dto';
import { generateDescDto } from './dto/generate-desc.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import {
  CoursesResponse,
  GeneratedCourseResponse,
} from './entities/course.entity';

@Injectable()
export class CoursesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly gemini: GeminiService,
  ) {}

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

  async generateDesc(body: generateDescDto) {
    try {
      const prompt = `You are experienced contend maker.
      Your goal to generate a course description for a course titled "${body.title}" for the ${body.level} level.
      The course should be designed to help students learn the basics of the topic and build a strong foundation.
      Do not use any words like 'course description', 'course title', 'course level'.
      As it is plain text, for styling use symbols like '*', '-' and other.
      The description should be around ${body.words} words.`;
      const data = await this.gemini.generateContent(prompt);

      return {
        success: true,
        data: {
          description: data.response.text(),
        },
      };
    } catch (error) {
      throw new GlobalException('Error generating course description', error);
    }
  }

  async generateCourse(body: any) {
    try {
      const prompt = `
      You are professional content maker. You are tasked with creating a text based content for course.
      Your goal is to generate a course which includes modules and each module should have a title and several lessons with title and content also course description based on the title.
      Description should be around 100-200 words.
      Example:
      Course Title: Mastering Git
      Module 1: Introduction to Git
      Lesson 1: What is Git?
      Lesson 2: Why Git?
      ...
      Module 2: Git Basics
      ...
      Your task is to generate a course with several(in range of 5-10) modules and each module should have several(in range of 1-5) lessons(it doesn't have to exactly same in each module). No need to write the content of the lessons, just the titles.

      Module titles shouldn't be 'Projects and Case Studies' or similar. It should be more specific like 'Introduction to Git' or 'Git Basics'. Also they can't be 'External Resources' or 'Additional Resources'.

      Output should be raw JSON format.
      The course should be about "${body.title}".

      Here is the sample output: DON'T add code block
      {
        "title": "${body.title}",
        "description": "Description of the course.",
        "modules": [
          {
            "title": "Module title",
            "lessons": [
              {"title": "Lesson title"},
              {"title": "Lesson title"}
            ]
          },
        ] 
      }
      `;
      const content = await this.gemini.generateContent(prompt);
      const text = content.response.text();

      const courseJSON: GeneratedCourseResponse = await JSON.parse(
        removeCommas(text),
      );

      const course = await this.prisma.course.create({
        data: {
          title: courseJSON.title,
          description: courseJSON.description,
          authorId: body.authorId,
          status: Status.DRAFT,
          level: Level.BEGINNER,
          Module: {
            create: courseJSON.modules.map((module) => ({
              title: module.title,
              Lesson: {
                create: module.lessons.map((lesson) => ({
                  title: lesson.title,
                })),
              },
            })),
          },
        },
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

      return { success: true, data: course };
    } catch (error) {
      throw new GlobalException('Error generating course', error);
    }
  }
}
