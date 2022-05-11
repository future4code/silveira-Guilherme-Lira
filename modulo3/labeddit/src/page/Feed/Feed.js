import React from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../Constants/url";
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import useRequestData from "../../Hooks/useRequestData";
import { goToPost } from "../../routes/coordinator";
import { logout } from "../../Services/User";
import FeedForm from "./FeedForm";
import { PostContainer, PostCard, MainContainerFeed, MakePostContainer, Button } from "./styled";

export function Feed() {
    useProtectedPage()
    const navigate = useNavigate()
    const posts = useRequestData([], `${BASE_URL}/posts`)

    const onClickCard = (id) => {
      goToPost(navigate, id)
    }

    const postCards = posts && posts.map((post) => {
      return (
      <PostCard key={post.id} onClick={() => onClickCard(post.id)}>
      <p> Titulo: {post.title} </p>
             <p> Body: {post.body} </p>
             <p> Likes: {post.voteSum} </p>
             <p> # Coments: {post.commentCount} </p>
      </PostCard>
      )
    })
    

    return (
      <MainContainerFeed>
        <button onClick={() => logout(navigate)}> Deslogar! </button>
       <h1> Bem vindo a página de Feed!</h1>
       <p> Obrigado por fazer o login! Caso queira postar algo pode usar o espaço abaixo: </p>
       <MakePostContainer>
        <FeedForm/>
       </MakePostContainer>
       <PostContainer>
         {postCards}
       </PostContainer>
      </MainContainerFeed>
    )
}

  export default Feed;