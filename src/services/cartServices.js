import axios from 'axios'

export const getCartItemsService = (token) => {
    return axios.get('/api/user/cart', {
        headers: { authorization: token },
    })
}
