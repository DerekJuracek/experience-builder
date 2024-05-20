import React, { useState, useEffect } from "react";
import { JimuMapViewComponent, JimuMapView } from "jimu-arcgis";
import { CalciteAccordion, CalcitePanel } from "calcite-components";
import { Button, Icon } from "jimu-ui";

// Sub-components
import LayerList from "./LayerList";
import ZoomControls from "./ZoomControls";

// Helper function to process layers (to be used in LayerList component)
const processLayers = (layers, jimuMapView) => {
  // Processing logic here...
  return layers.map((layer) => {
    // Convert layers to JSX elements or structured data
  });
};

export default function Map(props) {
  const [jimuMapView, setJimuMapView] = useState(null);
  const [layerList, setLayerList] = useState([]);
  const [zoom, setZoom] = useState();

  useEffect(() => {
    if (jimuMapView) {
      const layers = jimuMapView.view.map.layers.items;
      const processedLayers = processLayers(layers, jimuMapView);
      setLayerList(processedLayers);
      setZoom(jimuMapView.view.zoom);
    }
  }, [jimuMapView]);

  const activeViewChangeHandler = (jmv) => {
    setJimuMapView(jmv);
  };

  const updateZoom = (newZoom) => {
    setZoom(newZoom);
    if (jimuMapView && jimuMapView.view) {
      jimuMapView.view.zoom = newZoom;
    }
  };

  return (
    <div className="widget-starter jimu-widget" style={{ overflowX: "hidden" }}>
      <CalcitePanel>
        <CalciteAccordion icon-position="start" icon-type="caret" scale="m">
          <div className="accordion-container">
            <div
              id="layerlist-header-container"
              className="accordion-header"
              style={{ height: "50px" }}
            >
              <h5>Layer List</h5>
              <ZoomControls
                onZoomIn={() => updateZoom(zoom + 1)}
                onZoomOut={() => updateZoom(zoom - 1)}
                zoom={zoom}
              />
            </div>
            {props.useMapWidgetIds && props.useMapWidgetIds.length === 1 && (
              <JimuMapViewComponent
                useMapWidgetId={props.useMapWidgetIds[0]}
                onActiveViewChange={activeViewChangeHandler}
              />
            )}
            <LayerList layers={layerList} jimuMapView={jimuMapView} />
          </div>
        </CalciteAccordion>
      </CalcitePanel>
    </div>
  );
}
