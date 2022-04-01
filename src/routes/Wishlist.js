import React from "react";
import WishlistProductCard from "../components/wishlist-page/WishlistProductCard";

const product = {
  newArrival: true,
  image: "https://picsum.photos/500",
  title: "Some Title",
  description:
    "lorem ipsum dolor sit lorem ipsum dolor sitlorem ipsum dolor sitlorem ipsum dolor sitlorem ipsum dolor sit",
  actualPrice: 1000,
  discountedPrice: 900,
  qty: 1,
};

function Wishlist() {
  return (
    <main
      style={{ top: "5rem", minHeight: "100vh" }}
      className="relative w-full"
    >
      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>
      <h3 className="text-4xl font-normal text-center text-white mb-2 underline">
        My Wishlist (6)
      </h3>

      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>

      <div className="grid-cols-5">
        <div
          style={{ gap: "4rem", maxWidth: "1200px", margin: "auto" }}
          className="grid grid-cols-3 p-10"
        >
          <WishlistProductCard product={product} />
          <WishlistProductCard product={product} />
          <WishlistProductCard product={product} />
        </div>
      </div>
      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>
    </main>
  );
}

export default Wishlist;
