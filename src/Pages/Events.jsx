import React from "react";
import Img from "../Images/news1.jpg";

const Events = () => {
  const items = [
    {
      img: Img,
      title: "Uniting Nigeria Through Culture",
      body: "Discover the vibrant tapestry of Nigeria's diverse cultures at our upcoming summit. Let's bridge divides, celebrate our shared heritage, and elevate Nigeria's global standing. Join us in fostering unity, promoting intercultural exchange, and unlocking the immense potential of our nation's rich cultural heritage.",
      text: "Are you ready to be part of the change?",
    },
  ];

  return (
    <div>
      <div className="bg-[url('/src/Images/hero.jpg')] before:absolute before:contents-[''] before:top-0 before:w-full before:h-full before:bg-[#00000066] relative bg-cover bg-center h-[60vh] md:h-[60vh] w-full">
        <div className=" absolute top-0 left-0  md:px-[50px] px-6 text-white h-full w-full">
          <div className="max-w-[1500px] justify-center items-center h-full w-full flex  mx-auto">
            <h1 className="font-semibold md:max-w-[55vw] text-center text-[7vw]  md:leading-[5.6vw] md:text-[4.4vw]">
              Events
            </h1>
          </div>
        </div>
        
      </div>
      <div className="max-w-[1500px] py-12 md:py-20 md:px-[50px] px-6 mx-auto">
        <div className="grid grid-cols-1 py- gap-y-10 md:grid-cols-2">
          {items.map((item, index) => {
            return (
              <div
                key={index}
                className={`space-y-3 py-8  border-t  ${
                  (index + 1) % 2 == 0 ? "md:pl-8" : "md:border-r md:pr-8"
                } `}
              >
                <img className="w-full" src={item.img} alt="" />

                <h2 className="md:text-[22px] pt-4 font-semibold">
                  {item.title}
                </h2>

                <p className="text-[14px] text-neutral-500 font-medium">
                  {item.body}
                </p>
                <p className="text-neutral-500 font-semibold text-[14px]">
                  {item.text}
                </p>
                <button className="bg-[#34b376] text-white font-semibold hover:scale-[1.05] text-[14px] duration-500 rounded-[5px] h-[50px] w-[150px]">
                  Register
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Events;
