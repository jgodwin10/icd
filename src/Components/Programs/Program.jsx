import React from "react";
import Img from "../../Images/event.jpg";

const Program = () => {
  const items = [
    {
      title: "ICD Nigeria centre for arts & culture",
      text: "Ignite your creativity. Our Center for Arts & Culture is your platform to explore, learn, and thrive. Immerse yourself in rich Nigerian traditions while embracing modern artistic expression. From music, dance, visual arts, to film, we offer programs to nurture your talent and connect you with a global artistic community.",
    },
    {
      title:
        "ICD Nigeria parliamentary alliance for human rights & global peace",
      text: "Driving change through legislation. ICD Nigeria's parliamentary alliance unites lawmakers, policymakers, and activists in the pursuit of a just and peaceful Nigeria. We champion human rights, foster dialogue, and develop effective policies to create a better future for all.",
    },
    {
      title: "ICD Nigeria academy for cultural diplomacy",
      text: "Build bridges, create change. ICD Nigeria's academy for cultural diplomacy equips you with the skills to foster global understanding and cooperation. Our programs blend theory with practice, empowering you to be a catalyst for positive change.",
    },
    {
      title: "ICD Nigeria Youth Education and Development Organization (YEDO)",
      text: "Empowering the next generation. YEDO offers comprehensive programs to develop young leaders and global citizens. Our rigorous curriculum prepares you for advanced studies in cultural diplomacy. Upon successful completion, we can recommend you to partner institutions for Master's or PhD programs in relevant fields.",
    },
  ];

  return (
    <div className="md:px-[50px] lg:py-20 md:py-16 py-10 px-6">
      <div className="max-w-[1500px] mx-auto">
        <h2 className="md:text-[4.2vw] text-center text-[6vw] font-semibold">
          Our programs
        </h2>
        <div className="grid grid-cols-1 py-8 md:pt-16 gap-y-10 md:grid-cols-2">
          {items.map((item, index) => {
            return (
              <div
                key={index}
                className={`space-y-5 py-8  border-t  ${
                  (index + 1) % 2 == 0 ? "md:pl-8" : "md:border-r md:pr-8"
                } `}
              >
                <img className="w-full" src={Img} alt="" />
                <h2 className="md:text-[22px] font-semibold">{item.title}</h2>
                <p className="text-[14px] text-neutral-500 font-medium">
                  {item.text}
                </p>
                <button className="text-[#34b376] font-semibold">
                  Learn More
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Program;
