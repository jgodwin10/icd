import React from "react";
import Logo from "../Images/Logo.svg";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="md:px-[50px] fixed left-0 w-full -top-1 px-6 bg-white py-2 z-[999999]">
      <div className="max-w-[1500px] flex items-center gap-4 justify-between mx-auto ">
        <Link to={"/"}>
          <img className="md:h-[90px] h-[50px]" src={Logo} alt="" />
        </Link>
        <div className="uppercase hidden text-[1.2vw] 2xl:text-base lg:flex items-center gap-3">
          <NavLink to={"/about-us"}>about</NavLink>
          <NavLink to={"/academics"}>academics</NavLink>
          <NavLink to={"/programs"}>programs</NavLink>
          <NavLink>events</NavLink>
          <NavLink>research</NavLink>
          <NavLink to={"/news"}>news</NavLink>
          <NavLink to={"/partnership"}>partnerships</NavLink>
          <NavLink>media</NavLink>
        </div>
        <div className="hidden lg:block">
          <button className="bg-[#34b376] text-white font-semibold rounded-[5px] 2xl:text-base text-[1vw] hover:scale-[1.05] duration-500 h-[4vw] 2xl:h-[50px] w-[12vw] 2xl:w-[175px]">
            Partner with us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
