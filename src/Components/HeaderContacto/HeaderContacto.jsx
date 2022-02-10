import React from 'react'
import { ContactoHeader } from '../UI/ContactoHeader/ContactoHeader'
import { NavLink } from 'react-router-dom'
import { Botones } from '../UI/Botones/Botones'

export const HeaderContacto = () => {
  return (
    <div>
        <ContactoHeader />
        <NavLink to='/'><Botones classNamebtn="btn1" texto="Salir"/></NavLink>
    </div>
  )
}
