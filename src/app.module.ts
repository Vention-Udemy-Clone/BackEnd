import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CoursesModule } from './courses/courses.module';
import { GeminiModule } from './gemini/gemini.module';
import { LearningPathModule } from './learning-path/learning-path.module';
import { LessonsModule } from './lessons/lessons.module';
import { ModulesModule } from './modules/modules.module';
import { NotesModule } from './notes/notes.module';
import { PrismaModule } from './prisma/prisma.module';
import { QuizModule } from './quiz/quiz.module';
import { UserModule } from './user/user.module';
import { SummaryModule } from './summary/summary.module';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    AuthModule,
    ModulesModule,
    LessonsModule,
    CoursesModule,
    GeminiModule,
    QuizModule,
    NotesModule,
    LearningPathModule,
    SummaryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
