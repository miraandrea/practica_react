import React from 'react';
import { Botones } from '../../UI/Botones/Botones';
import './BtnContenedor.css';


export const BtnContenedor = () => {
  return ( 
  <div className='btncontainer'>
    
      <Botones classNamebtn="btn1" texto="Home"/>
      <Botones classNamebtn="btn1" texto="About Us"/>
      <Botones classNamebtn="btn1" texto="Contact"/>
  </div>
  )
 
};
