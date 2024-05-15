import { Level, Status } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateCourseDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  description: string;

  @IsNotEmpty()
  @IsString()
  authorId: string;

  @IsEnum(Status)
  status: Status;

  @IsEnum(Level)
  level: Level;
}
