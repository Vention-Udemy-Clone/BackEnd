import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateLessonDto {
  @IsNotEmpty({ message: 'Title is required' })
  @IsString({ message: 'Title must be a string' })
  readonly title: string;

  @IsOptional()
  @IsString({ message: 'Description must be a string' })
  readonly description?: string;

  @IsOptional()
  @IsString({ message: 'Content must be a string' })
  readonly content?: string;
}
