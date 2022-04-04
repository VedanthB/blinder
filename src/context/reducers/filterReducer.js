import { filtersConstants } from "../constants/filtersConstants";

// sortBy: null,
// categories: {
//   jackets: false,
//   accessories: false,
//   caps: false,
//   skateboards: false,
// },
// brands: {
//   vans: false,
//   "urban-monkey": false,
//   thrasher: false,
//   "santa-cruz": false,
// },
// ratingsGreaterThan: 0,
// priceLessThan: 20000,

export const filterReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case filtersConstants.FILTER_BY_BRAND:
      return {
        ...state,
        brands: { ...state.brands, [payload]: !state.brands[payload] },
      };
    case filtersConstants.FILTER_BY_CATEGORY:
      return {
        ...state,
        categories: {
          ...state.categories,
          [payload]: !state.categories[payload],
        },
      };
    case filtersConstants.FILTER_BY_RATING:
      return {
        ...state,
        ratingsGreaterThan: payload,
      };
    case filtersConstants.FILTER_BY_RATING:
      return {
        ...state,
        priceLessThan: payload,
      };
    case filtersConstants.SORT_BY:
      return {
        ...state,
        sortBy: payload,
      };

    default:
      return state;
  }
};
