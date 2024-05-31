import {
  Injectable,
  InternalServerErrorException,
  BadRequestException,
} from '@nestjs/common';
import { GeminiService } from '../gemini/gemini.service';
import { PrismaService } from '../prisma/prisma.service';
import { learningPathPrompt } from '../shared/prompts/learning-path.prompt';
// import { Stack } from 'src/shared/enums/stack.enum';
import { Level } from '@prisma/client';
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
