import React, { useState, useEffect } from "react";

import FiltersSideBar from "../components/shop-page/FiltersSideBar";
import ProductPageCard from "../components/shop-page/ProductPageCard";
import SortProductsDropdown from "../components/shop-page/SortProductsDropdown";
import { useFilters } from "../context/providers/FilterProvider";
import { useProducts } from "../context/providers/ProductProvider";
import { sortProducts } from "../utils/sortProducts";

function Shop() {
  const { state } = useProducts();

  const { products } = state;

  const { sortedProductsList } = useFilters();

  console.log(sortedProductsList);

  return (
    <main
      style={{ top: "5rem", minHeight: "180vh" }}
      className="relative w-full justify-end flex"
    >
      <FiltersSideBar />

      <div className="products-display-container">
        <div className="flex w-full justify-end">
          <SortProductsDropdown />
        </div>

        <div style={{ gap: "4rem" }} className="grid grid-cols-3">
          {sortedProductsList.map((product, i) => (
            <ProductPageCard product={product} key={i} />
          ))}
        </div>

        <div className="spacer-3rem"></div>
        <div className="spacer-3rem"></div>
        <div className="spacer-3rem"></div>
      </div>
    </main>
  );
}

export default Shop;
