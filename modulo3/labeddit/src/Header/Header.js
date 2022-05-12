import React from "react";
import { HeaderContainer } from './style'
import logo from '../img/logo.png'

export function Header() {  
  return (
    <HeaderContainer>
    <h1> Bem vindo ao LabEddit! </h1>
    <img alt='logo' src={logo}></img>
    </HeaderContainer>
  );
}

export default Header;