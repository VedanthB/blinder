import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/providers/AuthProvider'
import { useCart } from '../../context/providers/CartProvider'
import { useWishlist } from '../../context/providers/WishlistProvider'
import { deleteWishlistItem } from '../../utils/deleteWishlistItem'
import { postCartItem } from '../../utils/postCartItem'

function WishlistProductCard({ product }) {
    const {
        cartState: { cart },
        cartDispatch,
    } = useCart()
    const {
        wishlistState: { wishlist },
        wishlistDispatch,
    } = useWishlist()

    const {
        authState: { encodedToken },
    } = useAuth()

    const isInCart = cart.find((item) => item._id === product._id)

    console.log(isInCart)

    deleteWishlistItem

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
                            className="img-responsive"
                            src={product.img}
                            alt={product.title}
                        />
                    </div>

                    <button
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.596)',
                        }}
                        onClick={() =>
                            deleteWishlistItem(
                                product._id,
                                encodedToken,
                                wishlistDispatch
                            )
                        }
                        className="btn-close bg-blue-500 text-blue-500"
                    ></button>
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
                            {isInCart ? (
                                <Link
                                    className="tooltip cursor-pointer"
                                    to="/cart"
                                >
                                    <i className="fa fa-shopping-cart text-xl text-cyan-500"></i>
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

export default WishlistProductCard
