import { IsString } from 'class-validator';

export class UpdateModuleDto {
  @IsString()
  readonly title?: string;
}
