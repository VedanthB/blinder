import { useContext, createContext, useReducer } from "react";
import { filterByCategory } from "../../utils/filterProducts";
import { sortProducts } from "../../utils/sortProducts";
import { filterReducer } from "../reducers/filterReducer";
import { useProducts } from "./ProductProvider";

const FiltersContext = createContext();

const filtersInitialState = {
  sortBy: null,
  categories: {
    jackets: false,
    accessories: false,
    caps: false,
    skateboards: false,
  },
  brands: {
    vans: false,
    "urban-monkey": false,
    thrasher: false,
    "santa-cruz": false,
  },
  ratingsGreaterThan: 0,
  priceLessThan: 20000,
};

export const FiltersProvider = ({ children }) => {
  const [filtersState, filtersDispatch] = useReducer(
    filterReducer,
    filtersInitialState
  );

  const {
    state: { products },
  } = useProducts();

  let filteredProductsList = filterByCategory(
    products,
    filtersState.categories
  );

  let sortedFilteredList = sortProducts(
    filteredProductsList,
    filtersState.sortBy
  );

  console.log(sortedFilteredList);

  return (
    <FiltersContext.Provider
      value={{ filtersState, filtersDispatch, sortedFilteredList }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export const useFilters = () => useContext(FiltersContext);
