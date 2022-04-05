import axios from 'axios'
import { authConstants } from '../context/constants/authConstants'
import { signupService } from '../services/signupService'

export const signupUser = async (userData, authDispatch) => {
    try {
        authDispatch({ type: authConstants.LOADING })

        const {
            data: { createdUser, encodedToken },
            status,
        } = await signupService(userData)

        if (status >= 200 && status < 300) {
            localStorage.setItem('blinder_JWT_Token', encodedToken)

            authDispatch({
                type: authConstants.SIGNUP_SUCCESS,
                payload: { createdUser, encodedToken },
            })
        }
    } catch (error) {
        authDispatch({
            type: authConstants.ERROR,
            payload: error,
        })
    }
}
