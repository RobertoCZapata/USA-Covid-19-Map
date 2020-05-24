import React from "react";
import Sidebar from "./sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-300 min-h-screen">
      <div className="flex min-h-screen">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
