import { Controller, Get, Param } from '@nestjs/common';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Get(':lessonId')
  async generateQuizQuestions(@Param('lessonId') lessonId: string) {
    const quizData = await this.quizService.generateQuizQuestions(lessonId);
    return {success: true, data: quizData};
  }
}