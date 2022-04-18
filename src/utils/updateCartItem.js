import { cartActions } from '../context/constants/cartConstants'
import {
    decrementCartItemService,
    incrementCartItemService,
} from '../services/cartServices'

export const incrementCartItem = async (
    itemId,
    encodedToken,
    cartDispatch,
    showToast
) => {
    try {
        cartDispatch({ type: cartActions.LOADING })

        const {
            data: { cart },
            status,
        } = await incrementCartItemService(encodedToken, itemId)

        if (status >= 200 && status < 300) {
            cartDispatch({ type: cartActions.GET_CART_ITEMS, payload: cart })

            showToast('Increment cart qty Success', 'success')
        }
    } catch (error) {
        cartDispatch({ type: cartActions.ERROR, payload: error })

        showToast(`${error}`, 'error')
    }
}

export const decrementCartItem = async (
    itemId,
    encodedToken,
    cartDispatch,
    showToast
) => {
    try {
        cartDispatch({ type: cartActions.LOADING })

        const {
            data: { cart },
            status,
        } = await decrementCartItemService(encodedToken, itemId)

        if (status >= 200 && status < 300) {
            cartDispatch({ type: cartActions.GET_CART_ITEMS, payload: cart })

            showToast('Decrement cart qty Success', 'success')
        }
    } catch (error) {
        cartDispatch({ type: cartActions.ERROR, payload: error })

        showToast(`${error}`, 'error')
    }
}
