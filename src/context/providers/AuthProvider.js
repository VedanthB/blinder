import { useContext, createContext, useReducer, useEffect } from 'react'
import { authConstants } from '../constants/authConstants'
import { authReducer } from '../reducers/authReducer'

const AuthContext = createContext()

const authInitState = {
    loading: false,
    error: null,
    user: {},
    encodedToken: null,
}

export const AuthProvider = ({ children }) => {
    const [authState, authDispatch] = useReducer(authReducer, authInitState)

    useEffect(() => {
        let encodedToken = localStorage.getItem('blinder_JWT_Token')

        if (encodedToken) {
            authDispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: { user: {}, encodedToken },
            })
        }
    }, [])

    return (
        <AuthContext.Provider value={{ authState, authDispatch }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
