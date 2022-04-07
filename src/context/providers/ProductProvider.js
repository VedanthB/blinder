import { useContext, createContext, useReducer, useEffect } from "react";
import { getProductsService } from "../../services/productServices";
import { productActions } from "../constants/productConstants";
import { getProducts } from "../../utils/getProducts";
import { productReducer } from "../reducers/productReducer";

const ProductContext = createContext();

const initState = {
  products: [],
  loading: false,
  error: null,
};

export const ProductProvider = ({ children }) => {
  const [state, productsDispatch] = useReducer(productReducer, initState);

  useEffect(() => {
    getProducts(productsDispatch);
  }, []);

  return (
    <ProductContext.Provider value={{ state, productsDispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
