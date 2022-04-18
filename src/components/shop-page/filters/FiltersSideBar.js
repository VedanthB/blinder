import React from 'react'
import { filtersConstants } from '../../../context/constants/filtersConstants'
import { useFilters } from '../../../context/providers/FilterProvider'

import FilterByCategories from './FilterByCategories'
import FilterByRatings from './FilterByRatings'
import FilterListItem from './FilterListItem'

const brands = ['Santa Cruz', 'Vans', 'Urban Monkey', 'Thrasher']

function FiltersSideBar() {
    const { filtersState, filtersDispatch } = useFilters()

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

            {/* <FilterByBrands /> */}
            <ul className="flex flex-col">
                <li className="text-white pt-3 pb-3 text-lg">Brands</li>
                {brands.map((listItem, i) => (
                    <FilterListItem
                        key={i}
                        value={filtersState.categories[listItem.toLowerCase()]}
                        onChange={() =>
                            filtersDispatch({
                                type: filtersConstants.FILTER_BY_BRAND,
                                payload: listItem.toLowerCase(),
                            })
                        }
                        text={listItem}
                    />
                ))}
            </ul>
        </div>
    )
}

export default FiltersSideBar
