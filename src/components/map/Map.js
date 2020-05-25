import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Polygon,
} from "react-google-maps";
import MarkerPoint from "./MarkerPoint/MarkerPoint";
const { compose, withProps, withHandlers } = require("recompose");

const {
  MarkerClusterer,
} = require("react-google-maps/lib/components/addons/MarkerClusterer");

const Map = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyAidaeufH2Wlqxsy6v7A__VGlWx0QOLsJk",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100vh` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withHandlers({
    onMarkerClustererClick: () => (markerClusterer) => {
      const clickedMarkers = markerClusterer.getMarkers();
      console.log(`Current clicked markers length: ${clickedMarkers.length}`);
      console.log(clickedMarkers);
    },
  }),
  withScriptjs,
  withGoogleMap
)(({ data, regions, onMarkerClustererClick }) => (
  <GoogleMap defaultZoom={4} defaultCenter={{ lat: 37.09, lng: -95.71 }}>
    <MarkerClusterer
      onClick={onMarkerClustererClick}
      averageCenter
      enableRetinaIcons
      gridSize={60}
    >
      <div>
        {regions.map((region, index) => {
          //let regionParsed = JSON.parse(region.geoJSON);
          let coordinates = region[0].map((coord) => ({
            lat: coord[1],
            lng: coord[0],
          }));

          return (
            <Polygon
              key={index}
              path={coordinates}
              options={{
                strokeColor: "#fc1e0d",
                strokeOpacity: 1,
                strokeWeight: 2,
              }}
            />
          );
        })}
        {data.map((item, index) => {
          return <MarkerPoint key={index} {...item} />;
        })}
      </div>
    </MarkerClusterer>
  </GoogleMap>
));

export default Map;
