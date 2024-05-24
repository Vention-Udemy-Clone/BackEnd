import { Module } from '@nestjs/common';
import { QuizController } from './quiz.controller';
import { QuizService } from './quiz.service';
import { GeminiModule } from '../gemini/gemini.module';
import { LessonsModule } from '../lessons/lessons.module';
import { GeminiService } from 'src/gemini/gemini.service';
import { LessonsService } from 'src/lessons/lessons.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule, GeminiModule, LessonsModule],
  controllers: [QuizController],
  providers: [QuizService, GeminiService, LessonsService],
})
export class QuizModule {}
