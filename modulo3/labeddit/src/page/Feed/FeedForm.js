import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Input, TextArea, Button, FormStyled } from './styled'
import useForm from '../../Hooks/useForm'
import { createPost } from '../../Services/Post'
import { CircularProgress } from '@mui/material';

export const FeedForm = () => {
  const navigate = useNavigate()
  const [form, onChange, clear] = useForm ({title:'', body:''})
  const [isLoading, setIsLoading] = useState(false)

  const onSubmitForm = (e) => {
    e.preventDefault()
    createPost(form, clear, setIsLoading)
  }

      return(
        <FormStyled onSubmit={onSubmitForm}>
          <Input placeholder={"Título do Post..."} name={"title"} value={form.title} onChange={onChange} required></Input>
          <TextArea placeholder={"Escreva seu Post..."} name={"body"} value={form.body} onChange={onChange} required></TextArea>
          <Button> {isLoading ? <CircularProgress/> : <p>Postar</p>} </Button>
        </FormStyled>
      ) 
    
}

export default FeedForm