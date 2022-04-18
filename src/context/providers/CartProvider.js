import { useContext, createContext, useReducer, useEffect } from 'react'
import { useToast } from '../../hooks/useToast'
import { getCartItems } from '../../utils/getCartItems'
import { cartReducer } from '../reducers/cartReducer'
import { useAuth } from './AuthProvider'

const CartContext = createContext()

const initCartState = {
    loading: false,
    error: null,
    cart: [],
}

export const CartProvider = ({ children }) => {
    const [cartState, cartDispatch] = useReducer(cartReducer, initCartState)

    const { authState } = useAuth()

    const { encodedToken } = authState

    const { showToast } = useToast()

    useEffect(() => {
        if (encodedToken) {
            getCartItems(encodedToken, cartDispatch, showToast)
        }
    }, [encodedToken])

    return (
        <CartContext.Provider value={{ cartState, cartDispatch }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)
