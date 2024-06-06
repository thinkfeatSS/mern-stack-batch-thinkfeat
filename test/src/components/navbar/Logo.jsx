import React from "react";

function Logo() {
  return (
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
  );
}

export default Logo;
