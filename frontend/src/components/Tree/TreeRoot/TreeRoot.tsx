import React from "react";
import { getAllCities } from "../../../services/CityService";
import { getAllCitizens } from "../../../services/CitizenService";
import { TreeData } from "../../../types/TreeData";
import { buildTreeData } from "../../../utils/BuildTreeData";
import { TreeNode } from "../TreeNode/TreeNode";
import "./TreeRoot.scss";

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

  if (!treeData) {
    return <div>Построение дерева...</div>;
  }

  const sublevels: React.ReactNode[] = [];
  for (const key in treeData.sublevels) {
    const child = treeData.sublevels[key];
    sublevels.push(
      <TreeNode
        citiesData={treeData.citiesData}
        sublevel={child}
        key={JSON.stringify(child.group)}
      />
    );
  }

  return <div className="tree">{sublevels}</div>;
};
