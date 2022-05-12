import React from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../Constants/url";
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import useRequestData from "../../Hooks/useRequestData";
import { goToPost } from "../../routes/coordinator";
import { logout } from "../../Services/User";
import FeedForm from "./FeedForm";
import { MainContainerFeed, MakePostContainer } from "./styled";
import { Loading } from '../../Loading/Loading'
import FeedCard from './FeedCard'
import axios from 'axios'


export function Feed() {
  useProtectedPage()
  const navigate = useNavigate()
  const posts = useRequestData([], `${BASE_URL}/posts`)

  const onClickCard = (id) => {
    goToPost(navigate, id)
  }

  const postVote = (postId, direction) => {
    const headers = {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }
    const body = {
      direction: direction
    }
    if (direction === 1) {
      axios
        .post(`${BASE_URL}/posts/${postId}/votes`, body, headers)
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log("1", err.response)
        })
    } else if (direction === -1) {
      axios
        .put(`${BASE_URL}/posts/${postId}/votes`, body, headers)
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log("2", err.response)
        })
    } else {
      axios
        .delete(`${BASE_URL}/posts/${postId}/votes`, headers)
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log("3", err.response)
        })
    }
  }

  const postCards = posts && posts.map((post) => {
    return (
      <FeedCard
        key={post.id}
        username={post.username}
        title={post.title}
        body={post.body}
        voteSum={post.voteSum}
        userVote={post.userVote}
        id={post.id}
        commentCount={post.commentCount}
        onClickCard={() => onClickCard(post.id)}
        postVote={postVote}
      />
    )
  })

  return (
    <MainContainerFeed>
      <button onClick={() => logout(navigate)}> Deslogar! </button>
      <h1> Bem vindo a página de Feed!</h1>
      <p> Obrigado por fazer o login! Caso queira postar algo pode usar o espaço abaixo: </p>
      <MakePostContainer>
        <FeedForm />
      </MakePostContainer>
        {postCards.length > 0 ? postCards : <Loading />}
    </MainContainerFeed>
  )
}

export default Feed;