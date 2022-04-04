import React from "react";
import { filtersConstants } from "../../../context/constants/filtersConstants";
import { useFilters } from "../../../context/providers/FilterProvider";
import FilterListItem from "./FilterListItem";

const brands = ["Santa Cruz", "Vans", "Urban Monkey", "Thrasher"];

function FilterByBrands() {
  const { filtersState, filtersDispatch } = useFilters();

  return (
    <ul className="flex flex-col">
      <li className="text-white pt-3 pb-3 text-lg">Brands</li>
      {brands.map((listItem, i) => (
        <FilterListItem
          key={i}
          value={filtersState.categories[listItem.toLowerCase()]}
          onChange={() =>
            filtersDispatch({
              type: filtersConstants.FILTER_BY_BRAND,
              payload: listItem.toLowerCase(),
            })
          }
          text={listItem}
        />
      ))}
    </ul>
  );
}

export default FilterByBrands;
