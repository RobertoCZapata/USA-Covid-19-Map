import React from "react";
import { Marker, InfoWindow } from "react-google-maps";
import { formatNumber } from "../../../utils/formatters";

const { compose, withStateHandlers } = require("recompose");

const marketState = withStateHandlers(
  () => ({
    isOpen: false,
  }),
  {
    handleClick: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    }),
  }
);

const MarkerPoint = compose(marketState)(
  ({
    latitude,
    longitude,
    confirmed,
    dead,
    recovered,
    location,
    isOpen,
    handleClick,
  }) => {
    return (
      <Marker
        position={{ lat: latitude, lng: longitude }}
        onClick={handleClick}
      >
        {isOpen && (
          <InfoWindow
            onCloseClick={handleClick}
            position={{ lat: latitude, lng: longitude }}
          >
            <div>
              <h2 className="text-lg">{location}</h2>
              <div className="text-gray-600">
                Total de casos {formatNumber(confirmed + recovered + dead)}
              </div>
              <hr className="my-2 border-b-2 border-gray-200" />
              <div className="text-yellow-700 mb-1">
                Activos: {formatNumber(confirmed)}
              </div>
              <div className="text-green-700 mb-1">
                Recuperados: {formatNumber(recovered)}
              </div>
              <div className="text-red-700 mb-1">
                Muertes: {formatNumber(dead)}
              </div>
            </div>
          </InfoWindow>
        )}
      </Marker>
    );
  }
);

export default MarkerPoint;
