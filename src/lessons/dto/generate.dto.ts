import { IsEnum, IsInt, IsNotEmpty, IsString, Max, Min } from 'class-validator';
import { LessonContext } from 'src/shared/types/auth-user.types';

export class generateLessonDto {
  @IsEnum(LessonContext)
  context: LessonContext;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsInt()
  @Min(50)
  @Max(250)
  words: number;
}
