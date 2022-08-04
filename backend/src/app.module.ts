import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CitiesModule } from './cities/cities.module';
import { CitizensModule } from './citizens/citizens.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    CitiesModule,
    CitizensModule,
    MongooseModule.forRoot('mongodb://localhost:27017/local'),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
