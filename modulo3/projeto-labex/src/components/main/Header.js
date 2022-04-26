import styled from 'styled-components'
import React from "react";

export const WebSite = styled.div`
  display: grid;
  grid-template-rows: 1fr 10fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: 
    "header header header"
    "main main main"
    "footer footer footer";
  grid-gap: 0;
  height: 100vh;
`

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
