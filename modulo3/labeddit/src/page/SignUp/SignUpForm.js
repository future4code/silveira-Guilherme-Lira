import React, { useState } from "react";
import { InputContainer } from './styled'
import useForm from '../../Hooks/useForm'
import { signUp } from "../../Services/User";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from '@mui/material';

export function SignUpForm() {
    const [form, onChange, clear] = useForm({username:"", email:"", password:""})
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const onSubmitForm = (e) => {    
      e.preventDefault()
      console.log(form)
      signUp(form, clear, navigate, setIsLoading)
    }

    return (
       <InputContainer onSubmit={onSubmitForm}>
       <input className='input1' placeholder={"Nome de usuário"} name={"username"} value={form.username} onChange={onChange} required/>
       <input className='input1' placeholder={"E-mail"} name={"email"} value={form.email} onChange={onChange} type={"email"} required/>
       <input className='input1' placeholder={"Senha"} name={"password"} value={form.password} onChange={onChange} type={"password"} required/>
       <p> Já terminou? Agora basta apertar o botão abaixo para terminar o cadastro e começar a interagir com nossa comunidade. </p>
       <button type={"submit"}> {isLoading ? <CircularProgress/> : <p>Cadastrar</p>} </button>
       </InputContainer>
    )
}

  export default SignUpForm;