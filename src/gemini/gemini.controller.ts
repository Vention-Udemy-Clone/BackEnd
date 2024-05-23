import { Body, Controller, Post } from '@nestjs/common';
import { GeminiService } from './gemini.service';
import { LessonChatDto } from './dto/lesson-chat.dto';

@Controller('gemini')
export class GeminiController {
  constructor(private readonly geminiService: GeminiService) {}

  @Post()
  async generateContent(@Body('prompt') prompt: string) {
    return this.geminiService.generateContent(prompt);
  }

  @Post('lesson-chat')
  async lessonChat(@Body() lessonChatDto: LessonChatDto) {
    return this.geminiService.lessonChat(
      lessonChatDto.prompt,
      lessonChatDto.lessonId,
    );
  }
}
