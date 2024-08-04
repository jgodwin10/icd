import React from "react";
import Academy from "../Components/Academics/Academy";
import Discover from "../Components/Academics/Discover";

const Academics = () => {
  return (
    <div>
      <div className="bg-[url('/src/Images/hero.jpg')] before:absolute before:contents-[''] before:top-0 before:w-full before:h-full before:bg-[#00000066] relative bg-cover bg-center h-[60vh] md:h-[60vh] w-full">
        <div className=" absolute top-0 left-0  md:px-[50px] px-6 text-white h-full w-full">
          <div className="max-w-[1500px] justify-center items-center h-full w-full flex  mx-auto">
            <h1 className="font-semibold text-center text-[7vw] md:text-[5vw] md:leading-[5.6vw] lg:text-[3.5vw]">
              <span className="text-[#34b376]">ICD academics:</span> Your
              journey starts here
            </h1>
          </div>
        </div>
      </div>
      <Academy />
      <Discover />
    </div>
  );
};

export default Academics;
