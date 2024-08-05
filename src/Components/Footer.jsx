import React from "react";
import Logo from "../Images/logo.png";
import { LuMail, LuPhone } from "react-icons/lu";
import { FaFacebook, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#34b376] py-10 md:px-[50px] px-6">
      <div className="max-w-[1500px] mx-auto">
        <img className="text-white" src={Logo} alt="" />
        <div className="grid pt-8 gap-10 grid-cols-1 md:grid-cols-3">
          <div className="text-white space-y-[15px]">
            <h2 className="md:text-[22px] text-[18px] font-semibold">
              Contact Us
            </h2>
            <div className="font-medium md:text-base text-[14px] space-y-[5px]">
              <p>
                <span>Office Hours:</span> Monday to Friday ( 9am-5pm)
              </p>
              <p className="flex gap-3 items-center">
                <LuMail /> <a href="mailto:info@icdnig.org">info@icdnig.org</a>
              </p>
              <p className="flex gap-3 items-center">
                <LuPhone /> <a href="tel:+2348033514961">+234 8033 514 961</a>
              </p>
            </div>
            <h2 className="md:text-[22px] pt-8 text-[18px] font-semibold">
              Address
            </h2>
            <div className="font-medium md:text-base text-[14px] space-y-[5px]">
              <p className="flex gap-3 items-center">
                <a
                  target="_blank"
                  href="https://www.google.com.ng/maps/place/2+Pietersburg+Rd,+Wuse,+Abuja+904101,+Federal+Capital+Territory/@9.0789581,7.4604134,17z/data=!3m1!4b1!4m10!1m2!2m1!1sNo.+2+Pietersburg+Road,+Off+Nairobi+Street,+Off+Amino+Kano+Crescent+Wuse+ll,+Abuja.!3m6!1s0x104e0ae5dfa881b5:0x676c9a808470ed9!8m2!3d9.0789528!4d7.465279!15sClNOby4gMiBQaWV0ZXJzYnVyZyBSb2FkLCBPZmYgTmFpcm9iaSBTdHJlZXQsIE9mZiBBbWludSBLYW5vIENyZXNjZW50IFd1c2UgbGwsIEFidWphLpIBEGdlb2NvZGVkX2FkZHJlc3PgAQA!16s%2Fg%2F11j97cj_l_?entry=ttu"
                >
                  No. 2 Pietersburg Road, Off Nairobi Street, Off Amino Kano
                  Crescent Wuse ll, Abuja.
                </a>
              </p>
            </div>
          </div>
          <div className="md:mx-auto space-y-[15px] text-white">
            <h2 className="md:text-[22px] text-[18px] font-semibold">
              Quick Links
            </h2>
            <div className="flex-col capitalize md:text-base text-[14px] flex gap-2 font-medium">
              <Link to={"/about-us"}>about</Link>
              <Link to={"/academics"}>academics</Link>
              <Link to={"/programs"}>programs</Link>
              <Link to={"/events"}>events</Link>
              {/* <Link>research</Link> */}
              <Link to={"/news"}>news</Link>
              <Link to={"/partnership"}>partnerships</Link>
              <Link>media</Link>
            </div>
          </div>
          <div className="md:mx-auto space-y-[15px] text-white">
            <h2 className="md:text-[22px] text-[18px] font-semibold">
              Follow Us
            </h2>
            <div className="flex-col capitalize md:text-base text-[14px] flex gap-2 font-medium">
              <p className="flex gap-3 items-center">
                <FaFacebook /> Facebook
              </p>
              <p className="flex gap-3 items-center">
                <FaXTwitter /> Twitter
              </p>
              <p className="flex gap-3 items-center">
                <FaYoutube />
                Youtube
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
