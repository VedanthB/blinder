import React, { useState } from "react";
import { useFilters } from "../../context/providers/FilterProvider";

function SortProductsDropdown() {
  const [selectedSort, setSelectedSort] = useState("default");

  const { filtersState, filtersDispatch } = useFilters();

  const handleSortChange = (e) => {
    setSelectedSort(e.target.value);

    filtersDispatch({ type: "SORT_BY", payload: selectedSort });
  };

  return (
    <div className="m-20 flex justify-center align-items-center">
      <div className="text-xl text-white mr-3">Sort By :</div>
      <div className="custom-select">
        <select
          className="bg-regal-blue-dark text-white text-xl"
          value={selectedSort}
          onChange={(e) => handleSortChange(e)}
        >
          <option value="default">Choose a filter</option>
          <option value="LOW_TO_HIGH">Low to High</option>
          <option value="HIGH_TO_LOW">high to Low</option>
        </select>
      </div>
    </div>
  );
}

export default SortProductsDropdown;
