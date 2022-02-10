import React from 'react';

export const BotonesContenedor = ({texto, BtnContenedor, funcionClick}) => {
  return (
    <div>
        <button className={BtnContenedor} onClick={funcionClick}>{texto}</button>
    </div>
  )
};