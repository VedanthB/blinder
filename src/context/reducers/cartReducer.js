import { cartConstants } from '../constants/cartConstants'

export const cartReducer = (state, action) => {
    switch (key) {
        case cartConstants.LOADING:
            return { ...state, loading: true }

        case cartConstants.ERROR:
            return { ...state, error: action.payload, loading: false }

        case cartConstants.GET_CART_ITEMS:
            return { ...state, cart: action.payload, loading: false }

        case cartConstants.POST_CART_ITEMS:
            return { ...state, cart: action.payload, loading: false }

        case cartConstants.POST_CART_ITEMS:
            return { ...state, cart: action.payload, loading: false }

        default:
            return state
    }
}
