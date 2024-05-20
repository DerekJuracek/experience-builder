import { React, type AllWidgetProps } from "jimu-core";
import { MapWidgetSelector } from "jimu-ui/advanced/setting-components";
import FeatureLayer from "esri/layers/FeatureLayer";

import { useState } from "react";
import { type IMConfig } from "../config";
import { JimuMapViewComponent } from "jimu-arcgis";
import MapLayerList from "./MapLayerList";

const Widget = (props: AllWidgetProps<IMConfig>) => {
  const [jimuMapView, setJimuMapView] = useState(null);

  const onActiveViewChange = (jimuMapView) => {
    console.log("Active view changed", jimuMapView);
    setJimuMapView(jimuMapView);
  };

  // *** ADD ***
  // const onMapWidgetSelected = (useMapWidgetIds: string[]) => {
  //   props.onSettingChange({
  //     id: props.id,
  //     useMapWidgetIds: useMapWidgetIds,
  //   });
  // };

  // const formSubmit = (evt) => {
  //   evt.preventDefault();
  //   // create a new FeatureLayer
  //   const layer = new FeatureLayer({
  //     url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads_Styled/FeatureServer/0",
  //   });

  //   // Add the layer to the map (accessed through the Experience Builder JimuMapView data source)
  //   jimuMapView.view.map.add(layer);
  //   // More here soon
  // };

  return (
    <div className="widget-demo jimu-widget m-2">
      <JimuMapViewComponent
        useMapWidgetIds={["7811c4cf27ed46ba92b877e2719f82dc"]}
        onActiveViewChange={onActiveViewChange}
      />
      <MapLayerList jimuMapView={jimuMapView} />
      {/* <p>exampleConfigProperty: {props.config.exampleConfigProperty}</p> */}
    </div>
  );
};

export default Widget;
