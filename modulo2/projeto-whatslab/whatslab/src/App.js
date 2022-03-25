import logo from './logo.svg';
import './App.css';
import React from 'react';
import styled from 'styled-components'
// import Post from './components/Post/Post';

const janelaMaior = styled.div`
    max-width: 600px;
    height: 100vh;
    border: 5px solid black;
    flex: 1 1 0%;
    display: flex;
    flex-direction: column;
`
const Digitar = styled.div`
  display: flex;
`

// const userSpace = styled.input`
// border: 5px solid black;
// width: 100px;
// `

// const messageSpace = styled.input`
// border: 5px solid black;
// flex: 1 1 0%;
// `

class App extends React.Component {
  state = {
    message: [
       {remetente:'Paulinha', conteudo:'Sup?'},
       {remetente:'Tathy', conteudo:'Hey Sis'},
    ],
    inputRemetente: "",
    inputConteudo: ""
  };
 
  sendMessage = () => {
    const newMessage = {
     remetente: this.state.inputRemetente,
     conteudo: this.state.inputConteudo
    };
    
    const newMessages =  [...this.state.message, newMessage];
 
    this.setState({
      message: newMessages,
      inputRemetente: "",
      inputConteudo: ""
    })
  }
 
  onChangeInputRemetente = (event) => {
     this.setState({ inputRemetente: event.target.value})
  }
 
  onChangeInputConteudo = (event) => {
   this.setState({ inputConteudo: event.target.value})
 }

render() {
  let listMessage = this.state.message.map((message) => {
    return (
      <div>
        <b>{message.remetente}</b>: {message.conteudo}
      </div>
     );
  });

  return (
  <div class="todo">
    <div class="janelaMaior">
    {listMessage}
      <div class="digitar">
      <input class="usuario"
            value={this.state.inputRemetente}
            onChange={this.onChangeInputRemetente}
            placeholder={"Usuário"}
        />
        <input class="conteudo"
            value={this.state.inputConteudo}
            onChange={this.onChangeInputConteudo}
            placeholder={"Mensagem"}
        />
        <button class="botao" onClick={this.sendMessage}>Enviar</button>
        </div>
        
    </div>
  </div>
  );
 }
}

export default App;
