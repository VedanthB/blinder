import { wishlistActions } from '../context/constants/wishlistConstants'
import { postWishlistItemService } from '../services/wishlistService'

export const addWishlistItem = async (item, token, wishlistDispatch) => {
    try {
        wishlistDispatch({ type: wishlistActions.LOADING })

        const {
            data: { wishlist },
            status,
        } = await postWishlistItemService(token, item)

        if (status >= 200 && status < 300) {
            wishlistDispatch({
                type: wishlistActions.ADD_WISHLIST_ITEM,
                payload: wishlist,
            })

            console.log(wishlist, status)
        }
    } catch (error) {
        wishlistDispatch({ type: wishlistActions.ERROR, payload: error })
    }
}
