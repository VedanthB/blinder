import React, { useState } from "react";

function CartProductCard({ product }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="bg-regal-blue-dark rounded shadow-lg h-min">
      <div className="h-full  flex flex-col">
        <div className="badge-container">
          {product.newArrival ? (
            <span className="absolute font-bold card-badge badge bg-rose-500 text-white">
              New
            </span>
          ) : (
            ""
          )}

          <div className="p-5">
            <img className="img-responsive" src={product.image} alt="" />
          </div>

          <button
            style={{ backgroundColor: "rgba(255, 255, 255, 0.596)" }}
            className="btn-close bg-blue-500 text-blue-500"
          ></button>
        </div>
        <div className="p-5">
          <h4 className="h4 font-normal text-lg subtitle1">
            <div className="text-white">{product.title}</div>
          </h4>

          <p className="body1 text-sm font-light mb-4 text-white">
            {product.description}
          </p>

          <div className="mb-5 flex">
            <button
              style={{ background: "transparent", border: "none" }}
              className="text-2xl text-white cursor-pointer mr-3"
            >
              -
            </button>

            <p className="text-2xl text-cyan-500 mr-3">{quantity}</p>

            <button
              style={{ background: "transparent", border: "none" }}
              className="text-2xl text-white cursor-pointer"
            >
              +
            </button>
          </div>

          <hr className="mb-3 text-regal-blue" />

          <div className="flex justify-between">
            <div className="product-price text-cyan-500">
              <small className="line-through mr-2 text-white">
                {product.actualPrice}
              </small>
              {product.discountedPrice}
            </div>

            <div className="flex">
              <div>
                <i className="fa fa-heart mr-3 text-grey-400 text-hover-cyan-500"></i>
              </div>
              <div>
                {/* <i className="fa fa-shopping-cart text-grey-400 text-hover-cyan-500"></i> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProductCard;
