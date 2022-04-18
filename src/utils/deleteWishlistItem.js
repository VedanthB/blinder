import { wishlistActions } from '../context/constants/wishlistConstants'
import { deleteWishlistItemService } from '../services/wishlistService'

export const deleteWishlistItem = async (
    item,
    token,
    wishlistDispatch,
    showToast
) => {
    try {
        wishlistDispatch({ type: wishlistActions.LOADING })

        const {
            data: { wishlist },
            status,
        } = await deleteWishlistItemService(token, item)

        if (status >= 200 && status < 300) {
            wishlistDispatch({
                type: wishlistActions.REMOVE_WISHLIST_ITEM,
                payload: wishlist,
            })

            showToast('Deleted from Wishlist', 'success')
        }
    } catch (error) {
        wishlistDispatch({ type: wishlistActions.ERROR, payload: error })

        showToast(`${error}`, 'error')
    }
}
