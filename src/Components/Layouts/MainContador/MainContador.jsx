import React,{ useState, useEffect } from 'react';
import { BotonesContenedor } from '../../UI/BotonesContenedor/BotonesContenedor';
import { ImagContenedor } from '../../UI/ImagContenedor/ImagContenedor';
import { NavLink } from 'react-router-dom'
import { Botones } from '../../UI/Botones/Botones';

export const MainContador = () => {

  const [ contador, setConter ] = useState(0)

  const add = () => {
    setConter(contador + 10)
  }
  const reset = () => {
    setConter(0)
  }
  const substractiong = () => {
    setConter(contador - 10)
  }

  useEffect(() => {
    const img = document.getElementById('imagen')
    if( contador >= 100) {
      img.style.filter = "grayscale(90%)"
    }
    else {
      img.style.filter = "opacity(100%)"
    }
  })

  return (
  <div>
    <p>{contador}</p>
      <ImagContenedor />
      <BotonesContenedor BtnContenedor="btn" funcionClick={add} texto="+"/>
      <BotonesContenedor BtnContenedor="btn" funcionClick={reset} texto="Reset"/>
      <BotonesContenedor BtnContenedor="btn" funcionClick={substractiong} texto="-"/>
      <NavLink to='/'><Botones classNamebtn="btn1" texto="Salir"/></NavLink>
  </div>
  )
};
