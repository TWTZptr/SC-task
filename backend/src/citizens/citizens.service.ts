import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Citizen, CitizenDocument } from './schemas/citizen.schema';
import { Model } from 'mongoose';

@Injectable()
export class CitizensService {
  constructor(
    @InjectModel(Citizen.name)
    private readonly citizenModel: Model<CitizenDocument>,
  ) {}

  findAll(): Promise<Citizen[]> {
    return this.citizenModel.find().exec();
  }
}
