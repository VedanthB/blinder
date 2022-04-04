import React, { useState, useEffect } from 'react'
import { useFilters } from '../../context/providers/FilterProvider'

function SortProductsDropdown() {
    const [selectedSort, setSelectedSort] = useState('default')

    const { filtersState, filtersDispatch } = useFilters()

    useEffect(() => {
        filtersDispatch({ type: 'SORT_BY', payload: selectedSort })
    }, [selectedSort])

    return (
        <div className="m-20 flex justify-center align-items-center">
            <div className="text-xl text-white mr-3">Sort By :</div>
            <div className="custom-select">
                <select
                    className="bg-regal-blue-dark text-white text-xl"
                    value={selectedSort}
                    onChange={(e) => setSelectedSort(e.target.value)}
                >
                    <option value="default">Choose a filter</option>
                    <option value="LOW_TO_HIGH">Price: Low to High</option>
                    <option value="HIGH_TO_LOW">Price: High to Low</option>
                </select>
            </div>
        </div>
    )
}

export default SortProductsDropdown
