import React from 'react';

export default ({ color, selectColor }) => {
  return (
    <div className={color} onClick={() => selectColor(color)} />
  )
}
