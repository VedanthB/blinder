import React from 'react'
import { useCart } from '../../context/providers/CartProvider'
import { useAuth } from '../../context/providers/AuthProvider'
import { postCartItem } from '../../utils/postCartItem'
import { Link } from 'react-router-dom'
import { addWishlistItem } from '../../utils/addWishlistItem'
import { useWishlist } from '../../context/providers/WishlistProvider'
import { useToast } from '../../hooks/useToast'

function ProductPageCard({ product }) {
    const { cartState, cartDispatch } = useCart()
    const {
        wishlistState: { wishlist },
        wishlistDispatch,
    } = useWishlist()

    const { authState } = useAuth()

    const { cart } = cartState

    const isInCart = cart.find((item) => item._id === product._id)
    const isInWishlist = wishlist.find((item) => item._id === product._id)

    console.log(isInCart, isInWishlist)

    const { encodedToken } = authState

    const { showToast } = useToast()

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
                            {isInWishlist ? (
                                <Link
                                    className="tooltip cursor-pointer"
                                    to="/wishlist"
                                >
                                    <i className="fa fa-heart  mr-3 text-xl text-cyan-500"></i>
                                    <span
                                        style={{ textTransform: 'none' }}
                                        className="tooltip-text shadow-lg"
                                    >
                                        go to wishlist
                                    </span>
                                </Link>
                            ) : (
                                <div
                                    className="tooltip cursor-pointer"
                                    onClick={() =>
                                        encodedToken
                                            ? addWishlistItem(
                                                  product,
                                                  encodedToken,
                                                  wishlistDispatch,
                                                  showToast
                                              )
                                            : showToast(
                                                  'Please Login!',
                                                  'error'
                                              )
                                    }
                                >
                                    <i className="fa fa-heart mr-3 text-xl text-grey-400 text-hover-cyan-500"></i>
                                    <span
                                        style={{ textTransform: 'none' }}
                                        className="tooltip-text shadow-lg"
                                    >
                                        add to wishlist
                                    </span>
                                </div>
                            )}

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
                                        encodedToken
                                            ? postCartItem(
                                                  product,
                                                  encodedToken,
                                                  cartDispatch,
                                                  showToast
                                              )
                                            : showToast(
                                                  'Please Login!',
                                                  'error'
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
