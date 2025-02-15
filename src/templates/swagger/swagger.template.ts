import { execSync } from 'node:child_process';

const swaggerTemplate = (projectName: string, packageManagerCommand: string) => {
  execSync(`cd ${projectName} && ${packageManagerCommand} @nestjs/swagger`, { stdio: 'inherit' });
  const mainFilePath = `${projectName}/src/main.ts`;

  const swaggerConfig = `import 'dotenv/config';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ClassSerializerInterceptor } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalGuards();
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

  if (process.env.ENV === 'development') {
    const config = new DocumentBuilder()
      .setTitle('API Documentation')
      .setDescription('API Documentation using Swagger')
      .setVersion('1.0')
      .addBearerAuth()
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
  }

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();`;

  execSync(`echo "${swaggerConfig}" > ${mainFilePath}`, { stdio: 'inherit' });
};

export default swaggerTemplate;
