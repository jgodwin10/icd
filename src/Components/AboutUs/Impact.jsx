import React from "react";
import Img from "../../Images/impact.jpg";

const Impact = () => {
  return (
    <div className="md:px-[50px] py-6 md:py-10 px-6">
      <div className="max-w-[1500px] mx-auto">
        <h2 className="md:text-[4.2vw] text-[6vw] font-semibold">Our Impact</h2>
        <div className="grid pt-4 md:pt-6 gap-6 md:gap-8 md:grid-cols-2">
          <img className="w-full h-full object-cover" src={Img} alt="" />
          <p className="lg:text-[1.3vw] md:text-[2vw] flex items-center text-[3.4vw]">
            Our mission is to build a peaceful and prosperous world through the
            power of cultural diplomacy. By promoting understanding,
            cooperation, and unity among diverse communities, we leverage
            cultural exchange to enhance ethno-religious and community cohesion.
            Our initiatives extend beyond Nigeria's borders, showcasing our rich
            heritage and fostering intercultural relations globally. We aim to
            attract investment, boost tourism, and create opportunities for all,
            contributing to both Nigeria’s and the global economy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Impact;
