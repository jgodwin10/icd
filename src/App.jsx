import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="md:mt-24 mt-12">
        <Outlet />
      </div>
    </>
  );
};

export default App;
