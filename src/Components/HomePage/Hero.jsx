import React from "react";

const Hero = () => {
  return (
    <div className="bg-[url('/src/Images/hero.jpg')] before:absolute before:contents-[''] before:top-0 before:w-full before:h-full before:bg-[#00000066] relative bg-cover bg-center h-[80vh] md:h-[100vh] w-full">
      <div className=" absolute top-0 left-0  md:px-[50px] px-6 text-white md:pt-[11vw] h-full w-full">
        <div className="max-w-[1500px] flex-col items-center md:items-start md:justify-normal justify-center h-full w-full flex  mx-auto">
          <h1 className="font-semibold md:max-w-[55vw] md:text-start text-[7vw] text-center md:leading-[5.6vw] md:text-[4.4vw]">
            Bridging Cultures, Building a Better World
          </h1>
          <h2 className="md:text-[2.5vw] pt-2 text-[4.3vw] md:text-start text-center md:max-w-[50vw]">
            <span className="text-[#34b376] font-semibold">ICD Nigeria:</span>{" "}
            Fostering Global Harmony Through Shared Heritage
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
