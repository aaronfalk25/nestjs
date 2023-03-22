import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

@Module({
    controllers: [AppController], // List of controllers that will be used in this module
}) 
export class AppModule {}
