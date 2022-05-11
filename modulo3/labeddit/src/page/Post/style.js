import styled from 'styled-components'

export const ScreenContainer = styled.div`
    grid-area: main;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 5px;
`

export const CommentContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    width: 300px;
    margin-top: 10px;
    text-align: center;
`

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
`

export const TextArea = styled.textarea`
    width: 400px;
    height: 150px;
`

export const Button = styled.button`
    width: 100px;
    height: 50px;
    margin-top: 10px;
    margin-bottom: 10px;
`

export const PostContainerFather = styled.div`
    display: flex;
    flex-direction: column;
`

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
`

export const PostCard = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    border-radius: 5px;
    margin-bottom: 10px;
`
