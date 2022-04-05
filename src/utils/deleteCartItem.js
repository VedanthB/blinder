import { cartActions } from '../context/constants/cartConstants'
import { deleteCartItemService } from '../services/cartServices'

export const deleteCartItem = async (item, token, cartDispatch) => {
    try {
        cartDispatch({ type: cartActions.LOADING })

        const {
            data: { cart },
            status,
        } = await deleteCartItemService(token, item)

        if (status >= 200 && status < 300) {
            cartDispatch({ type: cartActions.DELETE_CART_ITEMS, payload: cart })
        }
    } catch (error) {
        cartDispatch({ type: cartActions.ERROR, payload: error })
    }
}
