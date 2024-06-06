import { Level } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class generateContentDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  id: string;

  @IsEnum(Level)
  level: Level;
}
