import styled from 'styled-components'

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
export const FillForm = styled.form`
    display: flex;
    flex-direction: column;
    grid-area: main;
    margin-top: 10px;
    margin-bottom: 10px;
    input {
        width: 500px;
        height: 50px;
        margin-bottom: 20px;
    } 
    select {
        height: 30px;
        margin-bottom: 20px;
    }
`
export const ContainerForm = styled.div`
    grid-area: main;
    display: flex;
    flex-direction: column;
    background-color: white;
    align-items: center;
`

export const MainContainer = styled.div`
  grid-area: main;
  text-align: center;
  background-color: white;
  .btn1 {
        margin-right: 50px;
        width: 200px;
    }
    .btn2 {
        margin-left: 50px;
        width: 200px;
    }
`

export const ButtonPhysics = styled.div`
    display: flex;
    button{
        width: 200px;
    }
    .btn1 {
        margin-right: 50px;
        margin-bottom: 30px;
    }
    .btn2 {
        margin-left: 50px;
        margin-bottom: 30px;
    }
`

export const FillFormLogin = styled.form`
    display: flex;
    flex-direction: column;
    grid-area: main;
    margin-top: 10px;
    margin-bottom: 10px;
    input {
        width: 500px;
        height: 20px;
        margin-bottom: 20px;
    }
`

export const ContainerTripCard = styled.div`
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

export const TripCard = styled.div`
    grid-area: main;
    text-align: center;
    border: 1px solid black;
    width: 800px;
    height: 200px;
    margin-top: 10px;
    margin-bottom: 10px;
`

export const TripCardName = styled.div`
    grid-area: main;
    text-align: center;
    border: 1px solid black;
    width: 800px;
    height: 110px;
    margin-top: 10px;
    margin-bottom: 10px;
    .btn3 {
        margin-top: 10px;
    }
`

export const ContainerTripCardName = styled.div`
    display: flex;
    flex-direction: column;
    grid-area: main;
    text-align: center;
    background-color: white;
    align-items: center;
`