import { Citizen } from "../../../types/Citizen";
import { City } from "../../../types/City";
import React from "react";
import "./TreeLeaf.scss";
import "cooltipz-css";

interface TreeLeafProps {
  citizen: Citizen;
  city: City;
}

export const TreeLeaf = React.memo(({ citizen, city }: TreeLeafProps) => {
  return (
    <span
      className="tree__citizen"
      aria-label={`${city.name}, ${city.data} жителей`}
      data-cooltipz-dir="right"
    >
      {citizen.name}
    </span>
  );
});
