import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CityDocument = City & Document;

@Schema()
export class City {
  @Prop()
  _id: number;

  @Prop()
  name: string;

  @Prop()
  data: number;
}

export const CitySchema = SchemaFactory.createForClass(City);
