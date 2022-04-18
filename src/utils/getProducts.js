import axios from 'axios'

import { productActions } from '../context/constants/productConstants'
import { useProducts } from '../context/providers/ProductProvider'
import { getProductsService } from '../services/productServices'

export const getProducts = async (productsDispatch, showToast) => {
    try {
        console.log(productsDispatch)

        const {
            data: { products },
            status,
        } = await getProductsService()

        console.log(status)

        if (status >= 200 && status < 300) {
            productsDispatch({
                type: productActions.GET_PRODUCTS_SUCCESS,
                payload: products,
            })

            showToast('Get all Products!', 'success')
        }
    } catch (error) {
        productsDispatch({
            type: productActions.ERROR,
            payload: error,
        })

        showToast(`${error}`, 'error')
    }
}
