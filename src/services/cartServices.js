import axios from 'axios'

export const getCartItemsService = (token) => {
    return axios.get('/api/user/cart', {
        headers: { authorization: token },
    })
}

export const postCartItemService = (token, item) => {
    return axios.post(
        '/api/user/cart',
        { product: item },
        {
            headers: { authorization: token },
        }
    )
}

export const incrementCartItemService = (token, itemId) => {
    return axios.post(
        `/api/user/cart/${itemId}`,
        {
            action: { type: 'increment' },
        },
        {
            headers: { authorization: token },
        }
    )
}

export const decrementCartItemService = (token, itemId) => {
    return axios.post(
        `/api/user/cart/${itemId}`,
        {
            action: { type: 'decrement' },
        },
        {
            headers: { authorization: token },
        }
    )
}
