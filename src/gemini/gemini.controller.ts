import { Body, Controller, Post } from '@nestjs/common';
import { GeminiService } from './gemini.service';

@Controller('gemini')
export class GeminiController {
  constructor(private readonly geminiService: GeminiService) {}

  @Post()
  async generateContent(@Body('prompt') prompt: string) {
    return this.geminiService.generateContent(prompt);
  }
}
