import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TinderCard from 'react-tinder-card'
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    .button {
        width: auto;
    }
`
const Card = styled.div`
    position: relative;
    width: 500px;
    height: 500px;
    padding: 20px;
    max-width: 50vw;
    border-radius: 15px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 600px 600px;
    box-shadow: 0px 18px 53px 0px rgba(0, 0, 0, 0.3);
    h1{
        position: absolute;
        bottom: 20px;
        color: white;
        font-size: 30px;
        left: 20px;
    }
    p {
        position: absolute;
        bottom: -5px;
        left: 20px;
        color: white; 
        font-size: 15px;
    }
`
const SwipeButtons = styled.div`
    margin-bottom: 200px;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    .MuiIconButton-root {
        margin-top: 15px;
        background-color: white;
        box-shadow: 0px 10px 53px 0px rgba(0, 0, 0, 0.3) !important;
    }
    .left {
        padding: 20px;
        color: red !important;
    }
    .right {
        padding: 20px;
        color: green !important;
    }
`

const aluno = "Guilherme-Lira-Silveira"

const Profile = (props) => {
    const [profile, setProfile] = useState([])

    const getProfile = () => {
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/person`).then((response) => {
            if (response.data.profile != null)
                setProfile(response.data.profile)
            else {
                alert("Acabou os perfis!")
            }
        }).catch((error) => {
            console.log(error)
        })
    }

    const choseProfile = (Boolean) => {
        const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/choose-person`
        const body = { "id": profile.id, "choice": Boolean }
        const headers = { headers: { "Content-Type": "application/json" } }

        axios.post(url, body, headers)
            .then((response) => {
                console.log(response)
                getProfile()
            })
            .catch((er) => {
                console.log(er)
            })
    }

    useEffect(() => {
        getProfile()
    }, [])

    return (
        <CardContainer>
            <TinderCard className="swipe" key={profile.name} preventSwipe={["up", "down", "left", "right"]}>
                <Card style={{ backgroundImage: `url(${profile.photo})` }}>
                    <h1>{profile.name}, {profile.age}</h1>
                    <p>{profile.bio}</p>
                </Card>
                <SwipeButtons>
                    <IconButton>
                        <CloseIcon onClick={() => choseProfile(false)} fontSize="large" className="left" />
                    </IconButton>
                    <IconButton>
                        <FavoriteIcon onClick={() => choseProfile(true)} fontSize="large" className="right" />
                    </IconButton>
                </SwipeButtons>
            </TinderCard>
        </CardContainer>
    )
};

export default Profile;