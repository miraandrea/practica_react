import React from 'react';
import img  from './img/imagen.jpg'
import './Imagen.css'

export const Imagen = () => {
  return (
  <div> 
      <hr/>
      <img src={img} alt="fondo" className='imagen' />
      <hr/>
  </div>
  )
};
