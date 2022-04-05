import { cartActions } from '../context/constants/cartConstants'
import { postCartItemService } from '../services/cartServices'

export const postCartItem = async (item, token, cartDispatch) => {
    try {
        cartDispatch({ type: cartActions.LOADING })

        const {
            data: { cart },
            status,
        } = await postCartItemService(token, item)

        if (status >= 200 && status < 300) {
            cartDispatch({ type: cartActions.GET_CART_ITEMS, payload: cart })
        }
    } catch (error) {
        cartDispatch({ type: cartActions.ERROR, payload: error })
    }
}
