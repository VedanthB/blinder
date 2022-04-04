import React, { useState, useEffect } from 'react'
import { filtersConstants } from '../../../context/constants/filtersConstants'
import { useFilters } from '../../../context/providers/FilterProvider'

function FilterByRatings() {
    const [rangeValue, setRangeValue] = useState(5)

    const { filtersDispatch } = useFilters()

    useEffect(() => {
        filtersDispatch({
            type: filtersConstants.FILTER_BY_RATING,
            payload: rangeValue,
        })
    }, [rangeValue])

    return (
        <div className="w-full p-1">
            <ul>
                <li className="text-white pt-3 pb-3 text-lg">
                    Ratings:{' '}
                    <span className="text-cyan-500 font-semibold pt-3 pb-3 text-lg">
                        {rangeValue}
                    </span>
                </li>
            </ul>

            <input
                className="w-full"
                type="range"
                min={0}
                max={5}
                step={1}
                value={rangeValue}
                onChange={(e) => setRangeValue(e.target.value)}
            />
        </div>
    )
}

export default FilterByRatings
