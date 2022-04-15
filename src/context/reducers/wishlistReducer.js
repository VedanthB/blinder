import { wishlistActions } from '../constants/wishlistConstants'

export const wishlistReducer = (state, action) => {
    switch (action.type) {
        case wishlistActions.LOADING:
            return { ...state, loading: true }

        case wishlistActions.ERROR:
            return { ...state, error: action.payload, loading: false }

        case wishlistActions.GET_WISHLIST_ITEMS:
            return { ...state, wishlist: action.payload, loading: false }

        case wishlistActions.REMOVE_WISHLIST_ITEM:
            return { ...state, wishlist: action.payload, loading: false }

        case wishlistActions.ADD_WISHLIST_ITEM:
            return { ...state, wishlist: action.payload, loading: false }

        default:
            return state
    }
}
