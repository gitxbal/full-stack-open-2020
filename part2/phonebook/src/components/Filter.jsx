import React from 'react'

const Filter = ({ filterName, handleFilterChange }) => (
    <>
        <label for="filter-input">filter shown with <input 
            id="filter-input"
            type="text"
            value={filterName}
            onChange={handleFilterChange} /> 
        </label>
    </>
)

export default Filter

