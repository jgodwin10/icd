import React from "react";
import New from "../Components/News/New";

const News = () => {
  return (
    <div>
      <div className="bg-[url('/src/Images/hero.jpg')] before:absolute before:contents-[''] before:top-0 before:w-full before:h-full before:bg-[#00000066] relative bg-cover bg-center h-[60vh] md:h-[60vh] w-full">
        <div className=" absolute top-0 left-0  md:px-[50px] px-6 text-white h-full w-full">
          <div className="max-w-[1500px] flex-col justify-center items-center h-full w-full flex  mx-auto">
            <h1 className="font-semibold text-center text-[7vw] md:text-[5vw] md:leading-[5.6vw] lg:text-[3.5vw]">
              <span className="text-[#34b376]">ICD:</span> Inspiring change
              worldwide
            </h1>
            <h2 className="lg:text-[2vw] md:text-[3vw] text-center text-[6vw] ">
              Empowering communities through intercultural exchange.
            </h2>
          </div>
        </div>
      </div>

      <h2 className="md:text-[4.2vw] pt-10 py-8 text-center text-[6vw] font-semibold">
        News
      </h2>

      <New />
    </div>
  );
};

export default News;
