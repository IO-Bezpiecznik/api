import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableShutdownHooks();
  app.useGlobalPipes(
    new ValidationPipe({
      forbidUnknownValues: true,
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  console.log(process.env.DATABASE_URL);

  const config = new DocumentBuilder()
    .setTitle('API IO-Bezpiecznik')
    .setDescription('Dokumentacja API 2021/22 IO Bezpiecznik')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
