import { Module } from '@nestjs/common';
import { GeminiService } from 'src/gemini/gemini.service';
import { LessonsService } from 'src/lessons/lessons.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { GeminiModule } from '../gemini/gemini.module';
import { LessonsModule } from '../lessons/lessons.module';
import { QuizController } from './quiz.controller';
import { QuizService } from './quiz.service';

@Module({
  imports: [PrismaModule, GeminiModule, LessonsModule],
  controllers: [QuizController],
  providers: [QuizService, GeminiService, LessonsService],
})
export class QuizModule {}
