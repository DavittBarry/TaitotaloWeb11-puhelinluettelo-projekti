import React from 'react'

 
const NameInput = ( {onChange, newName} ) => {
    return (
        <div>
        Name: <input onChange={onChange} value={newName}/></div>
    )
  }

export default NameInput