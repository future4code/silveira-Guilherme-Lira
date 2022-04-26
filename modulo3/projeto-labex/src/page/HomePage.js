// Para o usuário escolher entre Área Administrativa e Lista de Viagens
import React from "react";
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";
import { goToListTrip, goToAdmin } from '../routes/coordinator'

export const MainContainer = styled.div`
  grid-area: main;
  text-align: center;
  background-color: white;
  button {
    background-color: #E2B4BD;  
    border-radius: 10px;
    border: 4px double black;
    color: black;
    text-align: center;
    font-size: 15px;
    padding: 20px;
    width: 200px;
    cursor: pointer;
    margin: 100px;
  }
`

export function HomePage() {
  const navigate = useNavigate()

  return (
    <MainContainer>
     <h1> Seja bem vindo ao LabeX seu lugar favorito para viagens fora desse mundo.</h1>
     <p> Por favor, escolha clicando nos botões abaixo o que você gostaria de fazer:</p>
     <button onClick={() => goToListTrip(navigate)}> Ver Viagens</button>
     <button onClick={() => goToAdmin(navigate)}> Área Admin</button>
    </MainContainer>
  )
}

export default HomePage;

