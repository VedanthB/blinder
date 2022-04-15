import { useContext, createContext, useReducer, useEffect } from 'react'
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

    useEffect(() => {
        if (encodedToken) {
            getCartItems(encodedToken, cartDispatch)
        }
    }, [encodedToken])

    console.log(cartState)

    return (
        <CartContext.Provider value={{ cartState, cartDispatch }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)
