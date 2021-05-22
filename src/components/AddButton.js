import React from 'react'

const Button = (props) => {
    return (
      <button onClick={props.onClick} type="submit">Add Message</button>
    )
  }

export default Button