import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { City, CityDocument } from './schemas/city.schema';
import { Model } from 'mongoose';

@Injectable()
export class CitiesService {
  constructor(
    @InjectModel(City.name) private readonly cityModel: Model<CityDocument>,
  ) {}

  async findAll(): Promise<City[]> {
    return this.cityModel.find().exec();
  }
}
