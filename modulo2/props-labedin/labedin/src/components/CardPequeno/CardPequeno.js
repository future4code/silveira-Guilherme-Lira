import React from 'react';
import './CardPequeno.css'
import styled from 'styled-components';

const SmallTitleContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 50px;
`

const Foto1 = styled.img`
    width: 40px;
    margin-right: 10px;
    border-radius: 50%;
`

function CardPequeno(props) {
    return (
        <SmallTitleContainer className="smallcard-container">
            <Foto1 src={ props.imagem }/>
            <p>{ props.texto }</p>
        </SmallTitleContainer>
    )
}

export default CardPequeno;