import { useContext, createContext, useReducer, useEffect } from 'react'
import { useToast } from '../../hooks/useToast'

import { getProducts } from '../../utils/getProducts'
import { productReducer } from '../reducers/productReducer'

const ProductContext = createContext()

const initState = {
    products: [],
    loading: false,
    error: null,
}

export const ProductProvider = ({ children }) => {
    const [state, productsDispatch] = useReducer(productReducer, initState)

    const { showToast } = useToast()

    useEffect(() => {
        getProducts(productsDispatch, showToast)
    }, [])

    return (
        <ProductContext.Provider value={{ state, productsDispatch }}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProducts = () => useContext(ProductContext)
