import React, { useState } from "react";

function SortProductsDropdown() {
  const [selectedFilter, setSelectedFilter] = useState("default");

  return (
    <div className="m-20 flex justify-center align-items-center">
      <div className="text-xl text-white mr-3">Sort By :</div>
      <div className="custom-select">
        <select
          className="bg-regal-blue-dark text-white text-xl"
          value={selectedFilter}
          onChange={(e) => setSelectedFilter(e.target.value)}
        >
          <option value="default">Choose a filter</option>
          <option value="Best Selling">Best Selling</option>
          <option value="New Arrivals">New Arrivals</option>
          <option value="High to Low">high to Low</option>
        </select>
      </div>
    </div>
  );
}

export default SortProductsDropdown;
