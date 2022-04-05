import { useContext, createContext, useReducer } from 'react'
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

    console.log(authState)

    return (
        <AuthContext.Provider value={{ authState, authDispatch }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
