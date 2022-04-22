import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components';
import hearticon from '../../img/hearticon.jpg'

const ProfileCard = styled.div`
display: flex;
align-items: center;
flex-direction: column;
img {
width: 400px;
height: 400px;
border: 1px solid black;
}
button {
width: 100px;
margin: 10px auto;
display: inline-block;
}
`
const Heart = styled.img`
    width: 100px;
    height: 100px;
    :hover {
        transform: scale(0.9);
    }
    :active {
        position: relative;
        top: 1px;
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
        const body = {"id": profile.id , "choice": Boolean}
        const headers = { headers: { "Content-Type": "application/json" }}

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
        getProfile()}, [])


    return (
        <div>
            {profile ?
            <ProfileCard>
                <Heart src={hearticon} onClick={props.goToMatch}/>
                <h1>{profile.name}</h1>
                <p><img src={profile.photo} alt="ProfilePicture"/></p>
                <p>{profile.bio}</p>
                <button onClick={() => choseProfile(true)}> O </button>
                <button onClick={() => choseProfile(false)}> X </button>
            </ProfileCard> : 
            <ProfileCard>
            <p> Acabou os perfis! Mas se quiser pode resetar e tentar novamente!</p><br></br>
            <p> A opção está na sua página de Matches, Dê uma olhada lá clicando no botão abaixo.</p>
            <button onClick={props.goToMatch}>Matches</button>
            </ProfileCard>}
        </div>
    )
};

export default Profile;