import axios from 'axios'

export const loginService = (userData) => {
    return axios.post('api/auth/login', userData)
}
