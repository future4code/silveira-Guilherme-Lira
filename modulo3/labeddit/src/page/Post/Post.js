import React from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../Constants/url";
import { useParams } from 'react-router-dom'
import useProtectedPage from "../../Hooks/useProtectedPage";
import useRequestData from "../../Hooks/useRequestData";
import { ScreenContainer, CommentContainer, PostContainer, PostContainerFather } from "./style";
import { logout } from "../../Services/User";
import PostForm from "./PostForm";

export function Post() {
    useProtectedPage()
    const navigate = useNavigate()
    const params = useParams()
    const posts = useRequestData([], `${BASE_URL}/posts`)
    const comments = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)

    const TitleComment = posts.map((post) => {
      if (post.id === params.id) {
          return (
              <PostContainer key={post.id}>
                 <p>User:{post.username}</p>
                 <p>Título:{post.title}</p>
                 <p>Descrição:{post.body}</p>
              </PostContainer>
          )
      }
  })

    const commentCards = comments && comments.map((comment) => {
      return (
      <CommentContainer key={comment.id}>
        <h1> Enviado por: {comment && comment.username} </h1>
         <p> Comentário: {comment && comment.body} </p>
      </CommentContainer>
      )
    })

    return (
      <ScreenContainer>
       <button onClick={() => logout(navigate)}> Deslogar! </button>
       <h1> Bem vindo a página de Post!</h1>
       <p> Está é a página dos posts e tal </p>
       <PostContainerFather>
       {TitleComment}
       </PostContainerFather>
       <PostForm/>
       {commentCards}
      </ScreenContainer>
    )
}

  export default Post;