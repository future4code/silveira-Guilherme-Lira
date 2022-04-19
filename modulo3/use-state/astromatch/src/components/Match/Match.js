import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components';

const MatchPage = styled.div`
    font-size: 100px;
`

const Match = (props) => {

    const getMatches = () => {
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches`).then((response) => {
            setProfileMatch(response.data.matches)
            console.log(response.data.matches)
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <h1> Página de Matches </h1>
    )
}
export default Match;