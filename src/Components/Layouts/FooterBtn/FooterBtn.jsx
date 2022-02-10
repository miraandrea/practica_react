import React from 'react';
import { Botones } from '../../UI/Botones/Botones';
import './FooterBtn.css';

export const FooterBtn = () => {
  return ( 
    <div className='btncontainer1'>
        <Botones classNamebtn="btn2" texto="Github"/>
        <Botones classNamebtn="btn2" texto="Facebook"/>
        <Botones classNamebtn="btn2" texto="Whatsapp"/>
    </div>
    )
};
