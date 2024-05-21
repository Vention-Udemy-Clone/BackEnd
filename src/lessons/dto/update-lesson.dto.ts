import { IsOptional, IsString } from 'class-validator';

export class UpdateLessonDto {
  @IsOptional()
  @IsString({ message: 'Title must be a string' })
  readonly title?: string;

  @IsOptional()
  @IsString({ message: 'Overview must be a string' })
  readonly overview?: string;

  @IsOptional()
  @IsString({ message: 'Content must be a string' })
  readonly content?: string;
}
