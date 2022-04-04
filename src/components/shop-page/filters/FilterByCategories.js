import React from "react";
import { filtersConstants } from "../../../context/constants/filtersConstants";
import { useFilters } from "../../../context/providers/FilterProvider";
import FilterListItem from "./FilterListItem";

const categoryFilterOptions = ["Jackets", "Skateboards", "Caps", "Accessories"];

function FilterByCategories() {
  const { filtersState, filtersDispatch } = useFilters();

  return (
    <ul className="flex flex-col">
      <li className="text-white pt-3 pb-3 text-lg">Categories</li>
      {categoryFilterOptions.map((listItem, i) => (
        <FilterListItem
          key={i}
          value={filtersState.categories[listItem.toLowerCase()]}
          onChange={() =>
            filtersDispatch({
              type: filtersConstants.FILTER_BY_CATEGORY,
              payload: listItem.toLowerCase(),
            })
          }
          text={listItem}
        />
      ))}
    </ul>
  );
}

export default FilterByCategories;
