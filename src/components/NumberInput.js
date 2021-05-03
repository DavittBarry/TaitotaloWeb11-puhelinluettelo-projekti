import React from 'react'

 
const NumberInput = ( {onChange, newNumber} ) => {
    return (
        <div>
        Number: <input onChange={onChange} value={newNumber}/></div>
    )
  }

export default NumberInput