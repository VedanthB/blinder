import { useContext, createContext, useReducer } from "react";
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

  let sortedProductsList = sortProducts(products, filtersState.sortBy);

  return (
    <FiltersContext.Provider
      value={{ filtersState, filtersDispatch, sortedProductsList }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export const useFilters = () => useContext(FiltersContext);
