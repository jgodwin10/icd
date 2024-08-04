import React from "react";
import About from "../../Images/about.jpg";

const Discover = () => {
  return (
    <>
      <div className="py-10 mt-4 bg-[#34b376] md:px-[50px] px-6 text-white">
        <div className="">
          <h2 className="capitalize text-center font-semibold md:text-[2.5vw] text-[6.3vw]">
            Discover our programs
          </h2>
          {/* <h3 className="capitalize text-center font-semibold md:text-[1.8vw] text-[4.5vw]">
          Empowering Global Understanding
        </h3> */}
          <div className=" py-10 lg:py-[4vw] text-white  ">
            <div className="grid max-w-[1500px] gap-y-12 mx-auto md:grid-cols-2">
              <div className=" py-8 pr-6 space-y-[16px] border-t md:border-r">
                <h2 className="md:text-[2vw] font-medium text-[4.3vw]">
                  Certificates
                </h2>
                <p className="xl:text-[1.3vw] md:text-[1.8vw] text-[3.8vw]">
                  Acquire specialised skills and knowledge to advance your
                  career in various fields, including leadership, vocational
                  training, communication, and project management.
                </p>
              </div>
              <div className=" py-8 md:px-8 space-y-[16px] border-t">
                <h2 className="md:text-[2vw] font-medium text-[4.3vw]">
                  Diplomas
                </h2>
                <p className="xl:text-[1.3vw] md:text-[1.8vw] text-[3.8vw]">
                  Build a solid foundation in your chosen field and gain
                  practical experience through our partnerships with leading
                  institutions offering diploma programs.
                </p>
              </div>
              <div className=" py-8 pr-6 space-y-[16px] border-t md:border-r">
                <h2 className="md:text-[2vw] font-medium text-[4.3vw]">
                  Advanced studies
                </h2>
                <p className="xl:text-[1.3vw] md:text-[1.8vw] text-[3.8vw]">
                  Partnering with leading academic institutions, we offer
                  pathways to Master's and PhD programs in diverse disciplines.
                </p>
              </div>
              {/* <div className=" py-8 md:px-8 space-y-[16px] border-t">
              <h2 className="md:text-[2vw] font-medium text-[4.3vw]">
                Consulting and Advisory Services
              </h2>
              <p className="xl:text-[1.3vw] md:text-[1.8vw] text-[3.8vw]">
                Benefit from our expertise in crafting successful cultural
                diplomacy initiatives.
              </p>
            </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="md:px-[50px] px-6">
        <div className="py-10 max-w-[1500px] mx-auto">
          <h2 className="py-6 border-y font-semibold md:text-[3vw] lg:text-[2vw] text-[6.3vw]">
            Ready to embark on your journey?
          </h2>
          <p className="xl:text-[1.3vw] md:text-[1.8vw] pt-8 text-[3.8vw]">
            Contact us at{" "}
            <a
              className="text-[#34b376] font-semibold"
              href="mailto:info@icdnig.org"
            >
              info@icdnig.org
            </a>{" "}
            to explore your academic options and learn how ICD Nigeria can
            support your goals
          </p>
        </div>
      </div>
    </>
  );
};

export default Discover;
