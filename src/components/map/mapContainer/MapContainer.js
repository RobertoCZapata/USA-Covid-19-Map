import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
  render() {
    const style = {
      width: "100%",
      height: "100%",
    };

    return (
      <Map
        google={this.props.google}
        style={style}
        initialCenter={{
          lat: 35.854885,
          lng: -90.081807,
        }}
        zoom={5}
        onClick={this.onMapClicked}
      >
        <Marker
          title={"The marker`s title will appear as a tooltip."}
          name={"SOMA"}
          position={{ lat: 37.778519, lng: -122.40564 }}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAidaeufH2Wlqxsy6v7A__VGlWx0QOLsJk",
})(MapContainer);
