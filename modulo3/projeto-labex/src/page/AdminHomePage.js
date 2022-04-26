// Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas
import React from "react";
import { useNavigate } from "react-router-dom";
import { goToListTrip, goToAdmin } from '../routes/coordinator'

export function AdminHomePage() {
  const navigate = useNavigate()

  return (
    <div>
     <h1> AdminHomePage - Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas</h1>
     <button onClick={() => goToListTrip(navigate)}> Ver Viagens</button>
     <button onClick={() => goToAdmin(navigate)}> Área Admin</button>
    </div>
  );
}

export default AdminHomePage;

