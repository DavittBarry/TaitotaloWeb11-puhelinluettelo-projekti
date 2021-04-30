import React from 'react'

 
const NumberInput = ( {onChange, newNumber} ) => {
    return (
        <div>
        number: <input onChange={onChange} value={newNumber}/></div>
    )
  }

export default NumberInput