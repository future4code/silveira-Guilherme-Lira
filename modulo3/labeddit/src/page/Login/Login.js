import React from "react";
import { FormContainer } from "./styled";
import { useNavigate } from "react-router-dom";
import { goToSignUp } from '../../routes/coordinator'
import LoginForm from "./LoginForm";
import useUnprotectedPage from "../../Hooks/useUnprotectedPage";

export function Login() {
    useUnprotectedPage()
    const navigate = useNavigate()
    return (
      <FormContainer>
       <h1> Ficamos felizes pela visita !</h1>
       <p> Por favor, Preencha as informações abaixo para poder acessar a sua conta e poder interagir conosco:</p>
       <LoginForm/>
       <p> Ainda não é nosso amigo? Basta clicar no botão abaixo para preencher o formulário para poder acessar o nosso site! </p>
       <button onClick={() => goToSignUp(navigate)}> Cadastrar </button>
      </FormContainer>
    )
}

  export default Login;