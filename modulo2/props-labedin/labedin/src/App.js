import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  }
`

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C5603AQEG_lPmA1xi-g/profile-displayphoto-shrink_800_800/0/1598289463715?e=2147483647&v=beta&t=ZIBcgVUbsaksbim8232n2A4HQnl0NEUuK7rVEbtAquQ" 
          nome="Guilherme Lira" 
          descricao="Olá! Me chamo Guilherme e sou um desenvolvedor FullStack em treinamento, é um prazer te conhecer."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/929/929750.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
      <h2>Informações para contato</h2>
        <CardPequeno
          imagem="https://png.pngtree.com/element_our/md/20180517/md_5afd688996524.jpg"
          texto="Email: GuilhermeDev@gmail.com"
        />
        <CardPequeno
          imagem="https://img1.gratispng.com/20180605/wfh/kisspng-computer-icons-address-book-address-5b1743df67f5a5.2470175015282513594258.jpg"
          texto="Endereço: Avenida das Alamedas"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;