import axios from "axios";

export const getProductsService = () => {
  return axios.get("api/products");
};
