import React, { useState } from "react";
import Logo from "../Images/Logo.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="md:px-[50px] shadow-2xl fixed left-0 w-full -top-1 px-6 bg-white py-2 z-[999999]">
      <div className="max-w-[1500px] flex items-center gap-4 justify-between mx-auto ">
        <Link to={"/"}>
          <img className="md:h-[90px] h-[50px]" src={Logo} alt="" />
        </Link>
        <div className="uppercase hidden text-[1.2vw] 2xl:text-base lg:flex items-center gap-3">
          <NavLink to={"/about-us"}>about</NavLink>
          <NavLink to={"/academics"}>academics</NavLink>
          <NavLink to={"/programs"}>programs</NavLink>
          <NavLink to={"/events"}>events</NavLink>
          {/* <NavLink>research</NavLink> */}
          <NavLink to={"/news"}>news</NavLink>
          <NavLink to={"/partnership"}>partnerships</NavLink>
          <NavLink to={"/"}>media</NavLink>
        </div>
        <div className="hidden lg:block">
          <button
            onClick={() => navigate("/partner")}
            className="bg-[#34b376] text-white font-semibold rounded-[5px] 2xl:text-base text-[1vw] hover:scale-[1.05] duration-500 h-[4vw] 2xl:h-[50px] w-[12vw] 2xl:w-[175px]"
          >
            Partner with us
          </button>
        </div>
        <CiMenuFries
          onClick={() => setNavOpen(true)}
          className="md:size-10 lg:hidden cursor-pointer size-8"
        />
      </div>

      <div
        className={`bg-white ${
          navOpen ? "translate-y-0" : "-translate-y-[150vh]"
        } lg:hidden flex items-center flex-col gap-4 duration-500 uppercase justify-center fixed top-0 left-0 w-full h-full`}
      >
        <FaTimes
          onClick={() => setNavOpen(false)}
          className="absolute top-10 cursor-pointer right-10 size-10"
        />
        <NavLink to={"/about-us"}>about</NavLink>
        <NavLink to={"/academics"}>academics</NavLink>
        <NavLink to={"/programs"}>programs</NavLink>
        <NavLink to={"/events"}>events</NavLink>
        {/* <NavLink>research</NavLink> */}
        <NavLink to={"/news"}>news</NavLink>
        <NavLink to={"/partnership"}>partnerships</NavLink>
        <NavLink to={"/"}>media</NavLink>
        <button
          onClick={() => navigate("/partner")}
          className="bg-[#34b376] text-white font-semibold rounded-[5px] 2xl:text-base  text-[14px] w-[140px] h-[50px] lg:text-[1vw] hover:scale-[1.05] duration-500 lg:h-[4vw] 2xl:h-[50px] lg:w-[12vw] 2xl:w-[175px]"
        >
          Partner with us
        </button>
      </div>
    </div>
  );
};

export default Navbar;
