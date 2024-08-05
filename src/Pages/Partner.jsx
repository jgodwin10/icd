import React from "react";

const Partner = () => {
  return (
    <div>
      <div className="bg-[url('/src/Images/hero.jpg')] before:absolute before:contents-[''] before:top-0 before:w-full before:h-full before:bg-[#00000066] relative bg-cover bg-center h-[60vh] md:h-[60vh] w-full">
        <div className=" absolute top-0 left-0  md:px-[50px] px-6 text-white h-full w-full">
          <div className="max-w-[1500px] justify-center items-center h-full w-full flex  mx-auto">
            <h1 className="font-semibold md:max-w-[55vw] text-center text-[7vw]  md:leading-[5.6vw] md:text-[4.4vw]">
              Partner With Us
            </h1>
          </div>
        </div>
      </div>

      <div className="md:px-[50px] py-6 md:py-10 px-6">
        <div className="max-w-[1500px] space-y-[5px] mx-auto">
          <div>
            <h2 className="md:text-[45px] text-center text-[6vw] font-semibold">
              Got a burning question or a world-changing idea?
            </h2>
            <p className="lg:text-[1.3vw] md:text-[2vw] text-[3.4vw]">
              We're all ears (and eyes!). Whether you're a curious mind seeking
              enlightenment, a potential partner looking to change the world, or
              just someone who really likes cultural diplomacy, we want to hear
              from you. Drop us a line, give us a shout, or send a carrier
              pigeon – just make some noise!
            </p>
          </div>
          <div className="grid pt-16 gap-10 lg:grid-cols-2">
            <div className="shadow-2xl space-y-6 w-full p-6 md:p-10">
              <div className="flex gap-4 flex-col lg:flex-rows items-center">
                <label className="w-full" htmlFor="">
                  <p className="text-[18px]  font-semibold pb-2">First Name</p>
                  <input
                    className="w-full outline-[#34b376] border py-5 px-4"
                    type="text"
                    placeholder="Enter First Name"
                  />
                </label>
                <label className="w-full" htmlFor="">
                  <p className="text-[18px] font-semibold pb-2">Last Name</p>
                  <input
                    className="w-full outline-[#34b376] border py-5 px-4"
                    type="text"
                    placeholder="Enter Last Name"
                  />
                </label>
              </div>
              <div>
                <label className="w-full" htmlFor="">
                  <p className="text-[18px] font-semibold pb-2">Email</p>
                  <input
                    className="w-full outline-[#34b376] border py-5 px-4"
                    type="email"
                    placeholder="Enter Your Email Address"
                  />
                </label>
              </div>
              <div>
                <label className="w-full" htmlFor="">
                  <p className="text-[18px] font-semibold pb-2">Message</p>
                  <textarea
                    className="w-full outline-[#34b376] border py-5 px-4"
                    placeholder="Enter Your Message"
                    rows={6}
                  />
                </label>
              </div>
              <button className="bg-[#34b376] text-white font-semibold hover:scale-[1.05] duration-500 rounded-[5px] h-[50px] w-[175px]">
                Send message
              </button>
            </div>

            <div>
              <h2 className="md:text-[30px] pb-6 text-[5.4vw] font-semibold">
                Important details
              </h2>
              <ul className=" space-y-[10px] md:text-base text-[14px]">
                <li>
                  Our office hours are from Monday to Friday, 9 am to 5 pm WAT
                  (unless we're busy changing the world).
                </li>
                <li>
                  We try to respond to all inquiries within 24 hours, but if
                  we're busy saving a culture, it might take a little longer.
                </li>
                <li>
                  For urgent matters, please call us at +2348033514961 or visit
                  our office at No. 2 Pietersburg Road, Off Nairobi Street, Off
                  Amino Kano Crescent Wuse ll, Abuja.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
