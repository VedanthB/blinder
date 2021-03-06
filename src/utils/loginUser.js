import axios from 'axios'
import { authConstants } from '../context/constants/authConstants'
import { loginService } from '../services/loginService'

export const loginUser = async (
    userData,
    authDispatch,
    callback,
    showToast
) => {
    try {
        authDispatch({ type: authConstants.LOADING })

        const {
            data: { foundUser, encodedToken },
            status,
        } = await loginService(userData)

        if (status >= 200 && status < 300) {
            authDispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: { foundUser, encodedToken },
            })

            localStorage.setItem('blinder_JWT_Token', encodedToken)

            callback('/')

            showToast('Login successful', 'success')
        }
    } catch (error) {
        authDispatch({
            type: authConstants.ERROR,
            payload: error,
        })

        showToast(`${error}`, 'error')
    }
}
