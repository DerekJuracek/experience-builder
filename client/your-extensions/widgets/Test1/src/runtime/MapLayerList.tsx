\import React, { useEffect, useState } from 'react';
import { JimuMapView, JimuMapViewComponent } from 'jimu-arcgis';

export default function MapLayerList({ jimuMapView}) {
  // const [jimuMapView, setJimuMapView] = useState(null);
  const [layers, setLayers] = useState([])

  // const onActiveViewChange = (jimuMapView) => {
  //   if (!jimuMapView) {
  //     console.log('JimuMapView is not available');
  //     return;
  //   }
  //   setJimuMapView(jimuMapView);
  // };

  useEffect(() => {
   if (jimuMapView && jimuMapView.view && jimuMapView.view.ready) {
  const map = jimuMapView.view.map;
  console.log(map)

  // const featureLayers = jimuMapView.view.ma;
  // console.log(featureLayers)

  const featureLayers = jimuMapView.view.map.layers.items;
  console.log(featureLayers);
  if (featureLayers.length > 0){
    setLayers(featureLayers)
  }


  // Proceed to work with the map
} else {
  console.log(layers)
  console.log('View is not initialized');
}
  }, [jimuMapView, layers]);
  
  return (
    <div>
      <h3>Feature Layers</h3>
      {layers.length > 0 ? (
        <ul>
          {layers.map(layer => (
            <li key={layer.id}>{layer.title}</li> // Use `title` instead of `name`
          ))}
        </ul>
      ) : (
        <p>No feature layers found.</p>
      )}
    </div>
  );
    }
