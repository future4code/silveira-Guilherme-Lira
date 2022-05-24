import styled from 'styled-components'

export const FormContainer = styled.div`
    grid-area: main;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const InputContainer = styled.form`
    display: flex;
    flex-direction: column;
    .input1 {
        margin-top: 10px;
        margin-bottom: 10px;
        width: 80vw;
        max-width: 450px;
        height: 30px;
    }
    .button {
        height: 40px;
    }
`