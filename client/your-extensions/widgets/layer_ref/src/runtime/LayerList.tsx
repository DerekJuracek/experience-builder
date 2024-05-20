import React from "react";
import { CalcitePickListGroup, CalcitePickListItem } from "calcite-components";

const LayerList = ({ layers, jimuMapView }) => {
  return (
    <CalcitePickListGroup>
      {layers.map((layer) => (
        <CalcitePickListItem
          value={layer.id}
          key={layer.id}
          label={layer.title}
        >
          {/* Additional layer controls here */}
        </CalcitePickListItem>
      ))}
    </CalcitePickListGroup>
  );
};

export default LayerList;
