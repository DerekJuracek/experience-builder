import { React, AllWidgetProps } from "jimu-core";
/** ADD: **/
import { JimuMapViewComponent, JimuMapView } from "jimu-arcgis";
const { useState } = React;

const Widget = (props: AllWidgetProps<any>) => {
  // *** ADD ***//
  const [jimuMapView, setJimuMapView] = useState<JimuMapView>();

  const activeViewChangeHandler = (jmv: JimuMapView) => {
    if (jmv) {
      setJimuMapView(jmv);
    }
  };

  const formSubmit = (evt) => {
    evt.preventDefault();

    // *** ADD ***
    // create a new FeatureLayer
    const layer = new FeatureLayer({
      url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads_Styled/FeatureServer/0",
    });

    // Add the layer to the map (accessed through the Experience Builder JimuMapView data source)
    jimuMapView.view.map.add(layer);

    // More here soon
  };

  return (
    <div className="widget-starter jimu-widget">
      {props.useMapWidgetIds && props.useMapWidgetIds.length === 1 && (
        <JimuMapViewComponent
          useMapWidgetId={props.useMapWidgetIds?.[0]}
          onActiveViewChange={activeViewChangeHandler}
        />
      )}

      {/* *** ADD: *** */}
      <form onSubmit={formSubmit}>
        <div>
          <button>Add Layer</button>
        </div>
      </form>
    </div>
  );
};
