import { Module } from '@nestjs/common';
import { GeminiController } from './gemini.controller';
import { GeminiService } from './gemini.service';
import { LessonsModule } from 'src/lessons/lessons.module';

@Module({
  imports: [LessonsModule],
  controllers: [GeminiController],
  providers: [GeminiService],
})
export class GeminiModule {}
