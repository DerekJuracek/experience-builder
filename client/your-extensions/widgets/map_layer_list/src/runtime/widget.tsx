import { React, type AllWidgetProps } from "jimu-core";
import { useState, useEffect } from "react";
import { JimuMapViewComponent, JimuMapView } from "jimu-arcgis";
import {
  CalcitePickListGroup,
  CalcitePickListItem,
  CalciteAction,
  CalciteAccordion,
  CalciteAccordionItem,
} from "calcite-components";
import { fontValue } from "jimu-ui/advanced/rich-text-editor";
import { FontSizeType } from "dist/widgets/arcgis/feature-info/src/config";

export default function Map(props: AllWidgetProps<any>) {
  const [jimuMapView, setJimuMapView] = useState<JimuMapView>();
  const [layerList, setLayerList] = useState<JSX.Element[]>([]);

  // Handler to set JimuMapView
  const activeViewChangeHandler = (jmv: JimuMapView) => {
    if (jmv) {
      setJimuMapView(jmv);
    }
  };

  const processLayers = (layers: any[]) => {
    const layerListItems: JSX.Element[] = [];

    layers.forEach((layer) => {
      if (layer.type === "group") {
        const groupTitle = layer.title || "Industry"; // Default title or layer title

        // Create CalciteAccordionItem for the group
        layerListItems.push(
          <CalciteAccordionItem key={layer.id} description={groupTitle}>
            <CalciteAction
              id={`action-${layer.id}`}
              slot="actions-end"
              icon="square"
              text={layer.title}
              onClick={() => toggleAllLayerVisibility(layer.id)}
            />
            <div>
              {/* Recursively process layers within the group */}
              {processLayers(layer.layers.items)}
            </div>
          </CalciteAccordionItem>
        );
      } else {
        // Add CalcitePickListItem with CalciteAction for individual layers
        layerListItems.push(
          <CalcitePickListItem
            key={layer.id}
            label={layer.title}
            value={layer.id}
            description={layer.type}
          >
            <CalciteAction
              id={`action-${layer.id}`}
              slot="actions-end"
              icon="plus"
              text={layer.title}
              onClick={() => toggleLayerVisibility(layer.id)}
            />
          </CalcitePickListItem>
        );
      }
    });

    return layerListItems;
  };

  // Function to toggle layer visibility
  const toggleLayerVisibility = (layerId: string) => {
    // Find the layer in the webmap
    const layer = jimuMapView?.view?.map?.findLayerById(layerId);

    if (layer) {
      // Toggle the layer's visibility
      layer.visible = !layer.visible;

      // If the layer is part of a group layer, toggle each sublayer
      if (layer.type === "group") {
        layer.layers.forEach((subLayer) => {
          subLayer.visible = layer.visible;
        });
      }

      // Update the action icon based on the new visibility state
      const actionElement = document.getElementById(`action-${layerId}`);
      if (actionElement) {
        actionElement.setAttribute("icon", layer.visible ? "minus" : "plus");
      }
    }
  };

  const toggleAllLayerVisibility = (layerId: string) => {
    console.log(layerId);

    // Update the action icon based on the new visibility state
    const actionElement = document.getElementById(`action-${layerId}`);
    if (actionElement) {
      actionElement.setAttribute(
        "icon",
        layer.visible ? "square" : "check-square"
      );
    }
  };

  useEffect(() => {
    if (jimuMapView) {
      const layers = jimuMapView.view.map.layers.items;
      const processedLayerList = processLayers(layers); // Process layers
      setLayerList(processedLayerList); // Update layer list state
    }
  }, [jimuMapView]);

  return (
    <div className="widget-starter jimu-widget">
      <calcite-panel>
        <CalciteAccordion icon-position="start" icon-type="caret" scale="m">
          {/* <calcite-accordion icon-position="start" icon-type="caret" scale="m">
          <calcite-accordion-item
            description="Layer List"
            icon-start="filter"
            scale="m"
          > */}
          <h5 style={{ textAlign: "center" }}>Layer List</h5>

          {props.useMapWidgetIds && props.useMapWidgetIds.length === 1 && (
            <JimuMapViewComponent
              useMapWidgetId={props.useMapWidgetIds[0]}
              onActiveViewChange={activeViewChangeHandler}
            />
          )}
          <div>{layerList}</div>
          {/* </calcite-accordion-item>
        </calcite-accordion> */}
        </CalciteAccordion>
      </calcite-panel>
    </div>
  );
}
