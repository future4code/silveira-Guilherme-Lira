import React, { useState } from "react";
import { InputContainer } from "./styled";
import useForm from '../../Hooks/useForm'
import { login } from "../../Services/User";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from '@mui/material';

export function LoginForm() {
    const [form, onChange, clear] = useForm({email:"", password:""})
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const onSubmitForm = (e) => {   
        e.preventDefault()
        login(form, clear, navigate, setIsLoading) // Função vem importada de services - users
    }

    return (
       <InputContainer onSubmit={onSubmitForm}>
       <input className="input1" placeholder={"E-mail"} name={"email"} value={form.email} onChange={onChange} type={"email"} required/>
       <input className="input1" placeholder={"Senha"} name={"password"} value={form.password} onChange={onChange} type={"password"} required/>
       <button type={"submit"}> {isLoading ? <CircularProgress/> : <p>Entrar</p>} </button>
       </InputContainer>
    )
}

  export default LoginForm;