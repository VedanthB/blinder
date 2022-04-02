import axios from "axios";

import { productActions } from "../context/constants/productConstants";
import { useProducts } from "../context/providers/ProductProvider";
import { getProductsService } from "../services/productServices";

export const getProducts = async (productsDispatch) => {
  try {
    console.log(productsDispatch);

    const {
      data: { products },
      status,
    } = await getProductsService();

    console.log(status);

    if (status >= 200 && status < 300) {
      productsDispatch({
        type: productActions.GET_PRODUCTS_SUCCESS,
        payload: products,
      });

      console.log(products);
    } else {
      productsDispatch({
        type: productActions.ERROR,
        payload:
          "Oops! Looks like there's an issue with the server, please try again later",
      });
    }
  } catch (error) {
    console.log(error);
    productsDispatch({
      type: productActions.ERROR,
      payload:
        "Oops! Looks like there's an issue with the server, please try again later",
    });
  }
};
