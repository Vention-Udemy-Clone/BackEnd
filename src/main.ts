import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GlobalExceptionFilter } from './filters/global.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.enableCors({
    origin: [
      'http://localhost:5173',
      'http://localhost:4173',
      'https://frontend-iinx.onrender.com/',
    ],
    credentials: true,
  });
  app.useGlobalFilters(new GlobalExceptionFilter());
  app.setGlobalPrefix('api');

  const configService = app.get(ConfigService);
  const appPort = configService.get('APP_PORT') ?? 3000;

  await app.listen(appPort);
}
bootstrap();
