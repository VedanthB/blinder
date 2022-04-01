import React from "react";

import jacketsImg from "../../assets/jackets-banner.jpeg";
import skateImg from "../../assets/skate-banner.jpeg";
import capsImg from "../../assets/caps-banner.jpeg";
import skateAccImg from "../../assets/skate-acc-banner.jpg";
import { Link } from "react-router-dom";

function FeaturedCategories() {
  return (
    <>
      <h3 className="h3 font-semibold text-center text-white mb-2">
        Featured Categories
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
          style={{ backgroundImage: `url(${jacketsImg})` }}
          className="h-52 w-52 text-white rounded-2xl shadow-xl flex justify-center align-items-center cursor-pointer home-page-category-card hover-active-card "
        >
          <h3 className="text-2xl card-overlay-text text-white shadow-2xl  p-2 w-full font-semibold">
            jackets
          </h3>
        </Link>
        <Link
          to="/shop"
          style={{ backgroundImage: `url(${skateImg})` }}
          className="h-52 w-52 text-white rounded-2xl shadow-xl flex justify-center align-items-center cursor-pointer home-page-category-card hover-active-card "
        >
          <h3 className="text-2xl card-overlay-text text-white shadow-2xl  p-2 w-full font-semibold">
            skateboards
          </h3>
        </Link>
        <Link
          to="/shop"
          style={{ backgroundImage: `url(${capsImg})` }}
          className="h-52 w-52  text-white rounded-2xl shadow-xl flex justify-center align-items-center cursor-pointer home-page-category-card hover-active-card "
        >
          <h3 className="text-2xl card-overlay-text text-white shadow-2xl  p-2 w-full font-semibold">
            caps
          </h3>
        </Link>
        <Link
          to="/shop"
          style={{ backgroundImage: `url(${skateAccImg})` }}
          className="h-52 w-52  text-white rounded-2xl shadow-xl flex justify-center align-items-center cursor-pointer home-page-category-card hover-active-card "
        >
          <h3 className="text-2xl card-overlay-text text-white shadow-2xl  p-2 w-full font-semibold">
            accessories
          </h3>
        </Link>
      </div>
    </>
  );
}

export default FeaturedCategories;
