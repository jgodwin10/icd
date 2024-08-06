import React from "react";

const Impact = () => {
  return (
    <div className="md:px-[50px] py-20 px-6">
      <div className="max-w-[1500px] mx-auto">
        <div className="bg-[url('/src/Images/slide.jpg')] before:absolute before:contents-[''] before:top-0 before:w-full before:h-full before:bg-[#00000096] relative bg-cover bg-center h-[60vh] md:h-[60vh] w-full">
          <div className=" absolute top-0 left-0  md:px-[50px] px-6 text-white h-full w-full">
            <div className="max-w-[1500px] justify-center flex-col items-center h-full w-full flex  mx-auto">
              <h1 className="font-semibold md:maxw-[55vw] text-center text-[7vw]  md:leading-[5.6vw] md:text-[4.4vw]">
                Creating a positive impact
              </h1>
              <p className="lg:text-[1.3vw] md:text-[2vw] text-center text-[3.4vw]">
                Discover how our work is making a difference From fostering
                intercultural dialogue to supporting community development, we
                are driving positive change on a global scale. Explore our
                success stories and learn how you can be part of our mission.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
