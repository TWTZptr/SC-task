import { Citizen } from "./Citizen";
import { Group } from "./Group";
import { SublevelCollection } from "./SublevelCollection";

export type Sublevel = {
  sublevels: SublevelCollection;
  group: Group;
  citizens: Citizen[];
};
