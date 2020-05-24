import React, { useEffect, useState } from "react";
import Layout from "./components/layouts/Layout";
import Map from "./components/map/Map";

const App = () => {
  // const [data, setData] = useState([]);

  // const fetchData = async () => {
  //   const response = await fetch("https://www.trackcorona.live/api/provinces");
  //   const data = await response.json();
  //   if (data.code === 200) {
  //     setData(data.data);
  //   }
  // };

  // useEffect(() => {
  //   // fetchData();
  // }, []);

  return (
    <Layout>
      <Map />
    </Layout>
  );
};

export default App;
