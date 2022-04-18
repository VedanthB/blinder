import { useContext, createContext, useReducer, useEffect } from 'react'
import { useToast } from '../../hooks/useToast'

import { getWishListItems } from '../../utils/getWishlistItems'

import { wishlistReducer } from '../reducers/wishlistReducer'
import { useAuth } from './AuthProvider'

const WishlistContext = createContext()

const initWishlistState = {
    loading: false,
    error: null,
    wishlist: [],
}

export const WishlistProvider = ({ children }) => {
    const [wishlistState, wishlistDispatch] = useReducer(
        wishlistReducer,
        initWishlistState
    )

    const { authState } = useAuth()

    const { encodedToken } = authState

    const { showToast } = useToast()

    useEffect(() => {
        if (encodedToken) {
            getWishListItems(encodedToken, wishlistDispatch, showToast)
        }
    }, [encodedToken])

    return (
        <WishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
            {children}
        </WishlistContext.Provider>
    )
}

export const useWishlist = () => useContext(WishlistContext)
