import React from 'react';

export default ({ color, selectedColor }) => {
  return <div className={color + ((color === selectedColor) ? ' selected' : '')}/>
}
