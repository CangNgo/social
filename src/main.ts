import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppLogger } from './config/logger';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';

// Create Express instance for Vercel
const server = express();
let cachedApp;

async function createApp() {
  if (cachedApp) {
    return cachedApp;
  }

  const adapter = new ExpressAdapter(server);
  const app = await NestFactory.create(AppModule, adapter);

  // Enable CORS
  app.enableCors({
    origin: true,
    credentials: true,
  });

  const prefix = process.env.PREFIX || 'api';
  const apiDocs = process.env.API_DOCS || 'api-docs';

  // Set global prefix before Swagger setup
  app.setGlobalPrefix(prefix);

  //Swagger
  const config = new DocumentBuilder()
    .setTitle('Fsocial API')
    .setDescription('Fsocial API description')
    .setVersion('1.0')
    .addTag('fsocial')
    .addBearerAuth({
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      in: 'header',
      name: 'Authorization',
      description: 'JWT Bearer for access with format "Bearer [Token]"',
    }, 'AccessToken')
    .addBearerAuth({
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      in: 'header',
      name: 'Authorization',
      description: 'JWT Bearer for refesh with format "Bearer [Token]"',
    }, 'JwtRefresh')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  document.security = [{ AccessToken: [] }]

  SwaggerModule.setup(apiDocs, app, document, {
    swaggerOptions: {
      persistAuthorization: true
    }
  });

  app.useLogger(new AppLogger());
  app.useGlobalPipes(new ValidationPipe());

  await app.init();
  cachedApp = app;
  return app;
}

// For local development
async function bootstrap() {
  const port = process.env.PORT || 4000;
  Logger.log(`🚀 Application is running on: http://localhost:${port}`, 'Bootstrap');

  const app = await createApp();
  await app.listen(port);
}

// Export for Vercel serverless
export default async (req, res) => {
  await createApp();
  return server(req, res);
};

// Start local server if not in serverless environment
if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
  bootstrap();
}
