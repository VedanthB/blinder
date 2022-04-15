import { cartActions } from '../context/constants/cartConstants'
import {
    decrementCartItemService,
    incrementCartItemService,
} from '../services/cartServices'

export const incrementCartItem = async (itemId, encodedToken, cartDispatch) => {
    try {
        cartDispatch({ type: cartActions.LOADING })

        const {
            data: { cart },
            status,
        } = await incrementCartItemService(encodedToken, itemId)

        if (status >= 200 && status < 300) {
            cartDispatch({ type: cartActions.GET_CART_ITEMS, payload: cart })

            console.log(status, cart)
        }
    } catch (error) {
        console.log(error)
    }
}

export const decrementCartItem = async (itemId, encodedToken, cartDispatch) => {
    try {
        cartDispatch({ type: cartActions.LOADING })

        const {
            data: { cart },
            status,
        } = await decrementCartItemService(encodedToken, itemId)

        if (status >= 200 && status < 300) {
            cartDispatch({ type: cartActions.GET_CART_ITEMS, payload: cart })

            console.log(status, cart)
        }
    } catch (error) {
        console.log(error)
    }
}
