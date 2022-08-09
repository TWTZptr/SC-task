import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CitiesModule } from './cities/cities.module';
import { CitizensModule } from './citizens/citizens.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    CitiesModule,
    CitizensModule,
    MongooseModule.forRoot(
      `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/local`,
    ),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
