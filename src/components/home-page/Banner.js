import React from "react";
import { Link } from "react-router-dom";

import heroImg from "../../assets/heroImg.jpg";

function Banner() {
  return (
    <div
      className="p-10"
      style={{
        background: `url(${heroImg}) no-repeat center/100% 100%`,
        minHeight: "13rem",
      }}
    >
      <div className="flex flex-col align-items-center">
        <h3 className="text-5xl font-semibold text-regal-blue mb-5">
          CLEARANCE SALE
        </h3>

        <h6 className="text-xl text-regal-blue">
          Upto <span className="text-3xl">60%</span> off on skateboards and
          accessories
        </h6>

        <div class="spacer-3rem"></div>

        <Link to="/shop" className="btn bg-regal-blue-dark text-white mr-5">
          Shop Now
        </Link>

        <div class="spacer-3rem"></div>
      </div>
    </div>
  );
}

export default Banner;
