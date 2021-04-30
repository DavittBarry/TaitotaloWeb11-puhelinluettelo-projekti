import React from 'react'

const Button = (props) => {
    return (
      <button onClick={props.onClick} type="submit">Add Contact</button>
    )
  }

export default Button