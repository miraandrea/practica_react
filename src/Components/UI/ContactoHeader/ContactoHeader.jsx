import React from 'react'

export const ContactoHeader = () => {
  return (
    <div>
        <h1>Contacto</h1>
        <input type="text" name="nombre" id="nombre" placeholder='Nombre'/>
        <input type="text" name="apellido" id="apellido" placeholder='Apellido' />
        <input type="number" name="telefono" id="telefono" placeholder='Telefono' />
        <input type="email" name="email" id="email" placeholder='E-mail' />
    </div>
  )
}
