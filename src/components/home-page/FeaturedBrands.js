import React from "react";

import santaCruzImg from "../../assets/santa-cruz-brand.png";
import urbanMonkeyImg from "../../assets/urban-money-brand.png";
import vansImg from "../../assets/vans-brand.png";
import thrasherImg from "../../assets/thrasher-brand.png";
import { Link } from "react-router-dom";

function FeaturedBrands() {
  return (
    <div>
      <h3 className="h3 font-semibold text-center text-white mb-2">
        Featured Brands
      </h3>
      <div style={{ margin: "auto" }} className="w-24 bg-cyan-500 h-1"></div>
      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>

      <div
        style={{ maxWidth: "60rem", margin: "auto", gap: "1rem" }}
        className="grid grid-cols-4 w-full"
      >
        <Link
          to="/shop"
          style={{ backgroundImage: `url(${santaCruzImg})` }}
          className="h-52 w-52  text-white rounded-2xl cursor-pointer flex justify-center align-items-center home-page-brand-card hover-active-card "
        ></Link>
        <Link
          to="/shop"
          style={{ backgroundImage: `url(${vansImg})` }}
          className="h-52 w-52  text-white rounded-2xl cursor-pointer flex justify-center align-items-center home-page-brand-card hover-active-card "
        ></Link>
        <Link
          to="/shop"
          style={{ backgroundImage: `url(${urbanMonkeyImg})` }}
          className="h-52 w-52  text-white rounded-2xl cursor-pointer flex justify-center align-items-center home-page-brand-card hover-active-card "
        ></Link>
        <Link
          to="/shop"
          style={{ backgroundImage: `url(${thrasherImg})` }}
          className="h-52 w-52 text-white rounded-2xl cursor-pointer flex justify-center align-items-center home-page-brand-card hover-active-card "
        ></Link>
      </div>
    </div>
  );
}

export default FeaturedBrands;
