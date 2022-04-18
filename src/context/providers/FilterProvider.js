import { useContext, createContext, useReducer } from 'react'
import {
    filterByBrands,
    filterByCategory,
    filterByRatings,
} from '../../utils/filterProducts'
import { sortProducts } from '../../utils/sortProducts'
import { filterReducer } from '../reducers/filterReducer'
import { useProducts } from './ProductProvider'

const FiltersContext = createContext()

const filtersInitialState = {
    sortBy: null,
    categories: {
        jackets: false,
        accessories: false,
        caps: false,
        skateboards: false,
    },
    brands: {
        vans: false,
        'urban monkey': false,
        thrasher: false,
        'santa cruz': false,
    },
    ratingsLessThan: 5,
}

export const FiltersProvider = ({ children }) => {
    const [filtersState, filtersDispatch] = useReducer(
        filterReducer,
        filtersInitialState
    )

    const {
        state: { products },
    } = useProducts()

    let filteredByCategoryProductsList = filterByCategory(
        products,
        filtersState.categories
    )

    let filteredByBrandProductsList = filterByBrands(
        filteredByCategoryProductsList,
        filtersState.brands
    )

    let filteredByRatingsProductList = filterByRatings(
        filteredByBrandProductsList,
        filtersState.ratingsLessThan
    )

    let sortedFilteredList = sortProducts(
        filteredByRatingsProductList,
        filtersState.sortBy
    )

    return (
        <FiltersContext.Provider
            value={{ filtersState, filtersDispatch, sortedFilteredList }}
        >
            {children}
        </FiltersContext.Provider>
    )
}

export const useFilters = () => useContext(FiltersContext)
