import React from "react";
import About from "../../Images/about.jpg";

const AboutUs = () => {
  return (
    <div className="md:px-[50px] px-6">
      <div className="max-w-[1500px] py-8 pb-16 md:py-16 mx-auto">
        <h2 className=" font-semibold text-center md:text-[2.5vw] text-[5.3vw]">Who we are</h2>
        <div className="grid pt-6 md:pt-8 lg:pt-12 grid-cols-1 md:gap-5 gap-6 lg:gap-8 md:grid-cols-2">
          <img className="w-full" src={About} alt="" />
          <div>
            <p className="lg:text-[1.4vw] md:text-[1.8vw] text-[4vw]">
              ICD Nigeria is a dynamic non-profit and non-governmental
              organisation dedicated to promoting cultural understanding and
              cooperation. Established in 2017, we are committed to building
              bridges between nations through cultural diplomacy. Our mission is
              to foster meaningful connections and drive positive change.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
