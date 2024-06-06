import React from "react";
import Logo from "./Logo";
import SearchLogo from "./SearchLogo";
import Navlinks from "./Navlinks";
import LineIcon from "./LineIcon";
// import icon from "/icon.png"
const NavBar = () => {
  return (
    <div className="flex items-center justify-between ml-[30px] mr-[30px] pt-7 sm:ml-8 sm:mr-8 sm:pt-1 md:ml-[65px] md:mr-[65px]">
      <Logo />
      <Navlinks/>
      <LineIcon/>
    </div>
  );
};

export default NavBar;
