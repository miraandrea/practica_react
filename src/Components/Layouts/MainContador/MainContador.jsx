import React,{ useState, useEffect } from 'react';
import { BotonesContenedor } from '../../UI/BotonesContenedor/BotonesContenedor';
import { ImagContenedor } from '../../UI/ImagContenedor/ImagContenedor';

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
    if( contador < 100) {
      img.style.filter = "opacity(100%)"
    }
    else {
      img.style.filter = "grayscale(90%)"
    }
  })

  return (
  <div>
    <p>{contador}</p>
      <ImagContenedor />
      <BotonesContenedor BtnContenedor="btn" funcionClick={add} texto="+"/>
      <BotonesContenedor BtnContenedor="btn" funcionClick={reset} texto="Reset"/>
      <BotonesContenedor BtnContenedor="btn" funcionClick={substractiong} texto="-"/>
  </div>
  )
};
