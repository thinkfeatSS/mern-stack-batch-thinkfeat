import React from "react";
// import icon from "/icon.png"
const NavBar = () => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <img
          src="images/icon.png"
          alt="icon not found"
          className="hidden sm:block"
        />
        <img
          src="images/mobile_icon.png"
          alt="icon not found"
          className="sm:hidden"
        />
      </div>
      <div className="hidden sm:flex sm:p-5 sm:items-center">
        {/* links + search */}
        <a href="#" className="nav-links">Home</a>
        <a href="#" className="nav-links">About</a>
        <a href="#" className="nav-links">Project</a>
        <a href="#" className="nav-links">Blog</a>
        <a href="#" className="nav-links">Contant</a>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
      </div>
      <button>
        <img src="icons/Menu.png" alt="icon not found" className="sm:hidden" />
      </button>
    </div>
  );
};

export default NavBar;
