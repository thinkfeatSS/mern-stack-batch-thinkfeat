import React from "react";
import Logo from "./Logo";
import SearchLogo from "./SearchLogo";
import Navlinks from "./Navlinks";
import LineIcon from "./LineIcon";
// import icon from "/icon.png"
const NavBar = () => {
  return (
    <div className="flex items-center justify-between ml-[30px] mr-[30px] sm:ml-8 sm:mr-8 md:ml-[65px] md:mr-[65px] pt-7 sm:pt-1">
      <Logo />
      <Navlinks/>
      <LineIcon/>
    </div>
  );
};

export default NavBar;
