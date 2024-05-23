import { IsNotEmpty, IsString } from 'class-validator';

export class LessonChatDto {
  @IsNotEmpty()
  @IsString()
  prompt: string;

  @IsNotEmpty()
  @IsString()
  lessonId: string;
}
