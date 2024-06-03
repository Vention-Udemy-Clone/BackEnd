import { IsString } from 'class-validator';

export class CreateNoteDto {
  @IsString()
  note: string;

  @IsString()
  originalText: string;

  @IsString()
  from: string;

  @IsString()
  to: string;

  @IsString()
  lessonId: string;
}
