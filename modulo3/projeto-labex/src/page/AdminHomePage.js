// Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas
import React from "react";
import { useNavigate } from "react-router-dom";
import { goBack, goToCreateTrip } from '../routes/coordinator'
import { MainContainer } from "../components/main/styles";

export function AdminHomePage() {
  const navigate = useNavigate()

  return (
    <MainContainer>
     <h1> AdminHomePage - Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas</h1>
     <button onClick={() => goBack(navigate)}> Voltar </button>
     <button onClick={() => goToCreateTrip(navigate)}> Criar Viagens</button>
     <button> Logout </button>
    </MainContainer>
  );
}

export default AdminHomePage;

