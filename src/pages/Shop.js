import React, { useState, useEffect } from 'react'

import ProductPageCard from '../components/shop-page/ProductPageCard'

import SortProductsDropdown from '../components/shop-page/SortProductsDropdown'
import FiltersSideBar from '../components/shop-page/filters/FiltersSideBar'

import { useFilters } from '../context/providers/FilterProvider'

function Shop() {
    const { sortedFilteredList } = useFilters()

    return (
        <main
            style={{ top: '5rem', minHeight: '180vh' }}
            className="relative w-full justify-end flex"
        >
            <FiltersSideBar />

            <div className="products-display-container">
                <div className="flex w-full justify-end">
                    <SortProductsDropdown />
                </div>

                <div style={{ gap: '4rem' }} className="grid grid-cols-3">
                    {sortedFilteredList.map((product, i) => (
                        <ProductPageCard product={product} key={i} />
                    ))}
                </div>

                <div className="spacer-3rem"></div>
                <div className="spacer-3rem"></div>
                <div className="spacer-3rem"></div>
            </div>
        </main>
    )
}

export default Shop
