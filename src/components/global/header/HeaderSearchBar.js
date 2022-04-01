import React from "react";
import { Link } from "react-router-dom";

function HeaderSearchBar() {
  return (
    <form className="search__bar__container">
      <input type="text" className="search__bar" placeholder="Search" />
      <Link to="/">
        <i className="fas fa-search search__icon text-cyan-500"></i>
      </Link>
    </form>
  );
}

export default HeaderSearchBar;
