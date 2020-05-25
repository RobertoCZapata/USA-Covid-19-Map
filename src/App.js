import React, { useState, useEffect } from "react";
import Layout from "./components/layout/Layout";
import Map from "./components/map/Map";
import statesJson from "./states.json";

const App = () => {
  const [data, setData] = useState([]);
  const [regions, setRegions] = useState([]);
  const [countryInfo, setCountryInfo] = useState();

  const fetchData = async (selectedState = "") => {
    let url = "https://www.trackcorona.live/api/provinces";
    if (selectedState !== "") {
      url = url + "/" + statesJson[selectedState];
    }

    const response = await fetch(url);
    const data = await response.json();
    if (data.code === 200) {
      setData(data.data.filter((item) => item.country_code === "us"));
    }
  };

  const fetchStates = async (stateSelected) => {
    const response = await fetch(
      `https://theunitedstates.io/districts/states/${stateSelected}/shape.geojson`
    );
    const data = await response.json();
    setRegions(data.coordinates);
  };

  const fetchByCountry = async () => {
    const response = await fetch(
      "https://www.trackcorona.live/api/countries/us"
    );
    const data = await response.json();
    if (data.code === 200) {
      setCountryInfo(data.data[0]);
    }
  };

  const handleState = (value) => {
    fetchStates(value);
    fetchData(value);
  };

  useEffect(() => {
    fetchByCountry();
    fetchData();
  }, []);

  return (
    <div>
      <Layout handleState={handleState} countryInfo={countryInfo}>
        <Map data={data} regions={regions} />
      </Layout>
    </div>
  );
};

export default App;
