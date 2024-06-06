import React from "react";
import SearchLogo from "./SearchLogo";

const Navlinks = () => {
  return (
    <div className="hidden sm:flex sm:p-5 sm:items-center">
      {/* links + search */}
      <a href="#" className="nav-links">
        Home
      </a>
      <a href="#" className="nav-links">
        About
      </a>
      <a href="#" className="nav-links">
        Project
      </a>
      <a href="#" className="nav-links">
        Blog
      </a>
      <a href="#" className="nav-links">
        Contant
      </a>
      <SearchLogo />
    </div>
  );
};

export default Navlinks;
