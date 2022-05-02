// Formulário para o administrador criar uma nova viagem
import React, { useEffect, useState } from 'react'
import { goBack, goToLogin } from '../routes/coordinator'
import { useNavigate } from 'react-router-dom'
import { ContainerForm, FillForm, ButtonPhysics } from "../components/main/styles";
import { useProtectedPage } from '../components/main/Protect'
import axios from "axios" 

const aluno = "Guilherme-Lira-Silveira"
const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trips`
const headers = {headers: {auth: localStorage.getItem("token")}}

export function CreateTripPage() {
    const navigate = useNavigate()
    const [tripList, setTripList] = useState ([])

    useProtectedPage()

    return (
      <ContainerForm>
        <h1> PÁGINAS PARA CADASTRAR NOVAS VIAGENS </h1>
       <FillForm>
       <input placeholder={"Nome"} name={"name"} /* value={#} onChange={onChange} */ pattern={"^.{5,}$"} title={"O nome da viagem deve ter no mínimo 5 caracteres"} required/>
        
       <select placeholder={"Planeta"} name={"planet"} /* defaultValue={""} onChange={onChange} */ required>
       <option value={""} disabled>Escolha uma viagem</option>
       </select>

       <input placeholder={"Data"} type={"date"} name={"date"} /* value={#} onChange={onChange} */ required />

       <input placeholder={"Descrição"} name={"description"} /* value={#} onChange={onChange} */ required pattern={"^.{30,}$"} title={"O nome deve ter no mínimo 30 caracteres"} />

       <input placeholder={"Duração em dias"} type={"number"} name={"durationInDays"} /* value={#} onChange={onChange} */ required min={50}/>
        </FillForm>
      <ButtonPhysics>
      <button className="btn1" onClick={() => goBack(navigate)}> Voltar</button>
      <button className="btn2"> Criar</button>
      </ButtonPhysics>
      </ContainerForm>
    );
  }
  
  export default CreateTripPage;