import React from "react";
import { CitiesData } from "../../../types/CitiesData";
import { Sublevel } from "../../../types/Sublevel";
import "./TreeNode.scss";
import { TreeLeaf } from "../TreeLeaf/TreeLeaf";

interface TreeNodeProps {
  citiesData: CitiesData;
  sublevel: Sublevel;
}

export const TreeNode = React.memo(
  ({ citiesData, sublevel }: TreeNodeProps) => {
    const citizens = sublevel.citizens.map((citizen) => (
      <li key={citizen._id}>
        <TreeLeaf citizen={citizen} city={citiesData[citizen.city_id]} />
      </li>
    ));

    const sublevels: React.ReactNode[] = [];
    for (const key in sublevel.sublevels) {
      const child = sublevel.sublevels[key];
      sublevels.push(
        <TreeNode
          citiesData={citiesData}
          sublevel={child}
          key={JSON.stringify(child.group)}
        />
      );
    }

    return (
      <ul>
        <li>
          <b>{sublevel.group.name}</b>
        </li>
        <li>
          <ul>{citizens}</ul>
        </li>
        <div>{sublevels}</div>
      </ul>
    );
  }
);
