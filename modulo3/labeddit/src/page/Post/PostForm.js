import React, { useState } from "react"
import { TextArea, Button, FormStyled } from './style'
import useForm from '../../Hooks/useForm'
import { useParams } from "react-router";
import { CircularProgress } from '@mui/material';
import { createComment } from '../../Services/Comment'

export const PostForm = () => {
  const params = useParams()
  const [form, onChange, clear] = useForm ({ body:''})
  const [isLoading, setIsLoading] = useState(false)

  const onSubmitForm = (e) => {
    e.preventDefault()
    createComment(form, clear, params.id, setIsLoading)
  }
      return(
        <FormStyled onSubmit={onSubmitForm}>
          <TextArea placeholder={"Escreva seu Post..."} name={"body"} value={form.body} onChange={onChange} required></TextArea>
          <Button> {isLoading ? <CircularProgress/> : <p>Comentar</p>} </Button>
        </FormStyled>
      ) 
}

export default PostForm