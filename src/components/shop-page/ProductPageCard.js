import React from 'react'
import { useCart } from '../../context/providers/CartProvider'
import { useAuth } from '../../context/providers/AuthProvider'
import { postCartItem } from '../../utils/postCartItem'
import { Link } from 'react-router-dom'
import { getWishListItems } from '../../utils/getWishlistItems'

function ProductPageCard({ product }) {
    const { cartState, cartDispatch } = useCart()
    const { authState } = useAuth()

    const { cart } = cartState

    const isInCart = cart.find((item) => item._id === product._id)

    console.log(isInCart)

    const { encodedToken } = authState

    return (
        <div className="bg-regal-blue-dark rounded shadow-lg h-min">
            <div className="h-full  flex flex-col">
                <div className="badge-container">
                    {product.offers.newArrival && (
                        <span className="absolute font-bold card-badge badge bg-rose-500 text-white">
                            New
                        </span>
                    )}

                    <div className="p-5">
                        <img
                            className="img-responsive w-full"
                            src={product.img}
                            alt={product.title}
                            style={{
                                height: '300px',
                                width: '100%',
                                objectFit: 'cover',
                            }}
                        />
                    </div>
                </div>

                <div className="p-5">
                    <h4 className="h4 font-normal text-lg subtitle1">
                        <div className="text-white">{product.title}</div>
                    </h4>

                    <p className="body1 text-sm font-light mb-4 text-white">
                        {product.desc}
                    </p>

                    <hr className="mb-3 text-regal-blue" />

                    <div className="flex justify-between">
                        <div className="product-price text-cyan-500">
                            <small className="line-through mr-2 text-white">
                                {product.price}
                            </small>
                            {product.discountPrice}
                        </div>
                        <div className="flex">
                            <div
                                className="tooltip cursor-pointer"
                                // onClick={() =>
                                //     getWishListItems(
                                //         product,
                                //         encodedToken,
                                //         cartDispatch
                                //     )
                                // }
                            >
                                <i className="fa fa-heart mr-3 text-xl text-grey-400 text-hover-cyan-500"></i>
                                <span
                                    style={{ textTransform: 'none' }}
                                    className="tooltip-text shadow-lg"
                                >
                                    add to wishlist
                                </span>
                            </div>
                            getWishListItems
                            {isInCart ? (
                                <Link
                                    className="tooltip cursor-pointer"
                                    to="/cart"
                                >
                                    <i className="fa fa-shopping-cart text-xl ] text-cyan-500"></i>
                                    <span
                                        style={{ textTransform: 'none' }}
                                        className="tooltip-text shadow-lg"
                                    >
                                        go to cart
                                    </span>
                                </Link>
                            ) : (
                                <div
                                    className="tooltip cursor-pointer"
                                    onClick={() =>
                                        postCartItem(
                                            product,
                                            encodedToken,
                                            cartDispatch
                                        )
                                    }
                                >
                                    <i className="fa fa-shopping-cart text-xl text-grey-400 text-hover-cyan-500"></i>
                                    <span
                                        style={{ textTransform: 'none' }}
                                        className="tooltip-text shadow-lg"
                                    >
                                        add to cart
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPageCard
