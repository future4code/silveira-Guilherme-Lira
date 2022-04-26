// Para o usuário se candidatar à viagens, página que vai ter o formulário de inscrição
import styled from 'styled-components'

const ContainerForm = styled.div`
    grid-area: main;
    display: flex;
    flex-direction: column;
    background-color: white;
    align-items: center;
`

const FillForm = styled.form`
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
        margin-bottom: px;
    }
`

export function ApplicationFormPage() {
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
    </ContainerForm>
   )
}

export default ApplicationFormPage;