import React from 'react';

export default ({ color, handleClick, selectedColor }) => {
  return (
    (color === selectedColor)
      ? <div className={color + " selected"} onClick={() => handleClick(color)} />
      : <div className={color} onClick={() => handleClick(color)} />
  )
}
