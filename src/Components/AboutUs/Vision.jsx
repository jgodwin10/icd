import React from "react";
import Img from "../../Images/aboutpage.jpg";

const Vision = () => {
  return (
    <div className="md:px-[50px] py-10 px-6">
      <div className="max-w-[1500px] mx-auto">
        <h2 className="md:text-[4.2vw] text-[6vw] font-semibold">Our Vision</h2>
        <div className="grid pt-3 md:pt-6 gap-6 md:gap-8 md:grid-cols-2">
          <p className="lg:text-[1.3vw] md:text-[2vw] text-[3.4vw]">
            At ICD Nigeria, we believe that cultural diversity is a powerful
            asset, not just within Nigeria, but around the world. By harnessing
            this potential, we can overcome challenges and build a united global
            community. We foster dialogue, education, and collaboration to
            promote understanding and trust among diverse cultures. Our work
            extends beyond Nigeria's borders, creating a positive image of our
            nation while actively contributing to global peace and prosperity.
          </p>
          <img className="w-full h-full" src={Img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Vision;
