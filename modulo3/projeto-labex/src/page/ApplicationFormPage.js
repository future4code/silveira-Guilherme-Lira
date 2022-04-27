// Para o usuário se candidatar à viagens, página que vai ter o formulário de inscrição
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { goBack } from '../routes/coordinator'
import { ButtonPhysics , FillForm, ContainerForm } from "../components/main/styles";

export function ApplicationFormPage() {
    const navigate = useNavigate()
    return (
    <ContainerForm>
    <h1> PÁGINA PARA SE CADASTRAR</h1>
    <FillForm>
    <select placeholder={"Planeta"} name={"planet"} /* defaultValue={""} onChange={onChange} */ required>
    <option value={""} disabled>Escolha uma viagem</option></select>
       
    <input placeholder={"Nome"} name={"name"} /* value={#} onChange={onChange} */ pattern={"^.{5,}$"} title={"O nome da viagem deve ter no mínimo 5 caracteres"} required/> 

    <input placeholder={"Idade"} type={Number} name={"idade"} /* value={#} onChange={onChange} */ pattern={"^.{5,}$"} title={"O nome da viagem deve ter no mínimo 5 caracteres"} required/> 

    <input placeholder={"Texto"} name={"Texto"} /* value={#} onChange={onChange} */ required />

    <input placeholder={"Profissão"} name={"Profissão"} /* value={#} onChange={onChange} *//>

    <select placeholder={"Pais"} name={"Pais"} /* defaultValue={""} onChange={onChange} */ required>
    <option value={""} disabled>Escolha um País</option></select>
    </FillForm>
    <ButtonPhysics>
    <button className="btn1" onClick={() => goBack(navigate)}> Voltar</button>
    <button className="btn2"> Enviar</button>
    </ButtonPhysics>
    </ContainerForm>
   )
}

export default ApplicationFormPage;