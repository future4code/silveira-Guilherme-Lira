import React from 'react';
import './CardGrande.css'
import styled from 'styled-components';

const Foto = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const BigTitleCointainerh = styled.h2`
    margin-bottom: 15px;
    display: flex;
    justify-content: start;

`

const BigTitleCointainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

const BigTitleCointainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 1px;
    height: 150px;
`

function CardGrande(props) {
    return (
        <BigTitleCointainer className="bigcard-container">
            <Foto src={ props.imagem } />
            <BigTitleCointainerDiv>
                <BigTitleCointainerh>{ props.nome }</BigTitleCointainerh>
                <p>{ props.descricao }</p>
            </BigTitleCointainerDiv>
        </BigTitleCointainer>
    )
}

export default CardGrande;