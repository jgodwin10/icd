import React from "react";
import Hero from "../Components/HomePage/Hero";
import AboutUs from "../Components/HomePage/AboutUs";
import Services from "../Components/HomePage/Services";
import Choose from "../Components/HomePage/Choose";
import Involved from "../Components/HomePage/Involved";
import Impact from "../Components/HomePage/Impact";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Choose />
      <Services />
      <Impact />
      <Involved />
    </div>
  );
};

export default Home;
