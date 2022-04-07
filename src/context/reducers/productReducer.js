import { productActions } from "../constants/productConstants";

const productReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case productActions.LOADING:
      return { ...state, loading: true };

    case productActions.ERROR:
      return { ...state, loading: false, error: payload };

    case productActions.GET_PRODUCTS_SUCCESS:
      return { ...state, loading: false, products: payload };

    default:
      return state;
  }
};

export { productReducer };
