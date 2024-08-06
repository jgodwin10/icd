import React, { useEffect, useState } from "react";

const Choose = () => {
  const [num, setNum] = useState(0);

  const items = [
    {
      title: "Expertise",
      text: "Benefit from our team of seasoned experts in cultural diplomacy and intercultural relations.",
    },
    {
      title: "Impact",
      text: "Join us in creating tangible and lasting change through our impactful programs.",
    },
    {
      title: "Customization",
      text: "We tailor our services to meet your specific needs and goals.",
    },
    {
      title: "Collaboration",
      text: "Build strong partnerships with us to achieve shared objectives.",
    },
    {
      title: "Commitment",
      text: "We are dedicated to promoting cultural understanding and cooperation.",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (num == 4) {
        setNum(0);
      } else {
        setNum(num + 1);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [num]);

  return (
    <div className="pt-10">
      <div className="max-w-[1600px] pb-12 md:px-[50px] px-6 space-y-[5px] mx-auto">
        <h2 className=" font-semibold text-[#34b376] border-b pb-2 md:text-[2.5vw] text-[5.3vw]">
          Why Choose Us
        </h2>
        <h2 className="font-semibold text-center md:text-[2.5vw] text-[5.3vw]">
          Your partner in cultural diplomacy
        </h2>
        <p className="lg:text-[1.3vw] md:text-[2vw] text-center text-[3.4vw]">
          Discover why ICD Nigeria is the leading choice for fostering global
          understanding.
        </p>
      </div>

      <div className="bg-[url('/src/Images/slide.jpeg')] before:absolute before:contents-[''] before:top-0 before:w-full before:h-full before:bg-[#00000096] relative bg-cover bg-center h-[60vh] md:h-[60vh] w-full">
        <div className=" absolute top-0 left-0  md:px-[50px] px-6 text-white h-full w-full">
          <div className="max-w-[1500px] justify-center flex-col items-center h-full w-full flex  mx-auto">
            <h1 className="font-semibold md:max-w-[55vw] text-center text-[7vw]  md:leading-[5.6vw] md:text-[4.4vw]">
              {items[num]?.title}
            </h1>
            <p className="lg:text-[1.3vw] md:text-[2vw] text-center text-[3.4vw]">
              {items[num]?.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
