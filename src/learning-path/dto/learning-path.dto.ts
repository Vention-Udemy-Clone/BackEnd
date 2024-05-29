import { Level } from '@prisma/client';
import { IsEnum, IsNotEmpty } from 'class-validator';
import { Stack } from 'src/shared/enums/stack.enum';

export class LearningPathDto {
  @IsNotEmpty({ message: 'Stack is required' })
  @IsEnum(Stack)
  stack: Stack;

  @IsNotEmpty({ message: 'Stack is required' })
  @IsEnum(Level)
  level: Level;
}