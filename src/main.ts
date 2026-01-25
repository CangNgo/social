import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from './config/Logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // bufferLogs: true, 
    // logger: new Logger()
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
