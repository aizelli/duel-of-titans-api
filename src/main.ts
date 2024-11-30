import { NestFactory } from '@nestjs/core';
import type { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    app.enableCors({
        origin: ['http://localhost:3000', 'http://localhost:8080', 'http://localhost:8081'], 
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', 
        credentials: true, 
    })
    const config = new DocumentBuilder()
        .setTitle('API Duel of Titans')
        .setDescription('Documentação da API')
        .setVersion('alfa-1.0')
        .addBearerAuth(
            {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT', // Formato do token
            },
            'JWT', // Nome do esquema
        )
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    await app.listen(process.env.PORT || 3000);
}
bootstrap();
