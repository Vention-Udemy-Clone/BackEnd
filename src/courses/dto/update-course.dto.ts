import { PartialType } from '@nestjs/mapped-types';
import { Level, Status } from '@prisma/client';
import { IsEnum, IsString } from 'class-validator';
import { CreateCourseDto } from './create-course.dto';

export class UpdateCourseDto extends PartialType(CreateCourseDto) {
  @IsString()
  title: string;

  description: string;

  @IsString()
  authorId: string;

  @IsEnum(Status)
  status: Status;

  @IsEnum(Level)
  level: Level;
}
