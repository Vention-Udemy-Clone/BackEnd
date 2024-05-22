import { Body, Controller, Get } from '@nestjs/common';
import { GeminiService } from './gemini.service';

@Controller('gemini')
export class GeminiController {
  constructor(private readonly geminiService: GeminiService) {}

  @Get()
  async generateContent(@Body('prompt') prompt: string) {
    return this.geminiService.generateContent(prompt);
  }
}
