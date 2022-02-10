import React from 'react';
import { BtnContenedor } from '../../Layouts/BtnContenedor/BtnContenedor';
import { FooterBtn } from '../../Layouts/FooterBtn/FooterBtn';
import { Header } from '../../Layouts/Header/Header';
import './Home.css'

export const Home = () => {
  return (
  <div>
      <BtnContenedor />
      <Header />
      <FooterBtn />
  </div>
  )
};
