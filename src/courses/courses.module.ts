import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [PrismaModule, JwtModule.register({})],
  controllers: [CoursesController],
  providers: [CoursesService],
})
export class CoursesModule {}
