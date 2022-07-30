import styled from 'styled-components'
import { Button } from '@mui/material'
import TextField from '@mui/material/TextField'

export const InputMaterial = styled(TextField)`
    width: 100%
`

export const Main = styled.div`
    padding: 10px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    p{
    font-size: 2rem;
    }

    form{
        margin-top: 50px;
        display: flex;
        width: 90%;
        height: 50%;
        justify-content: space-evenly;
        flex-direction: column;
    }
`

export const ButtonStyled = styled(Button)`
    &&{
        color: #000;
        width: 100%;
        background-color: #E8222E;
        margin-top: 5px;
    }
`