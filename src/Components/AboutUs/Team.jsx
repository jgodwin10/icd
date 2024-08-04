import React from "react";
import Img from "../../Images/team1.jpg";
import Img1 from "../../Images/team2.jpg";
import Img2 from "../../Images/team3.jpg";
import Img3 from "../../Images/team4.jpg";

const Team = () => {
  return (
    <div className="md:px-[50px] py-8 md:py-14 px-6">
      <div className="max-w-[1500px] mx-auto">
        <h2 className="md:text-[4.2vw] text-[6vw] font-semibold">Our Team</h2>
        <p className="lg:text-[1.3vw] md:text-[2vw] text-[3.4vw]">
          Our dedicated team of experts is passionate about creating a better
          world through cultural diplomacy. Led by our visionary Director, we
          bring together diverse perspectives from various fields to drive our
          global mission forward. Our team includes professionals in cultural
          exchange, international relations, vocational training, program
          management, and communications, all working collaboratively to foster
          intercultural relations and make a lasting impact. Meet the
          individuals who are making a difference around the globe.
        </p>
        <div className="grid pt-4 md:pt-8 gap-y-12 gap-x-6 md:text-[14px] lg:text-base lg:gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="row-span-2">
            <img className="w-full h-full" src={Img} alt="" />
            <p className="pt-2">Dickson Omoregie</p>
          </div>
          <div className="grid h-full row-span-2 gap-12 ">
            <div>
              <img className="w-full h-full" src={Img1} alt="" />
              <p className="pt-2">Dr. Sarah N. Jibril</p>
            </div>
            <div>
              <img className="w-full h-full" src={Img2} alt="" />
              <p className="pt-2">Sir Micheal Ejiofor</p>
            </div>
          </div>
          <div className="lg:row-span-2">
            <img className="w-full h-full" src={Img3} alt="" />
            <p className="pt-2">Anne Abok</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
