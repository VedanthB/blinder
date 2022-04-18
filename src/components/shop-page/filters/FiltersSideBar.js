import React from 'react'

import { FilterByBrands } from './FilterByBrands'

import FilterByCategories from './FilterByCategories'
import FilterByRatings from './FilterByRatings'

function FiltersSideBar() {
    return (
        <div
            style={{ top: '8rem' }}
            className="filters-sidebar-container relative ml-10 p-5"
        >
            <div className="flex justify-between align-items-center">
                <div className="font-semibold text-xl text-white">Filters</div>
                <div className="btn btn-link-cyan text-white">clear</div>
            </div>

            <div className="spacer-1rem"></div>

            <div className="divider"></div>

            <div className="spacer-1rem"></div>

            <FilterByRatings />

            <div className="spacer-1rem"></div>

            <FilterByCategories />

            <div className="spacer-1rem"></div>

            <div className="divider"></div>

            <div className="spacer-1rem"></div>

            <FilterByBrands />
        </div>
    )
}

export default FiltersSideBar
