import React from "react";
import Program from "../Components/Programs/Program";

const Programs = () => {
  return (
    <div>
      <div className="bg-[url('/src/Images/hero.jpg')] before:absolute before:contents-[''] before:top-0 before:w-full before:h-full before:bg-[#00000066] relative bg-cover bg-center h-[60vh] md:h-[60vh] w-full">
        <div className=" absolute top-0 left-0  md:px-[50px] px-6 text-white h-full w-full">
          <div className="max-w-[1500px] justify-center items-center h-full w-full flex  mx-auto">
            <h1 className="font-semibold text-center text-[7vw] md:text-[5vw] md:leading-[5.6vw] lg:text-[3.5vw]">
              <span className="text-[#34b376]">ICD Nigeria:</span> Your path to
              impact
            </h1>
          </div>
        </div>
      </div>

      <div className="md:px-[50px] py-8 md:py-12 px-6">
        <div className="max-w-[1500px] space-y-[5px] mx-auto">
          {/* <h2 className="md:text-[4vw] text-[6vw] font-semibold">
          ICD academics
        </h2> */}
          <p className="lg:text-[1.3vw] md:text-[2vw] text-[3.4vw]">
            Discover your passion at ICD Nigeria. We offer a range of programs
            that blend Nigerian heritage with global perspectives. Whether
            you're an artist, activist, or diplomat, we have something for you.
            Explore our programs below and start your journey today.
          </p>
        </div>
      </div>
      <Program />
    </div>
  );
};

export default Programs;
