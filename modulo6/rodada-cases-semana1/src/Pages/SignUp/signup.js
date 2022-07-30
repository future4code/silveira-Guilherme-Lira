import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { IconButton } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from '../../Hooks/useForm'
import { ButtonStyled, DivPassword, Form, InputMaterial, Main } from './style'
import {BASE_URL} from '../../Constants/url'
import {goToSignUpAddress} from '../../Routes/coordinator'
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header'

const SignUp = () => {

    const {form, onChange, clean} = useForm({
        "name": "",
        "email": "",
        "cpf": "",
        "password": ""
    })

    const [confirmPass, setConfirmPass] = useState('')
    const [showPass, setShowPass] = useState(false)
    const [checkErrPass, setCheckErrPass] = useState(false)
    const navigate = useNavigate()

    const onSubmitForm = (event) => {
        event.preventDefault()

        if(form.password !== confirmPass){
            setCheckErrPass(true)
        } else {
            setCheckErrPass(false)
            signUpPerson()
        }
    }

    const handleClickShowPass = () => {
        setShowPass(!showPass)
    }

    const cpfMask = value => {
        return value
          .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
          .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
          .replace(/(\d{3})(\d)/, '$1.$2')
          .replace(/(\d{3})(\d{1,2})/, '$1-$2')
          .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
    }

    const signUpPerson = async () => {
        await axios.post(`${BASE_URL}/signup`, form)
        .then((res) => {
            localStorage.setItem('token', res.data.token)
            alert(`boas vindas ${res.data.user.name}`)
            goToSignUpAddress(navigate)
            clean()
        }).catch((err) => {
            alert('Email e/ou CPF já cadastrados')
            clean()
            setConfirmPass('')
        })

    }

    return (
        <Main>
            <Header back/>
            <p> Cadastrar </p>

            <Form onSubmit={onSubmitForm}>

                <InputMaterial
                    id="outlined-basic"
                    label={"Nome"}
                    name='name'
                    type={'text'}
                    placeholder={'Digite seu nome'}
                    variant="outlined"
                    value={form.name}
                    onChange={onChange}
                    required
                />

                <InputMaterial
                    id="outlined-basic"
                    label={"Email"}
                    name='email'
                    type={'email'}
                    placeholder={'Digite seu email'}
                    variant="outlined"
                    value={form.email}
                    onChange={onChange}
                    required
                />

                <InputMaterial
                    id="outlined-basic"
                    label={"Cpf"}
                    name='cpf'
                    type={'text'}
                    placeholder={'Digite seu cpf'}
                    variant="outlined"
                    value={cpfMask(form.cpf)}
                    onChange={onChange}
                    required
                />

                <DivPassword>
                    <InputMaterial
                        id="outlined-adornment-password" 
                        label={"Password"}
                        name='password'
                        type={showPass ? 'text' : 'password'}
                        placeholder={'Mínimo 6 caracteres'}
                        inputProps={{ minLength: 6, title: "A senha deve contar no mínimo 6 caracteres" }}
                        value={form.password}
                        onChange={onChange} 
                        required
                    />

                    <IconButton aria-label="toggle password visibility" onClick={handleClickShowPass} edge="end">
                        {showPass ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                </DivPassword>

                <DivPassword>
                    <InputMaterial
                        error={checkErrPass}
                        helperText={checkErrPass ? 'Deve ser a mesma que a anterior' : ""}
                        id="outlined-adornment-password" 
                        label={"Confirmar"}
                        type={showPass ? 'text' : 'password'}
                        placeholder={'Mínimo 6 caracteres'}
                        inputProps={{ minLength: 6, title: "A senha deve contar no mínimo 6 caracteres" }}
                        value={confirmPass}
                        onChange={(e) => { setConfirmPass(e.target.value)}} 
                        required
                    />

                    <IconButton aria-label="toggle password visibility" onClick={handleClickShowPass} edge="end">
                        {showPass ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                </DivPassword>

                <ButtonStyled type='submit'> Entrar </ButtonStyled>

            </Form>
        </Main>
    )
}

export default SignUp