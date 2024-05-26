import { Module } from '@nestjs/common';
import { GeminiModule } from 'src/gemini/gemini.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { LessonsController } from './lessons.controller';
import { LessonsService } from './lessons.service';

@Module({
  imports: [PrismaModule, GeminiModule],
  controllers: [LessonsController],
  providers: [LessonsService],
  exports: [LessonsService],
})
export class LessonsModule {}
