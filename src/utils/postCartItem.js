import { cartActions } from '../context/constants/cartConstants'
import { postCartItemService } from '../services/cartServices'

export const postCartItem = async (item, token, cartDispatch, showToast) => {
    try {
        cartDispatch({ type: cartActions.LOADING })

        const {
            data: { cart },
            status,
        } = await postCartItemService(token, item)

        if (status >= 200 && status < 300) {
            cartDispatch({ type: cartActions.GET_CART_ITEMS, payload: cart })

            showToast('Add to cart', 'success')
        }
    } catch (error) {
        cartDispatch({ type: cartActions.ERROR, payload: error })

        showToast(`${error}`, 'error')
    }
}
