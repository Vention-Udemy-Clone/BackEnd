import { Level } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class LearningPathDto {
  @IsNotEmpty({ message: 'Stack is required' })
  @IsString()
  stack: string;

  @IsNotEmpty({ message: 'Level is required' })
  @IsEnum(Level)
  level: Level;
}
