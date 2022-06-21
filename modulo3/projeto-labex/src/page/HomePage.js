// Para o usuário escolher entre Área Administrativa e Lista de Viagens
import React from "react";
import { useNavigate } from "react-router-dom";
import { goToListTrip, goToLogin } from '../routes/coordinator'
import { MainContainer } from "../components/main/styles";

export function HomePage() {
  const navigate = useNavigate()

  return (
    <MainContainer>
     <h1> Seja bem vindo ao LabeX seu lugar favorito para viagens fora desse mundo.</h1>
     <p> Por favor, escolha clicando nos botões abaixo o que você gostaria de fazer:</p>
     <button className='btn1' onClick={() => goToListTrip(navigate)}> Ver Viagens</button>
     <button className='btn2' onClick={() => goToLogin(navigate)}> Área de Login</button>
    </MainContainer>
  )
}

export default HomePage;

