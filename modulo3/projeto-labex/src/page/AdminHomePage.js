// Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas
import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { goBack, goToCreateTrip, goToLogin, goToTripDetails } from '../routes/coordinator'
import { ContainerTripCardName, TripCardName, MainContainer } from "../components/main/styles";
import { useProtectedPage } from '../components/main/Protect'
import axios from "axios" 

const aluno = "Guilherme-Lira-Silveira"
const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trips`
const header = {  headers: {  auth: localStorage.getItem("token")  }}

export function AdminHomePage() {
  const navigate = useNavigate()
  const [tripList, setTripList] = useState ([])
  useProtectedPage()

  const logOut = () => {
    localStorage.removeItem("token");
    goToLogin(navigate);
  }

  const goToDetailsPage = (id) => {
    goToTripDetails(navigate, id)
}

  useEffect(() => {getTripsNames()}, [])

  const getTripsNames = () => {
    axios.get(url)
    .then((res) => {
    setTripList(res.data.trips)
    }).catch((er) => {
        console.log(er)
    }
)}

const onClickDelete = (id) => {
  const urlDel = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trips/${id}`
  axios
    .delete(urlDel, header)
    .then((res) => {
      console.log(res)
      alert("Viagem deletada!")
    })
    .catch((er) => {
      console.log(er.data);
    });
}

  const listTripName = tripList && tripList.map((trip) => {
    return (
        <TripCardName key={trip.id}>
            <button className='btn3' onClick={() => goToDetailsPage(trip.id)}> Editar Viagem </button>
            <p>{trip.name}</p> 
            <button className='btn4' onClick={() => onClickDelete(trip.id)}> Excluir Viagem </button>
        </TripCardName>
    )
})

  return (
    <MainContainer>
     <h1> AdminHomePage - Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas</h1>
     <button onClick={() => goBack(navigate)}> Voltar </button>
     <button onClick={() => goToCreateTrip(navigate)}> Criar Viagens</button>
     <button onClick={logOut}> Logout </button>
     <ContainerTripCardName>
     {listTripName}
    </ContainerTripCardName>
    </MainContainer>
  );
}

export default AdminHomePage;

