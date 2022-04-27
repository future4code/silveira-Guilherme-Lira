import styled from 'styled-components'
import React from "react";

const HeaderContainer = styled.div`
  display: flex;
  grid-area: header;
  background-color: #93A8AC;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
  button{
    margin-right: 10px;
  }
`

export function Header() {  
  return (
    <HeaderContainer>
    <h1> Bem vindo ao LabeX! </h1>
    </HeaderContainer>
  );
}

export default Header;
