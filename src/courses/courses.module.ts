import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { GeminiModule } from 'src/gemini/gemini.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';

@Module({
  imports: [PrismaModule, GeminiModule, JwtModule.register({})],
  controllers: [CoursesController],
  providers: [CoursesService],
})
export class CoursesModule {}
