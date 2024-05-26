import { IsNotEmpty, IsString } from 'class-validator';

export class LessonChatDto {
  @IsNotEmpty()
  @IsString()
  question: string;
}
