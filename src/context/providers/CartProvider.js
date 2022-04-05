import { useContext, createContext, useReducer } from 'react'
import { cartReducer } from '../reducers/cartReducer'

const CartContext = createContext()

const initCartState = {
    loading: false,
    error: null,
    cart: [],
}

export const CartProvider = ({ children }) => {
    const [cartState, cartDispatch] = useReducer(cartReducer, initCartState)

    return (
        <CartContext.Provider value={{ cartState, cartDispatch }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)
