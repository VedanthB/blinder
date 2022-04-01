import React from "react";

function CheckoutCard() {
  return (
    <div className="flex flex-col text-white">
      <h6 className="text-xl font-semibold mb-5">Price Details (2) </h6>

      <div className="divider "></div>

      <div className="flex justify-between align-items-center mt-5 mb-5">
        <h6 className="text-lg font-normal">Total MRP</h6>
        <h6 className="text-lg font-normal">Rs. 460.00</h6>
      </div>
      <div className="flex justify-between align-items-center mb-5">
        <h6 className="text-lg font-normal">Discount on MRP</h6>
        <h6 className="text-lg font-normal">Rs. 0.00</h6>
      </div>
      <div className="flex justify-between align-items-center mb-5">
        <h6 className="text-lg font-normal">Convenience Fee</h6>
        <div className="flex justify-center align-items-center">
          <h6 className="text-lg font-normal line-through mr-3">460 </h6>
          <span className="text-cyan-500">FREE</span>
        </div>
      </div>

      <div className="divider "></div>

      <div className="flex justify-between align-items-center mt-5 mb-5">
        <h6 className="text-lg font-normal">Total Amount</h6>
        <h6 className="text-lg font-normal">Rs. 460</h6>
      </div>
      <button
        style={{ display: "inline-block" }}
        className="btn btn-solid-cyan text-center text-white  mt-5 mb-5"
      >
        Place Order
      </button>
    </div>
  );
}

export default CheckoutCard;
