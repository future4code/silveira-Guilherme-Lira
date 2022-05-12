import React from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../Constants/url";
import { useParams } from 'react-router-dom'
import useProtectedPage from "../../Hooks/useProtectedPage";
import useRequestData from "../../Hooks/useRequestData";
import { ScreenContainer, PostContainer, PostContainerFather } from "./style";
import { logout } from "../../Services/User";
import PostForm from "./PostForm";
import { goBack } from "../../routes/coordinator";
import CommentCard from "./CommentCard";
import { Loading } from '../../Loading/Loading'
import axios from 'axios'

export function Post() {
  useProtectedPage()
  const navigate = useNavigate()
  const params = useParams()
  const posts = useRequestData([], `${BASE_URL}/posts`)
  const comments = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)

  const TitleComment = posts && posts.map((post) => {
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

  const commentVote = (commentId, direction) => {
    const headers = {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }
    const body = {
        direction: direction
    }
    if (direction === 1){
        axios
        .post(`${BASE_URL}/comments/${commentId}/votes`, body, headers)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err.response)
        })
    } else if (direction === -1) {
        axios
        .put(`${BASE_URL}/comments/${commentId}/votes`, body, headers)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err.response)
        })
    } else {
        axios
        .delete(`${BASE_URL}/comments/${commentId}/votes`, headers)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err.response)
        })
    }
}

  const commentCards = comments && comments.map((comment) => {
    return (
      <CommentCard
        key={comment.id}
        username={comment.username}
        body={comment.body}
        voteSum={comment.voteSum}
        id={comment.id}
        userVote={comment.userVote}
        commentVote={commentVote}
      />
    )
  })

  return (
    <ScreenContainer>
      <button onClick={() => goBack(navigate)}> Voltar </button>
      <button onClick={() => logout(navigate)}> Deslogar! </button>
      <h1> Post Principal </h1>
      <PostContainerFather>
      {TitleComment.length > 0 ? TitleComment : <Loading />}
      </PostContainerFather>
      <PostForm />
      {commentCards.length > 0 ? commentCards : <Loading />} 
    </ScreenContainer>
  )
}

export default Post;