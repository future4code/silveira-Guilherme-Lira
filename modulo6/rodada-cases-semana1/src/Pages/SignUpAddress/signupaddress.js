import React from 'react'
import { ButtonStyled, InputMaterial, Main } from './style'
import { useForm } from '../../Hooks/useForm'
import { BASE_URL } from './../../Constants/url';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { goToFeed } from '../../Routes/coordinator';
import Header from '../../Components/Header/Header';

const SignUpAddress = () => {

    const { form, onChange, clean } = useForm({
        "street": "",
        "number": "",
        "neighbourhood": "",
        "city": "",
        "state": "",
        "complement": ""
    })

    const navigate = useNavigate()

    const onSubmitFormAddress = (event) => {
        event.preventDefault()
        console.log(form)
        addAddress()
        goToFeed(navigate)
    }

    const addAddress = async () => {
        const token = localStorage.getItem('token')
        await axios.put(`${BASE_URL}/address`, form, {
            headers: {
                auth: token
            }
        })
        .then((res) => {
            localStorage.setItem('token', res.data.token)
        })
        .catch((er) => {
            console.log(er.response)
        })
    }


    return (
        <Main>
            <Header back/>
            <p>Meu Endereço</p>
            <form onSubmit={onSubmitFormAddress}>
                <InputMaterial
                    id="outlined-basic"
                    label={"Logradouro"}
                    name='street'
                    type={'text'}
                    placeholder={'Rua / Av.'}
                    variant="outlined"
                    value={form.street}
                    onChange={onChange}
                    required
                />
                <InputMaterial
                    id="outlined-basic"
                    label={"Número"}
                    name='number'
                    type={'number'}
                    placeholder={'Número'}
                    variant="outlined"
                    value={form.number}
                    onChange={onChange}
                    required
                />
                <InputMaterial
                    id="outlined-basic"
                    label={"Complemento"}
                    name='complement'
                    type={'text'}
                    placeholder={'Apto. / Bloco'}
                    variant="outlined"
                    value={form.complement}
                    onChange={onChange}
                />
                <InputMaterial
                    id="outlined-basic"
                    label={"Bairro"}
                    name='neighbourhood'
                    type={'text'}
                    placeholder={'Bairro'}
                    variant="outlined"
                    value={form.neighbourhood}
                    onChange={onChange}
                    required
                />
                <InputMaterial
                    id="outlined-basic"
                    label={"Cidade"}
                    name='city'
                    type={'text'}
                    placeholder={'Cidade'}
                    variant="outlined"
                    value={form.city}
                    onChange={onChange}
                    required
                />
                <InputMaterial
                    id="outlined-basic"
                    label={"Estado"}
                    name='state'
                    type={'text'}
                    placeholder={'Estado'}
                    variant="outlined"
                    value={form.state}
                    onChange={onChange}
                    required
                />
                <ButtonStyled type="submit"> Salvar </ButtonStyled>
            </form>
        </Main>
    )
}

export default SignUpAddress