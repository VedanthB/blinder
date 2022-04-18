import React from 'react'
import { useAuth } from '../../context/providers/AuthProvider'
import { useCart } from '../../context/providers/CartProvider'

function CheckoutCard() {
    const {
        cartState: { cart },
    } = useCart()

    const deliveryCharges = 199

    const totalPreviousPrice = cart.reduce(
        (acc, current) => acc + Number(current.price) * Number(current.qty),
        0
    )
    const totalPrice = cart.reduce(
        (acc, current) =>
            acc + Number(current.discountPrice) * Number(current.qty),
        0
    )
    const totalDiscount = totalPreviousPrice - totalPrice
    const totalAmount = totalPrice + deliveryCharges

    return (
        <div className="flex flex-col text-white">
            <h6 className="text-xl font-semibold mb-5">
                Price Details ({cart.length})
            </h6>

            <div className="divider "></div>

            <div className="flex justify-between align-items-center mt-5 mb-5">
                <h6 className="text-lg font-normal">Total MRP</h6>
                <h6 className="text-lg font-normal">
                    Rs. {totalPreviousPrice}
                </h6>
            </div>
            <div className="flex justify-between align-items-center mb-5">
                <h6 className="text-lg font-normal">Discount on MRP</h6>
                <h6 className="text-lg font-normal">Rs. {totalDiscount}</h6>
            </div>
            <div className="flex justify-between align-items-center mb-5">
                <h6 className="text-lg font-normal">Delivery Fee</h6>
                <div className="flex justify-center align-items-center">
                    {/* //line-through */}
                    <h6 className="text-lg font-normal  mr-3">
                        Rs. {deliveryCharges}
                    </h6>
                    {/* <span className="text-cyan-500">FREE</span> */}
                </div>
            </div>

            <div className="divider "></div>

            <div className="flex justify-between align-items-center mt-5 mb-5">
                <h6 className="text-lg font-normal">Total Amount</h6>
                <h6 className="text-lg font-normal">Rs. {totalAmount}</h6>
            </div>
            <button
                style={{ display: 'inline-block' }}
                className="btn btn-solid-cyan text-center text-white  mt-5 mb-5"
            >
                Place Order
            </button>
        </div>
    )
}

export default CheckoutCard
