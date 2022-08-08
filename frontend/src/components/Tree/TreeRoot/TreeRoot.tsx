import React from "react";
import { getAllCities } from "../../../services/CityService";
import { getAllCitizens } from "../../../services/CitizenService";
import { TreeData } from "../../../types/TreeData";
import { buildTreeData } from "../../../utils/BuildTreeData";

export const TreeRoot = () => {
  const [treeData, setTreeData] = React.useState<TreeData | null>(null);

  React.useEffect(() => {
    const fetchCitiesAndCitizens = async () => {
      const citiesPromise = await getAllCities();
      const citizensPromise = await getAllCitizens();

      if (
        citiesPromise.ok &&
        citiesPromise.data &&
        citizensPromise.ok &&
        citizensPromise.data
      ) {
        const data = buildTreeData(citiesPromise.data, citizensPromise.data);
        console.log(data);
        setTreeData(data);
      }
    };

    fetchCitiesAndCitizens();
  }, []);

  return <div></div>;
};
