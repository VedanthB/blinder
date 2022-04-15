import { useContext, createContext, useReducer, useEffect } from 'react'
import { getCartItems } from '../../utils/getCartItems'
import { getWishListItems } from '../../utils/getWishlistItems'
import { cartReducer } from '../reducers/cartReducer'
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

    useEffect(() => {
        if (encodedToken) {
            getWishListItems(encodedToken, wishlistDispatch)
        }
    }, [encodedToken])

    console.log(wishlistState)

    return (
        <WishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
            {children}
        </WishlistContext.Provider>
    )
}

export const useWishlist = () => useContext(WishlistContext)
