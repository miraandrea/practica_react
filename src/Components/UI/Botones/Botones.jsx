import React from 'react';

export const Botones = ({texto, classNamebtn}) => {
  return (
    <div>
        <button className={classNamebtn}>{texto}</button>
    </div>
  )
};

