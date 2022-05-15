import React from 'react'
// import AddressCard from '../components/cart-page/AddressCard'
import CartProductCard from '../components/cart-page/CartProductCard'
import CheckoutCard from '../components/cart-page/CheckoutCard'
import { useCart } from '../context/providers/CartProvider'

function Cart() {
    const {
        cartState: { cart },
    } = useCart()

    return (
        <main
            style={{ top: '5rem', minHeight: '100vh' }}
            className="relative w-full"
        >
            <div className="spacer-3rem"></div>
            <div className="spacer-3rem"></div>

            <h3 className="text-4xl font-normal text-center text-white mb-2 underline">
                My Cart {cart.length}
            </h3>

            <div className="spacer-3rem"></div>
            <div className="spacer-3rem"></div>

            <div
                style={{ maxWidth: '980px', margin: 'auto' }}
                className="flex justify-center"
            >
                <div
                    style={{ width: '50%', borderRight: '1px dotted #000022' }}
                    className="w-full p-5"
                >
                    {/* <AddressCard /> */}

                    <div style={{ gap: '3rem' }} className="flex flex-col">
                        {cart.map((product, i) => (
                            <CartProductCard product={product} key={i} />
                        ))}
                    </div>
                </div>

                <div style={{ width: '50%' }} className="w-full p-5">
                    <CheckoutCard />
                </div>
            </div>

            <div className="spacer-3rem"></div>
            <div className="spacer-3rem"></div>
            <div className="spacer-3rem"></div>
        </main>
    )
}

export default Cart
