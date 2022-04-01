import React from "react";
import { Link } from "react-router-dom";

import logo from "../../../assets/blinderLogo.svg";

function HeaderLeft() {
  return (
    <nav className="flex justify-center align-items-center">
      <Link to="/">
        <h5 className="h5 cursor-pointer mr-10 text-cyan-500 logo text-sm italic inline-flex justify-center align-items-center">
          <img src={logo} className="w-14 h-14" alt="logo" />
          BLINDer
        </h5>
      </Link>
      <Link to="/">
        <h6 className="h6 mr-6 cursor-pointer text-white text-hover-cyan-500">
          Home
        </h6>
      </Link>
      <Link to="/shop">
        <h6 className="h6 cursor-pointer text-white text-hover-cyan-500">
          Shop
        </h6>
      </Link>
    </nav>
  );
}

export default HeaderLeft;
