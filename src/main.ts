import { NestFactory } from '@nestjs/core';
import { AppModule } from './Module/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { APP_PORT } from './configApp/constants';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 
  const options = new DocumentBuilder()
  .setTitle('Catalog Service Api ')
  .setDescription('The API Sync Catalog Swagger')
  .setVersion('1.0.0')
  .build();
  const document = SwaggerModule.createDocument(app, options, {
    ignoreGlobalPrefix: false,
  });
  SwaggerModule.setup('swagger', app, document);

  
  await app.listen(APP_PORT);

}
bootstrap();
