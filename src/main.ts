import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Bootstrap function to create the nest application
// We define then immediately call the function
async function bootstrap() {
    // Creates nest application out of module
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
}
bootstrap();