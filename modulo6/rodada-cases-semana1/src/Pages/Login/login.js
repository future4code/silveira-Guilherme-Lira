import React, { useState } from 'react'
import axios from 'axios'
import { Main, Form, ButtonStyled, DivPassword, InputMaterial } from './style'
import { IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { BASE_URL } from "../../Constants/url"
import { useNavigate } from 'react-router-dom';
import { goToFeed } from '../../Routes/coordinator'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPass, setShowPass] = useState(false)
    const [erremail, setErrEmail] = useState('')
    const [errPass, setErrPass] = useState('')
    const navigate = useNavigate()


    const handleClickShowPass = () => {
        setShowPass(!showPass)
    }

    const onSubmitLogin = (e) => {
        e.preventDefault()

        const userLogin = {
            email, password
        }
        
        loginApi(userLogin)
    }

    const loginApi = async (body) => {
        await axios.post(`${BASE_URL}/login`, body)
            .then((res) => {
                setErrEmail('')
                setErrPass('')
                localStorage.setItem('token', res.data.token)
                goToFeed(navigate)
            })
            .catch((err) => {
                if (err.response.data.message.inclues('Senha incorreta')) {
                    setErrEmail(err.response.data.message)
                } else {
                    setErrEmail(err.response.data.message)
                }
            })
    }

    return (
        <Main>
            <p> Entrar </p>
            <Form onSubmit={onSubmitLogin}>
                <InputMaterial
                    onChange={(e) => setEmail(e.target.value)}
                    id="outlined-basic" 
                    label="E-mail" type={'email'}
                    variant="outlined" 
                    placeholder={'email@mail.com'}
                    value={email} 
                    required
                />

                <DivPassword>
                    <InputMaterial
                        onChange={(e) => setPassword(e.target.value)}
                        inputProps={{ minLength: 6, title: "A senha deve contar no mínimo 6 caracteres" }}
                        id="outlined-basic" 
                        label="Password" 
                        type={showPass ? 'text' : 'password'}
                        variant="outlined"
                        placeholder={'Mínimo 6 caracteres'}
                        value={password} 
                        required
                    />

                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPass}
                        edge="end"
                    >
                        {showPass ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </DivPassword>

                <ButtonStyled type='submit'> Entrar </ButtonStyled>
            </Form>
        </Main>
    )
}

export default Login