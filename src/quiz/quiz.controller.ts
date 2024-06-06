import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { QuizService } from './quiz.service';
import { CreateQuizDto } from './dto/create-quiz.dto';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Get('generate/:lessonId')
  async generate(@Param('lessonId') lessonId: string) {
    const quizData = await this.quizService.generate(lessonId);

    return { success: true, data: quizData };
  }

  @Get(':lessonId')
  async findOne(@Param('lessonId') lessonId: string) {
    const quiz = await this.quizService.findOne(lessonId);

    return { success: true, data: quiz };
  }

  @Post(':lessonId')
  async create(
    @Param('lessonId') lessonId: string,
    @Body() quizQuestions: CreateQuizDto,
  ) {
    const quiz = await this.quizService.create(lessonId, quizQuestions);

    return { success: true, data: quiz };
  }

  @Put(':lessonId')
  async update(
    @Param('lessonId') lessonId: string,
    @Body() quizQuestions: CreateQuizDto,
  ) {
    const quiz = await this.quizService.update(lessonId, quizQuestions);

    return { success: true, data: quiz };
  }

  @Delete(':lessonId')
  async delete(@Param('lessonId') lessonId: string) {
    const deletedQuiz = await this.quizService.delete(lessonId);

    return { success: true, data: deletedQuiz };
  }
}
