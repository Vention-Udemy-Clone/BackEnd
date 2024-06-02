import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { GeminiModule } from 'src/gemini/gemini.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { SummaryController } from './summary.controller';
import { SummaryService } from './summary.service';

@Module({
  imports: [PrismaModule, JwtModule.register({}), GeminiModule],
  controllers: [SummaryController],
  providers: [SummaryService],
})
export class SummaryModule {}
