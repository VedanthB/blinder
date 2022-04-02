import React from "react";
import FiltersSideBar from "../components/shop-page/FiltersSideBar";
import ProductPageCard from "../components/shop-page/ProductPageCard";
import SortProductsDropdown from "../components/shop-page/SortProductsDropdown";
import { useProducts } from "../context/providers/ProductProvider";

function Shop() {
  const { state } = useProducts();

  const { products } = state;

  console.log(products);

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
          {/* <ProductCard product={{}} />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard /> */}
        </div>

        <div className="spacer-3rem"></div>
        <div className="spacer-3rem"></div>
        <div className="spacer-3rem"></div>
      </div>
    </main>
  );
}

export default Shop;
