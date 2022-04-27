// Para vermos todas as viagens
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToApplication, goBack } from '../routes/coordinator'
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

const ButtonPhysics = styled.div`
    display: flex;
    button{
        width: 200px;
    }
    .btn1 {
        margin-right: 50px;
    }
    .btn2 {
        margin-left: 50px;
    }
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
        <ButtonPhysics>
        <button className="btn1" onClick={() => goBack(navigate)}> Voltar</button>
        <button className="btn2" onClick={() => goToApplication(navigate)}> Se Inscrever</button>
        </ButtonPhysics>
        {listTrip}
      </ContainerTripCard>
    );
  }
  
  export default ListTripsPage;