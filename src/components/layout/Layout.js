import React from "react";
import Sidebar from "./sidebar/Sidebar";

const Layout = ({ children, handleState, countryInfo }) => {
  return (
    <div className="bg-gray-300 min-h-screen">
      <div className="flex min-h-screen">
        <Sidebar handleState={handleState} countryInfo={countryInfo} />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
