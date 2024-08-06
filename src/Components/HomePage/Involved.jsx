import React from "react";

const Involved = () => {
  return (
    <div className="md:px-[50px] px-6">
      <div className="py-10">
        <h2 className="font-semibold text-center md:text-[2.5vw] text-[5.3vw]">
          Get involved
        </h2>
        <p className="lg:text-[1.3vw] md:text-[2vw] text-center text-[3.4vw]">
          Join us in building a better world
        </p>
      </div>
      <div className="grid max-w-[1500px] gap-y-12 mx-auto md:grid-cols-3">
        <div className=" py-8 pr-6 space-y-[16px] border-t md:border-r">
          <h2 className="md:text-[2vw] font-medium text-[4.3vw]">Volunteer</h2>
          <p className="xl:text-[1.3vw] md:text-[1.8vw] text-[3.8vw]">
            Share your passion and skills by volunteering with ICD Nigeria.
          </p>
        </div>
        <div className=" py-8 md:px-8 space-y-[16px] border-t md:border-r">
          <h2 className="md:text-[2vw] font-medium text-[4.3vw]">
            Partner with us
          </h2>
          <p className="xl:text-[1.3vw] md:text-[1.8vw] text-[3.8vw]">
            Collaborate with us to create impactful cultural diplomacy
            initiatives.
          </p>
        </div>
        <div className=" py-8 md:pl-6 space-y-[16px] border-t ">
          <h2 className="md:text-[2vw] font-medium text-[4.3vw]">Donate</h2>
          <p className="xl:text-[1.3vw] md:text-[1.8vw] text-[3.8vw]">
            Support our work by making a donation. Your contribution makes a
            difference.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Involved;
