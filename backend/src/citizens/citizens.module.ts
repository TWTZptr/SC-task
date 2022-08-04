import { Module } from '@nestjs/common';
import { CitizensService } from './citizens.service';
import { CitizensController } from './citizens.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Citizen, CitizenSchema } from './schemas/citizen.schema';

@Module({
  controllers: [CitizensController],
  providers: [CitizensService],
  imports: [
    MongooseModule.forFeature([{ name: Citizen.name, schema: CitizenSchema }]),
  ],
})
export class CitizensModule {}
