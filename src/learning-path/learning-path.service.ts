import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Level } from '@prisma/client';
import { learningPathPrompt } from 'src/shared/prompts';
import { levelMapper } from 'src/utils/levelMapper';
import { GeminiService } from '../gemini/gemini.service';
import { PrismaService } from '../prisma/prisma.service';
import { LearningPathResult } from './entities/learning-path.entity';

@Injectable()
export class LearningPathService {
  constructor(
    private readonly geminiService: GeminiService,
    private readonly prismaService: PrismaService,
  ) {}

  async generateLearningPath(
    stack: string,
    studentLevel: Level,
  ): Promise<LearningPathResult> {
    try {
      const coursesList = await this.prismaService.course.findMany({
        select: {
          title: true,
          description: true,
          level: true,
          id: true,
        },
        where: {
          OR: levelMapper[studentLevel],
        },
      });

      if (!coursesList.length) {
        throw new InternalServerErrorException('No courses found.');
      }

      const prompt = learningPathPrompt(studentLevel, stack, coursesList);

      const content = await this.geminiService.generateProContent(prompt);
      const learningPathResponse = content.response.text();

      if (!learningPathResponse) {
        throw new InternalServerErrorException(
          'Error generating learning path.',
        );
      }
      const dataString = learningPathResponse
        .replace(/json/i, '')
        .replace('```', '')
        .trim();

      try {
        const learningPathJson: LearningPathResult = JSON.parse(dataString);
        return learningPathJson;
      } catch (error) {
        throw new BadRequestException(
          `Error parsing learning path data: ${error.message}`,
        );
      }
    } catch (error) {
      throw new InternalServerErrorException(
        `Error generating learning path: ${error.message}`,
      );
    }
  }
}
