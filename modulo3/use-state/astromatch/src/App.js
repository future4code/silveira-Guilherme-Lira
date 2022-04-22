import React, { useState } from 'react'
import Profile from "./components/Profile/Profile";
import Match from "./components/Match/Match"
import styled from 'styled-components';
import Header from "./Header"

const ProfileContainer = styled.div`
  width: 400px;
  height: 720px;
	position: fixed;
	top: 45%;
	left: 50%;
	transform: translate(-50%, -50%);
  border: 1px solid black;
  background-color: white;
  box-shadow: 0 0 5px #0000000F;
`

export default function App() {
  const [page, setPage] = useState("profile")

  const chosePage = () => {
    switch (page) {
      case "profile":
        return <Profile goToMatch={goToMatch} />
      case "matches":
        return <Match goToProfile={goToProfile} />
      default:
        return <Profile />
    }
  }

  const goToMatch = () => {
    setPage("matches")
  }

  const goToProfile = () => {
    setPage("profile")
  }

  return (
  <div>
  <Header />
      <ProfileContainer>
        {chosePage()}
      </ProfileContainer>
  </div>
  );
}
