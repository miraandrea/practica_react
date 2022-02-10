import React from 'react';
import { Botones } from '../../UI/Botones/Botones';
import { NavLink } from 'react-router-dom'
import './BtnContenedor.css';


export const BtnContenedor = () => {
  return ( 
  <div className='btncontainer'>
    
      <NavLink to='/'><Botones classNamebtn="btn1" texto="Home"/></NavLink>
      <NavLink to='/aboutUs'><Botones classNamebtn="btn1" texto="About Us"/></NavLink>
      <NavLink to='/contact'><Botones classNamebtn="btn1" texto="Contact"/></NavLink>

  </div>
  )
 
};
