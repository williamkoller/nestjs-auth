import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT, () =>
    console.log(
      `Application running and listening at this address: http://localhost:${process.env.PORT}`,
    ),
  );
}
bootstrap();
