import { useFilters } from "../context/providers/FilterProvider";

export const sortProducts = (products, sortBy) => {
  switch (sortBy) {
    case "HIGH_TO_LOW":
      return products.sort((a, b) => a.price - b.price);
    case "LOW_TO_HIGH":
      return products.sort((a, b) => b.price - a.price);
    default:
      return products;
  }
};
