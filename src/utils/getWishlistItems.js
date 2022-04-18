import { wishlistActions } from '../context/constants/wishlistConstants'
import { getWishlistItemsService } from '../services/wishlistService'

export const getWishListItems = async (token, wishlistDispatch, showToast) => {
    try {
        wishlistDispatch({ type: wishlistActions.LOADING })

        const {
            data: { wishlist },
            status,
        } = await getWishlistItemsService(token)

        if (status >= 200 && status < 300) {
            wishlistDispatch({
                type: wishlistActions.GET_WISHLIST_ITEMS,
                payload: wishlist,
            })

            showToast('Get all wishlist items', 'success')
        }
    } catch (error) {
        wishlistDispatch({
            type: wishlistActions.ERROR,
            payload: error,
        })

        showToast(`${error}`, 'error')
    }
}
