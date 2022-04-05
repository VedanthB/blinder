import React from 'react'
import { Link } from 'react-router-dom'
import { authConstants } from '../../../context/constants/authConstants'
import { useAuth } from '../../../context/providers/AuthProvider'
import { useCart } from '../../../context/providers/CartProvider'

function HeaderRight() {
    const { authState, authDispatch } = useAuth()
    const { encodedToken } = authState

    const {
        cartState: { cart },
    } = useCart()

    return (
        <nav className="flex justify-center align-items-center">
            {encodedToken ? (
                <div
                    className="btn btn-solid-cyan text-white mr-5"
                    onClick={() =>
                        authDispatch({ type: authConstants.LOGOUT_SUCCESS })
                    }
                >
                    Logout
                </div>
            ) : (
                <Link
                    to="/login"
                    className="btn btn-solid-cyan text-white mr-5"
                >
                    Login
                </Link>
            )}

            <Link to="/wishlist">
                <button
                    style={{ background: 'transparent' }}
                    className="btn flex flex-col text-cyan-500 text-hover-cyan-400 tooltip"
                >
                    <span>
                        <i className="text-lg fas fa-heart "></i>
                    </span>

                    <span
                        style={{ textTransform: 'none' }}
                        className="tooltip-text"
                    >
                        Wishlist
                    </span>
                </button>
            </Link>

            <Link to="/cart">
                <button
                    style={{ background: 'transparent' }}
                    className="btn flex align-items-center flex-col text-cyan-500 text-hover-cyan-400 tooltip"
                >
                    <span className="btn-icon badge-container">
                        <i className="text-cyan-500 fas fa-shopping-cart"></i>
                        <span className="status-badge bg-cyan-500 status-badge-number">
                            {cart.length}
                        </span>
                    </span>
                    <span
                        style={{ textTransform: 'none' }}
                        className="tooltip-text shadow-lg"
                    >
                        Cart
                    </span>
                </button>
            </Link>
        </nav>
    )
}

export default HeaderRight
