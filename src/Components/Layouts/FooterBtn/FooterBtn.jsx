import React from 'react';
import { Botones } from '../../UI/Botones/Botones';
import { NavLink } from 'react-router-dom'
import './FooterBtn.css';

const link = document.getElementById('link')
export const FooterBtn = () => {
  return ( 
    <div className='btncontainer1'>
      <a href="'https://es-la.facebook.com/' " id='link'></a>
        <NavLink to='https://github.com/'><Botones classNamebtn="btn2" texto="Github"/></NavLink>
        <NavLink to='/example'><Botones classNamebtn="btn2" texto="Facebook"/></NavLink>
        <NavLink to='/'><Botones classNamebtn="btn2" texto="Whatsapp"/></NavLink>
    </div>
    )
};
