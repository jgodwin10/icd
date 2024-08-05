import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const App = () => {
  const pathname = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <>
      <Navbar />
      <div className="md:mt-24 pb-12 mt-12">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default App;
