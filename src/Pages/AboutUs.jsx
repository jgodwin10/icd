import React from "react";
import Introduction from "../Components/AboutUs/Introduction";
import Vision from "../Components/AboutUs/Vision";
import Impact from "../Components/AboutUs/Impact";
import Team from "../Components/AboutUs/Team";

const AboutUs = () => {
  return (
    <div>
      <div className="bg-[url('/src/Images/hero.jpg')] before:absolute before:contents-[''] before:top-0 before:w-full before:h-full before:bg-[#00000066] relative bg-cover bg-center h-[60vh] md:h-[60vh] w-full">
        <div className=" absolute top-0 left-0  md:px-[50px] px-6 text-white h-full w-full">
          <div className="max-w-[1500px] justify-center items-center h-full w-full flex  mx-auto">
            <h1 className="font-semibold md:max-w-[55vw] text-center text-[7vw]  md:leading-[5.6vw] md:text-[4.4vw]">
              About Us
            </h1>
          </div>
        </div>
      </div>

      <Introduction />
      <Vision />
      <Impact />
      <Team />
    </div>
  );
};

export default AboutUs;
