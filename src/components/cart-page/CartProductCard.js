import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function CartProductCard({ product }) {
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

                    <div className="mb-5 flex">
                        <button
                            style={{
                                background: 'transparent',
                                border: 'none',
                            }}
                            className="text-2xl text-white cursor-pointer mr-3"
                        >
                            -
                        </button>

                        <p className="text-2xl text-cyan-500 mr-3">
                            {product.qty}
                        </p>

                        <button
                            style={{
                                background: 'transparent',
                                border: 'none',
                            }}
                            className="text-2xl text-white cursor-pointer"
                        >
                            +
                        </button>
                    </div>

                    <hr className="mb-3 text-regal-blue" />

                    <div className="flex justify-between">
                        <div className="product-price text-cyan-500">
                            <small className="line-through mr-2 text-white">
                                {product.price}
                            </small>
                            {product.discountPrice}
                        </div>

                        <div className="flex">
                            <Link
                                className="tooltip cursor-pointer"
                                to="/wishlist"
                            >
                                <i className="fa fa-heart text-xl text-grey-400 text-hover-cyan-500"></i>
                                <span
                                    style={{ textTransform: 'none' }}
                                    className="tooltip-text shadow-lg"
                                >
                                    add to wishlist
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartProductCard
