import { Controller, Get } from '@nestjs/common';
import { LearningPathService } from './learning-path.service';
import { Body } from '@nestjs/common';
import { LearningPathDto } from './dto/learning-path.dto';

@Controller('learning-path')
export class LearningPathController {
  constructor(private readonly learningPathService: LearningPathService) {}

  @Get()
  async generateLearningPath(@Body() learningPathDto: LearningPathDto) {
    const learningPath = await this.learningPathService.generateLearningPath(
      learningPathDto.stack,
      learningPathDto.level,
    );
    return { success: true, data: learningPath };
  }
}
