import React, { useState } from 'react'
import Profile from "./components/Profile/Profile";
import Match from "./components/Match/Match"
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import logo from './img/logo.png'
import styled from 'styled-components';
import GlobalStyle from './globalStyles';

const Main = styled.div`
  min-height: 100vh; /* minimum height = screen height */
  display: flex;
  justify-content: center;
  align-items: center;
`
const MainAgain = styled.div`
  background-color: white;
  position:absolute;
  top:50%;
  left:50%;
  right:50%;
  bottom: 10%;
  margin-top:-45vh; /* this is half the height of your div*/  
  margin-left:-30vh;
  margin-right: -30vh;
  border-radius: 15px;
`

const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
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
      <GlobalStyle />
      <MainAgain>
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
      </MainAgain>
    </Main>
  );
}
