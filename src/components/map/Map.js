import React from "react";
import MapContainer from "./mapContainer/MapContainer";

const Map = () => {
  return (
    <MapContainer
      isMarkerShown={false}
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAidaeufH2Wlqxsy6v7A__VGlWx0QOLsJk"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
};

export default Map;
