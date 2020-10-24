import React from 'react'

const Filter = ({filterName, handleFilterChange}) => (
    <section>
        <input 
            id="filter-input"
            type="text"
            value={filterName}
            onChange={handleFilterChange} /> 
    </section>
)

export default Filter