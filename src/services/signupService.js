import axios from 'axios'

export const signupService = (userData) => {
    return axios.post('api/auth/signup', userData)
}
