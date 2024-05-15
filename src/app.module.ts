import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { ModulesModule } from './modules/modules.module';
import { LessonsModule } from './lessons/lessons.module';

@Module({
  imports: [PrismaModule, UserModule, ModulesModule, LessonsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
