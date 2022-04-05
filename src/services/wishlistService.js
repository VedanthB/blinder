import axios from 'axios'

export const getWishlistItemsService = (token) => {
    return axios.get('/api/user/wishlist', {
        headers: { authorization: token },
    })
}

export const postWishlistItemService = (token, item) => {
    return axios.post(
        '/api/user/wishlist',
        { product: item },
        {
            headers: { authorization: token },
        }
    )
}

export const deleteWishlistItemService = (token, itemId) => {
    return axios.delete(`/api/user/wishlist/${itemId}`, {
        headers: { authorization: token },
    })
}
