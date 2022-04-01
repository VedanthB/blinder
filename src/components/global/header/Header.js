import React from "react";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import HeaderSearchBar from "./HeaderSearchBar";

function Header() {
  return (
    <header className="w-full h-20 shadow bg-regal-blue-dark fixed z-50">
      <div className="flex justify-around align-items-center h-full w-full">
        <HeaderLeft />

        <HeaderSearchBar />

        <HeaderRight />
      </div>
    </header>
  );
}

export default Header;
