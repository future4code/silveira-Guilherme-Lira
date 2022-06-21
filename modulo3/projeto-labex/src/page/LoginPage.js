// Para fazermos login como administrador
import React, { useState } from "react";
import { ContainerForm, FillFormLogin, ButtonPhysics } from "../components/main/styles";
import { useNavigate } from "react-router-dom";
import { goBack, goToAdmin } from '../routes/coordinator'
import axios from "axios";

const aluno = 'Guilherme-Lira-Silveira'
const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/login`

export function LoginPage() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onSubmitLogin = () => {
    const body = {email: email, password: password}
    axios.post(url, body)
    .then((res) => {
    localStorage.setItem("token", res.data.token)
    console.log('Deu bom:', res.data)
    goToAdmin(navigate)
    }).catch((er) => {
        console.log('Deu ruim:', er)
    })
}

const onChangeEmail = (e) => {
    setEmail(e.target.value);
}

const onChangePassword = (e) => {
    setPassword(e.target.value);
}

    return (
      <ContainerForm>
       <h1> Para fazermos login como administrador</h1>
       <p> Por favor, Preencha as informações abaixo para poder acessar a área de administrador:</p>
       <FillFormLogin>
       <input placeholder={"E-mail"} name={"name"} onChange={onChangeEmail}/>
       <input placeholder={"Senha"} name={"name"} onChange={onChangePassword}/>
       </FillFormLogin>
       <ButtonPhysics>
       <button onClick={() => goBack(navigate)}> Voltar</button>
       <button className='btn2' onClick={() => onSubmitLogin()}> Entrar</button>
       </ButtonPhysics>
      </ContainerForm>
    )
  }
  
  export default LoginPage;
  