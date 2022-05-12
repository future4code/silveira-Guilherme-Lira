import styled from "styled-components";

export const MainContainerFeed = styled.div`
    grid-area: main;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
`

export const MakePostContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const FormStyled = styled.form`
    display:flex;
    flex-direction: column;
    align-items: center;
`

export const Input = styled.input`
    width: 400px;
    height: 30px;
    background-color: #DCDCDC;
    border-radius: 15px;
`

export const TextArea = styled.textarea`
    width: 400px;
    height: 150px;
    background-color: #DCDCDC;
    border-radius: 15px;
`

export const Button = styled.button`
    width: 100px;
    height: 50px;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
`

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
    border: 1px black solid;
    border-radius: 10px;
    margin-bottom: 5px;
`

export const PostCard = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    border-radius: 5px;
`
export const IconLogic = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .uparrow{
        margin-right: 5px;
    }
    .downarrow{
        margin-right: 20px;
        margin-left: 20px;
    }
`

export const ActionCard = styled.div`
    display: flex;
    flex-direction: column;
`