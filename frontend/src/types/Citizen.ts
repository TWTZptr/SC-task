import { Group } from "./Group";

export type Citizen = {
  _id: number;
  name: string;
  city_id: number;
  groups: Group[];
};
