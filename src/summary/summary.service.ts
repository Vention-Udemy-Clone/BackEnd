import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { GlobalException } from 'src/exceptions/global.exception';
import { GeminiService } from 'src/gemini/gemini.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSummaryDto } from './dto/create-summary.dto';
import { UpdateSummaryDto } from './dto/update-summary.dto';

@Injectable()
export class SummaryService {
  constructor(
    private prisma: PrismaService,
    private readonly gemini: GeminiService,
  ) {}

  async create(createSummaryDto: CreateSummaryDto, userId: string) {
    try {
      const summary = await this.prisma.lessonSummary.findFirst({
        where: {
          userId,
          lessonId: createSummaryDto.lessonId,
        },
      });

      if (summary) throw new BadRequestException('Summary already exists');

      const createdSummary = await this.prisma.lessonSummary.create({
        data: {
          ...createSummaryDto,
          userId,
        },
      });
      return { success: true, data: createdSummary };
    } catch (e) {
      if (e instanceof BadRequestException) throw e;
      throw new GlobalException('Error creating summary', e);
    }
  }

  async findOne(userId: string, lessonId: string) {
    try {
      const summary = await this.prisma.lessonSummary.findFirst({
        where: {
          userId,
          lessonId,
        },
      });
      return { success: true, data: summary };
    } catch (e) {
      throw new GlobalException('Error fetching summary', e);
    }
  }

  async update(id: string, updateSummaryDto: UpdateSummaryDto, userId: string) {
    try {
      const summaryForUpdate = await this.prisma.lessonSummary.findUnique({
        where: { id, userId },
      });

      if (!summaryForUpdate) {
        throw new NotFoundException('Summary not found');
      }

      const updatedSummary = await this.prisma.lessonSummary.update({
        where: { id },
        data: {
          summary: updateSummaryDto.summary,
        },
      });

      return { success: true, data: updatedSummary };
    } catch (e) {
      if (e instanceof NotFoundException) throw e;
      throw new GlobalException('Error updating summary', e);
    }
  }

  async remove(id: string) {
    try {
      const summaryForDelete = this.prisma.lessonSummary.findUnique({
        where: { id },
      });

      if (!summaryForDelete) {
        throw new NotFoundException('Summary not found');
      }

      const deletedSummary = await this.prisma.lessonSummary.delete({
        where: { id },
      });

      return { success: true, data: deletedSummary };
    } catch (e) {
      if (e instanceof NotFoundException) throw e;
      throw new GlobalException('Error deleting summary', e);
    }
  }

  async generateSummary(lessonId: string) {
    try {
      const lesson = await this.prisma.lesson.findUnique({
        where: { id: lessonId },
      });

      if (!lesson) throw new NotFoundException('Lesson not found');

      const prompt = `
      Generate a summary of the lesson with the title ${lesson.title}, with the content ${lesson.content}.
      Please summarize the content of the lesson, highlighting the main points and key takeaways. 
      Use a clear and concise writing style, and include relevant headings and subheadings to make the summary easy to read and understand
      The summary should be 3-5 sentences long and should cover the main points of the lesson.
      Format shout be HTML. Use <h1> for the title and <p> for the content, use <strong>, <em> tags. If necessary use <ul> and <li> for the list.
      Add line spacing between using <br> tag, but not more than 2 times in a row.
      Return the summary as a string.`;

      const response = await this.gemini.generateContent(prompt);

      if (!response) throw new BadRequestException('Error generating summary');

      return { success: true, data: response.response.text() };
    } catch (e) {
      if (e instanceof NotFoundException) throw e;
      throw new GlobalException('Error generating summary', e);
    }
  }
}
