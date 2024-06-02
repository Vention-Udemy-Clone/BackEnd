import { IsString } from 'class-validator';

export class CreateSummaryDto {
  @IsString()
  lessonId: string;

  @IsString()
  summary: string;
}
