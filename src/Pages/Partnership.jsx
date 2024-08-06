import React from "react";
import Img from "../Images/partner1.jpg";
import Img1 from "../Images/partner2.jpg";
import Img2 from "../Images/partner3.jpg";
import Img3 from "../Images/partner4.jpg";
import Img4 from "../Images/partner5.jpg";
import Img5 from "../Images/partner6.jpg";
import { useNavigate } from "react-router-dom";

const Partnership = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="bg-[url('/src/Images/hero.jpg')] before:absolute before:contents-[''] before:top-0 before:w-full before:h-full before:bg-[#00000066] relative bg-cover bg-center h-[60vh] md:h-[60vh] w-full">
        <div className=" absolute top-0 left-0  md:px-[50px] px-6 text-white h-full w-full">
          <div className="max-w-[1500px] justify-center items-center h-full w-full flex  mx-auto">
            <h1 className="font-semibold text-center text-[7vw] md:text-[5vw] md:leading-[5.6vw] lg:text-[3.5vw]">
              ICD Partnership
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
            In today's interconnected world, cultural exchange is more important
            than ever. At ICD Nigeria, we believe that by fostering
            collaboration and shared vision, we can create a more enlightened
            and inclusive global community. Our partnerships are instrumental in
            driving this transformation. Together, we reshape narratives,
            challenge norms, and celebrate diversity in all its forms.
          </p>
        </div>
      </div>

      <div className="py-10 bg-[#34b376] mt-8 md:px-[50px] px-6 text-white">
        <div className="">
          <h2 className="capitalize text-center font-semibold md:text-[2.5vw] text-[6.3vw]">
            Why partner with us?
          </h2>

          <div className=" py-10 lg:py-[4vw] text-white  ">
            <div className="grid max-w-[1500px] gap-y-12 mx-auto md:grid-cols-2">
              <div className=" py-8 pr-6 space-y-[16px] border-t md:border-r">
                <h2 className="md:text-[2vw] font-medium text-[4.3vw]">
                  Pioneering cultural evolution
                </h2>
                <p className="xl:text-[1.3vw] md:text-[1.8vw] text-[3.8vw]">
                  ICD Nigeria is at the forefront of shaping a world where
                  cultures thrive and coexist harmoniously. As a pioneering
                  institute, we blend innovation, research, and deep-rooted
                  experience to drive transformative cultural change. Partner
                  with us to create a lasting impact.
                </p>
              </div>
              <div className=" py-8 md:px-8 space-y-[16px] border-t">
                <h2 className="md:text-[2vw] font-medium text-[4.3vw]">
                  Global impact
                </h2>
                <p className="xl:text-[1.3vw] md:text-[1.8vw] text-[3.8vw]">
                  Partnering with ICD Nigeria means becoming a catalyst for
                  global change. Together, we can create a world where diversity
                  is celebrated, and cultures enrich each other. Our initiatives
                  transcend borders, touching lives and challenging biases. Join
                  us in building a more connected and harmonious planet.
                </p>
              </div>
              <div className=" py-8 pr-6 space-y-[16px] border-t md:border-r">
                <h2 className="md:text-[2vw] font-medium text-[4.3vw]">
                  Diverse collaborative opportunities
                </h2>
                <p className="xl:text-[1.3vw] md:text-[1.8vw] text-[3.8vw]">
                  We offer a range of flexible partnership options tailored to
                  your organisation's goals. From co-creating groundbreaking
                  research to delivering impactful cultural programs, we can
                  collaborate on initiatives that resonate with your mission.
                  Let's explore how we can combine our strengths to create
                  extraordinary outcomes.
                </p>
              </div>
              <div className=" py-8 md:pl-8  border-t">
                <div className="bg-black px-6 py-5 space-y-[16px]">
                  <h2 className="md:text-[2vw] font-medium text-[4.3vw]">
                    Join us in shaping the future
                  </h2>
                  <p className="xl:text-[1.2vw] md:text-[1.5vw] text-[2.8vw]">
                    Are you passionate about creating a more just and equitable
                    world? Let's collaborate.
                  </p>
                  <ul className=" lg:text-[1.2vw] md:text-[1.5vw] list-disc pl-8">
                    <li>Become a partner</li>
                    <li>Contact us to discuss partnership opportunities</li>
                  </ul>
                  <button
                    onClick={() => navigate("/partner")}
                    className="bg-[#34b376] text-white font-semibold rounded-[5px] 2xl:text-base text-[14px] md:text-[1.2vw] hover:scale-[1.05] duration-500 md:h-[4vw] 2xl:h-[50px] h-[40px] w-[140px] md:w-[12vw] 2xl:w-[175px]"
                  >
                    Partner with us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:px-[50px] pb-10 px-6">
        <h2 className="text-center py-10 font-semibold md:text-[2.5vw] text-[6.3vw]">
          Our current partners
        </h2>
        <div className="flex max-w-[1500px] gap-6 mx-auto flex-wrap items-center justify-between">
          <img src={Img} alt="" />
          <img src={Img1} alt="" />
          <img src={Img2} alt="" />
          <img src={Img3} alt="" />
          <img src={Img4} alt="" />
          <img src={Img5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Partnership;
