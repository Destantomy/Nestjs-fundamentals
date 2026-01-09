import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true, // <-- this used to stop the process while there are data not included by specified DTO then return the error response to user
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
