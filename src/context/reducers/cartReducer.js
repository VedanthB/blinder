import { cartActions } from '../constants/cartConstants'

export const cartReducer = (state, action) => {
    switch (action.type) {
        case cartActions.LOADING:
            return { ...state, loading: true }

        case cartActions.ERROR:
            return { ...state, error: action.payload, loading: false }

        case cartActions.GET_CART_ITEMS:
            return { ...state, cart: action.payload, loading: false }

        case cartActions.POST_CART_ITEMS:
            return { ...state, cart: action.payload, loading: false }

        case cartActions.POST_CART_ITEMS:
            return { ...state, cart: action.payload, loading: false }

        default:
            return state
    }
}
