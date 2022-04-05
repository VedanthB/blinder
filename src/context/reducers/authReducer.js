import { authConstants } from '../constants/authConstants'

export const authReducer = (state, action) => {
    switch (action.type) {
        case authConstants.LOADING:
            return { ...state, loading: true }
        case authConstants.ERROR:
            return { ...state, error: action.payload, loading: false }
        case authConstants.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload.foundUser,
                loading: false,
                encodedToken: action.payload.encodedToken,
            }
        case authConstants.SIGNUP_SUCCESS:
            return {
                ...state,
                user: action.payload.createdUser,
                loading: false,
                encodedToken: action.payload.encodedToken,
            }
        case authConstants.LOGOUT_SUCCESS:
            window.localStorage.removeItem('blinder_JWT_Token')
            return {
                ...state,
                user: {},
                loading: false,
                encodedToken: null,
            }
        default:
            return state
    }
}
