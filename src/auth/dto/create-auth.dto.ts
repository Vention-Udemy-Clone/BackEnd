import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class registerDto {
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  fullName: string;

  @IsString()
  @IsOptional()
  avatarUrl?: string;
}
