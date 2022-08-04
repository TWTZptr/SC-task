import { Module } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { CitiesController } from './cities.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { City, CitySchema } from './schemas/city.schema';

@Module({
  controllers: [CitiesController],
  providers: [CitiesService],
  imports: [
    MongooseModule.forFeature([{ name: City.name, schema: CitySchema }]),
  ],
})
export class CitiesModule {}
