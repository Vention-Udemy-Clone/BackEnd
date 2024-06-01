import { Module } from '@nestjs/common';
import { LearningPathService } from './learning-path.service';
import { LearningPathController } from './learning-path.controller';
import { GeminiModule } from 'src/gemini/gemini.module';
import { CoursesModule } from 'src/courses/courses.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [GeminiModule, CoursesModule, PrismaModule],
  providers: [LearningPathService],
  controllers: [LearningPathController],
})
export class LearningPathModule {}
