// Para vermos todas as viagens
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToApplication, goBack } from '../routes/coordinator'
import axios from "axios" 
import { ButtonPhysics, TripCard, ContainerTripCard } from '../components/main/styles'

const aluno = "Guilherme-Lira-Silveira"
const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trips`


export function ListTripsPage() {
    const navigate = useNavigate()
    const [tripList, setTripList] = useState ([])

    useEffect(() => {getTrips()}, [])

    const getTrips = () => {
        axios.get(url)
        .then((res) => {
        setTripList(res.data.trips)
        }).catch((er) => {
            console.log(er)
        }
    )}

    const listTrip = tripList && tripList.map((trip) => {
        return (
            <TripCard key={trip.id}>
                <p>Nome: {trip.name}</p>
                <p>Descrição: {trip.description}</p>
                <p>Planeta: {trip.planet}</p>
                <p>Duração: {trip.durationInDays}</p>
                <p>Data da Viagem: {trip.date}</p>
            </TripCard>
        )
    })

    return (
      <ContainerTripCard>
        <h1> PÁGINAS COM A LISTA DE VIAGENS </h1>
        <ButtonPhysics>
        <button className="btn1" onClick={() => goBack(navigate)}> Voltar</button>
        <button className="btn2" onClick={() => goToApplication(navigate)}> Se Inscrever</button>
        </ButtonPhysics>
        {listTrip}
      </ContainerTripCard>
    );
  }
  
  export default ListTripsPage;