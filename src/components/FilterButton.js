import React from 'react'

 
const FilterButton = ( {newFilter} ) => {
    return (
      <button value={newFilter}  type="submit">Apply Filter</button>
    )
  }

export default FilterButton