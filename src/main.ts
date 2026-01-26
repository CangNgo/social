import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from './config/Logger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(process.env.PORT ?? 3000);

  app.useGlobalPipes(new ValidationPipe());
}
bootstrap();
