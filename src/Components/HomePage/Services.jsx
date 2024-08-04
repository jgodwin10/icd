import React from "react";

const Services = () => {
  return (
    <div className="py-10 bg-[#34b376] md:px-[50px] px-6 text-white">
      <div className="">
        <h2 className="capitalize text-center font-semibold md:text-[2.5vw] text-[6.3vw]">
          Our Services
        </h2>
        <h3 className="capitalize text-center font-semibold md:text-[1.8vw] text-[4.5vw]">
          Empowering Global Understanding
        </h3>
        <div className=" py-10 lg:py-[4vw] text-white  ">
          <div className="grid max-w-[1500px] gap-y-12 mx-auto md:grid-cols-2">
            <div className=" py-8 pr-6 space-y-[16px] border-t md:border-r">
              <h2 className="md:text-[2vw] font-medium text-[4.3vw]">
                Cultural Diplomacy Programs
              </h2>
              <p className="xl:text-[1.3vw] md:text-[1.8vw] text-[3.8vw]">
                Experience the power of culture to create lasting change through
                our diverse range of programs.
              </p>
            </div>
            <div className=" py-8 md:px-8 space-y-[16px] border-t">
              <h2 className="md:text-[2vw] font-medium text-[4.3vw]">
                Training and Capacity Building
              </h2>
              <p className="xl:text-[1.3vw] md:text-[1.8vw] text-[3.8vw]">
                Equip yourself with the skills to navigate a globalised world
                through our comprehensive training programs.
              </p>
            </div>
            <div className=" py-8 pr-6 space-y-[16px] border-t md:border-r">
              <h2 className="md:text-[2vw] font-medium text-[4.3vw]">
                Research and Policy Development
              </h2>
              <p className="xl:text-[1.3vw] md:text-[1.8vw] text-[3.8vw]">
                We provide data-driven insights to inform effective cultural
                diplomacy strategies.
              </p>
            </div>
            <div className=" py-8 md:px-8 space-y-[16px] border-t">
              <h2 className="md:text-[2vw] font-medium text-[4.3vw]">
                Consulting and Advisory Services
              </h2>
              <p className="xl:text-[1.3vw] md:text-[1.8vw] text-[3.8vw]">
                Benefit from our expertise in crafting successful cultural
                diplomacy initiatives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
