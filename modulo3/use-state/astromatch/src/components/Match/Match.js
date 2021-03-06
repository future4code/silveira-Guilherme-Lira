import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components';

const MatchCard = styled.div`
    margin-top: 5px;
    width: 500px;
    height: 70px;
    align-content: center;
    align-items: center;
    img {
    object-fit: cover;
    border-radius:50%;
    width: 50px;
    height: 50px;
    }
    p {
        display: inline-block;
        margin-left: 10px;
    }
`

const MatchesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
`

const aluno = "Guilherme-Lira-Silveira"

const Match = (props) => {
    const [matches, setMatches] = useState ([])

    const getMatches = () => {
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/matches`).then((response) => {
            setMatches(response.data.matches)
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    }

    const clearMatches = () => {
        const headers = { headers: { "Content-Type": "application/json" }}
        axios
        .put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/clear`, headers)
        .then((res) => {
            alert('Seus matches foram apagados com sucesso.')
        })
        .catch((res) => {
        })
    }

    useEffect(() => {getMatches()}, [])

    const listMatch = matches.map((prof) => {
        return (
            <MatchCard key={prof.id}>
                <img src={prof.photo} alt="ProfilePicture"/> <p>{prof.name}</p>
            </MatchCard>
        )
    })

    return (
        <MatchesContainer>
        <h1> Página de Matches </h1> 
        <button onClick={clearMatches}> Limpar Matches </button>
        { listMatch.length > 0 ? listMatch : <p>Você ainda não possui Matches! Continue tentando!</p>}
        </MatchesContainer>
    )
}
export default Match;