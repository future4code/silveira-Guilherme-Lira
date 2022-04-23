import React, { useState } from 'react'
import Profile from "./components/Profile/Profile";
import Match from "./components/Match/Match"
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import logo from './img/logo.png'
import styled from 'styled-components';

const Main = styled.div`
  background-color: white;
`
const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #f9f9f9;
    align-items: center;
    background-color: white;
    .header_logo{
        height: 40px;
        object-fit: contain;
    }

    .header_icon{
        padding: 20px;
    }
`

export default function App() {
  const [page, setPage] = useState("profile")

  const chosePage = () => {
    switch (page) {
      case "profile":
        return <Profile goToMatch={goToMatch} goToProfile={goToProfile}/>
      case "matches":
        return <Match goToProfile={goToProfile} goToMatch={goToMatch}/>
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
    <Main>
       <HeaderContainer>
            <IconButton>
                <PersonIcon onClick={goToProfile} className='header_icon' fontSize='large' />
            </IconButton>
                <img className="header_logo" src={logo} alt="logo" />
            <IconButton>
                <FavoriteIcon onClick={goToMatch} className='header_icon' fontSize='large' />
            </IconButton>
        </HeaderContainer >
      {chosePage()}
    </Main>
  );
}
