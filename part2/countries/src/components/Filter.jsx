import React from 'react'

const Filter = ({filterName, handleFilterChange}) => (
    <label>Find countries
        <input
            id="filter-input"
            type="text"
            value={filterName}
            onChange={handleFilterChange} 
            style={{marginLeft: "0.5rem"}}/> 
    </label>
)

export default Filter