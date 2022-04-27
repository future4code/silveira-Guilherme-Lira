// Para o administrador ver o detalhe de uma viagem específica, bem como os candidatos que aplicaram para ela
import React, { useEffect } from "react";
import { ContainerForm } from "../components/main/styles";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const aluno = 'Guilherme-Lira-Silveira'
const idTeste = '0aQ9retlt9zxpeo40G2M'
const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trip/${idTeste}`

export function TripDetailsPage() {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')
        axios.get(url, {
            headers: {auth: token}
        })
        .then((res) => {
            console.log('Deu bom:', res.data.trip)
        }).catch((er) => {
            console.log('Deu ruim:', er.response)
        })
    }, [])
  
    return (
      <ContainerForm>
       <h1> Para o administrador ver o detalhe de uma viagem específica, bem como os candidatos que aplicaram para ela</h1>
      </ContainerForm>
    )
  }
  
  export default TripDetailsPage;