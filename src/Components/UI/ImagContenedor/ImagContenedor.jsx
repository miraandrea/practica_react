import React from 'react';
import img from './ImgCont/images.jpg'
import './ImagContenedor.css'

export const ImagContenedor = () => {
  return (
  <div> 
      <img id="imagen" src={img} alt="gato" /> 
  </div>
    )
};
