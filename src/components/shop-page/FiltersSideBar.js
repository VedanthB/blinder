import React from "react";

function FiltersSidebar() {
  return (
    <div
      style={{ top: "8rem" }}
      className="filters-sidebar-container relative ml-10 p-5"
    >
      <div className="flex justify-between align-items-center">
        <div className="font-semibold text-xl text-white">Filters</div>
        <div className="btn btn-link-cyan text-white">clear</div>
      </div>

      <div className="spacer-1rem"></div>

      <div className="divider"></div>

      <div className="spacer-1rem"></div>

      <ul className="flex flex-col">
        <li className="text-white pt-3 pb-3 text-lg">Categories</li>
        <li className="pt-3 pb-3">
          <label className="text-white text-lg">
            <input type="checkbox" value={""} className="mr-3" />
            Jackets
          </label>
        </li>
        <li className="pb-3">
          <label className="text-white text-lg">
            <input type="checkbox" value={""} className="mr-3" />
            skateboards
          </label>
        </li>
        <li className="pb-3">
          <label className="text-white  text-lg">
            <input type="checkbox" value={""} className="mr-3" />
            caps
          </label>
        </li>
        <li className="pb-3">
          <label className="text-white text-lg">
            <input type="checkbox" value={""} className="mr-3" />
            accessories
          </label>
        </li>
      </ul>

      <div className="spacer-1rem"></div>

      <div className="divider"></div>

      <div className="spacer-1rem"></div>

      <ul className="flex flex-col">
        <li className="text-white pt-3 pb-3 text-lg">Brands</li>
        <li className="pt-3 pb-3">
          <label className="text-white text-lg">
            <input type="checkbox" value={""} className="mr-3" />
            Santa Cruz
          </label>
        </li>
        <li className="pb-3">
          <label className="text-white text-lg">
            <input type="checkbox" value={""} className="mr-3" />
            Vans of The Wall
          </label>
        </li>
        <li className="pb-3">
          <label className="text-white text-lg">
            <input type="checkbox" value={""} className="mr-3" />
            Urban Monkey
          </label>
        </li>
        <li className="pb-3">
          <label className="text-white text-lg">
            <input type="checkbox" value={""} className="mr-3" />
            Thrasher
          </label>
        </li>
      </ul>
    </div>
  );
}

export default FiltersSidebar;
