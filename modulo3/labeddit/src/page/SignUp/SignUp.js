import React from "react";
import { FormContainer } from './styled'
import { useNavigate } from "react-router-dom";
import { goBack } from "../../routes/coordinator";
import SignUpForm from "./SignUpForm";
import useUnprotectedPage from "../../Hooks/useUnprotectedPage";

export function SignUp() {
    useUnprotectedPage()
    const navigate = useNavigate()
    return (
      <FormContainer>
       <h1> Seja bem vinds a nossa página de cadastro !</h1>
       <p> Para poder acessar o nosso site e se tornar parte da comunidade, basta preencher o seguinte cadastro.</p>
       <SignUpForm/>
       <p> Caso queira voltar para página anterior. </p>
       <button className='btn2' onClick={() => goBack(navigate)}> Voltar</button>
      </FormContainer>
    )
}

  export default SignUp;