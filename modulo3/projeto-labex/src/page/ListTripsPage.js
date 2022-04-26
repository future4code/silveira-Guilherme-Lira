// Para vermos todas as viagens
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToApplication } from '../routes/coordinator'
import axios from "axios" 
import styled from 'styled-components'

const aluno = "Guilherme-Lira-Silveira"
const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trips`

const ContainerTripCard = styled.div`
    display: flex;
    flex-direction: column;
    grid-area: main;
    text-align: center;
    background-color: white;
    align-items: center;
    button {
        width: 100px;
    }
`

const TripCard = styled.div`
    grid-area: main;
    text-align: center;
    border: 1px solid black;
    width: 800px;
    height: 200px;
    margin-top: 10px;
    margin-bottom: 10px;
`

export function ListTripsPage() {
    const navigate = useNavigate()
    const [tripList, setTripList] = useState ([])

    useEffect(() => {getTrips()}, [])

    const getTrips = () => {
        axios.get(url)
        .then((res) => {
        setTripList(res.data.trips)
        console.log(res.data.trips)
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
        <button onClick={() => goToApplication(navigate)}> Se Inscrever</button>
        {listTrip}
      </ContainerTripCard>
    );
  }
  
  export default ListTripsPage;