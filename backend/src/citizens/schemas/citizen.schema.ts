import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type CitizenDocument = Citizen & Document;

@Schema()
export class Citizen {
  @Prop()
  _id: number;

  @Prop()
  name: string;

  @Prop()
  city_id: number;

  @Prop()
  groups: [{ type: string; name: string }];
}

export const CitizenSchema = SchemaFactory.createForClass(Citizen);
