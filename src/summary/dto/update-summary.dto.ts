import { IsString } from 'class-validator';

export class UpdateSummaryDto {
  @IsString()
  summary: string;
}
