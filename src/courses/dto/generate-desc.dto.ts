import { Level } from '@prisma/client';
import { IsEnum, IsInt, IsNotEmpty, IsString, Max, Min } from 'class-validator';

export class generateDescDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsEnum(Level)
  level: Level;

  @IsInt()
  @Min(50)
  @Max(250)
  words: number;
}
