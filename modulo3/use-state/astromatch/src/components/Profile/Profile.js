import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components';

const ProfileContainer = styled.div`
display: flex;
justify-content: center
`

const ProfileCard = styled.div`
display: flex;
align-items: center;
flex-direction: column;
border: 1px solid black;
width: 500px;
img {
width: 400px;
height: 400px;
}
button {
width: 50px;
margin: 0 auto;
display: inline-block;
}
`
const aluno = "Guilherme-Lira-Silveira"

const Profile = (props) => {

    const getProfile = () => {
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/person`).then((response) => {
            props.setProfile(response.data.profile)
            console.log(response.data.profile)

        }).catch((error) => {
            console.log(error)
        })
    }

    const choseProfile = (id, choice) => {
        axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/choose-person`, { id, choice }).then((response) => {
        }).catch((er) => {
            console.log(er)
        })
    }

    useEffect(() => {
        getProfile()
    }, [])


    return (
        <ProfileContainer>
            <ProfileCard>
                <h1>{`${props.profile.name}`}</h1>
                <p><img src={props.profile.photo} alt="ProfilePicture" /> </p>
                <p>{`${props.profile.bio}`}</p>
                <button onClick={() => choseProfile(true)}> O </button>
                <button onClick={() => choseProfile(false)}> X </button>
            </ProfileCard>
        </ProfileContainer>
    )
};

export default Profile;