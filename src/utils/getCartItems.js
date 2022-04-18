import { cartActions } from '../context/constants/cartConstants'
import { getCartItemsService } from '../services/cartServices'

export const getCartItems = async (token, cartDispatch, showToast) => {
    try {
        cartDispatch({ type: cartActions.LOADING })

        const {
            data: { cart },
            status,
        } = await getCartItemsService(token)

        if (status >= 200 && status < 300) {
            cartDispatch({
                type: cartActions.GET_CART_ITEMS,
                payload: cart,
            })

            showToast('Get all cart items!', 'success')
        }
    } catch (error) {
        cartDispatch({
            type: cartActions.ERROR,
            payload: error,
        })

        showToast(`${error}`, 'error')
    }
}
