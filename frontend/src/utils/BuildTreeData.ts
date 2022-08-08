import { Citizen } from "../types/Citizen";
import { City } from "../types/City";
import { TreeData } from "../types/TreeData";
import { Sublevel } from "../types/Sublevel";
import { SublevelCollection } from "../types/SublevelCollection";
import { CitiesData } from "../types/CitiesData";

export const buildTreeData = (
  cities: City[],
  citizens: Citizen[]
): TreeData => {
  const citiesData: CitiesData = {};

  cities.forEach((city) => {
    citiesData[city._id] = city;
  });

  let treeData: TreeData = { sublevels: {}, citiesData };

  citizens.forEach((citizen) => {
    treeData.sublevels = attachCitizenSublevels(citizen, treeData.sublevels);
  });

  return treeData;
};

const attachCitizenSublevels = (
  citizen: Citizen,
  sublevelCollectionToAttach: SublevelCollection
): SublevelCollection => {
  const groups = citizen.groups;

  if (groups.length === 0) {
    throw new Error("groups zero length on citizen " + citizen);
  }

  const topLevelGroup = groups[0];

  let currentSublevel: Sublevel =
    sublevelCollectionToAttach[topLevelGroup.name];

  if (!currentSublevel) {
    currentSublevel = { sublevels: {}, citizens: [], group: topLevelGroup };
  }

  const topOfSublevelCollection: Sublevel = currentSublevel;

  const [, ...groupWithNoTopSublevel] = groups;

  groupWithNoTopSublevel.forEach((group) => {
    let nextSublevel = currentSublevel.sublevels[group.name];

    if (!nextSublevel) {
      nextSublevel = { sublevels: {}, citizens: [], group };
    }

    currentSublevel.sublevels[nextSublevel.group.name] = nextSublevel;
    currentSublevel = nextSublevel;
  });

  currentSublevel.citizens.push(citizen);

  sublevelCollectionToAttach[topLevelGroup.name] = topOfSublevelCollection;
  return sublevelCollectionToAttach;
};
