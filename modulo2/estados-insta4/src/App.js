import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`

const Ajuste = styled.div`
  text-align: center;
`

class App extends React.Component {
 state = {
   users: [
      {nomeUsuario:'Paulinha', fotoUsuario:'https://picsum.photos/50/50', fotoPost:'https://picsum.photos/200/150'},
      {nomeUsuario:'Tathy', fotoUsuario:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAjkV60VRydBMkkHj9Vh-Y6b66f8JCfzcBNQ&usqp=CAU', fotoPost:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkfQxaq3GBCJ-2sTQiiujLfHs68cQK_3kJxg&usqp=CAU'},
      {nomeUsuario:'Drika', fotoUsuario:'https://www.meupositivo.com.br/doseujeito/wp-content/uploads/2019/06/dicas-para-fotos-melhores-no-android.jpg', fotoPost:'https://somos.lojaiplace.com.br/wp-content/uploads/2021/01/melhorar-fotos-no-iphone-CRED-iStock_HDesert.jpg'}
   ],
   valorInputnomeUsuario: "",
   valorInputfotoUsuario: "",
   valorInputfotoPost: ""
 };

 adicionarUsuarios = () => {
   const novoUsuario = {
    nomeUsuario: this.state.valorInputnomeUsuario,
    fotoUsuario: this.state.valorInputfotoUsuario,
    fotoPost: this.state.valorInputfotoPost
   };
   
   const novoUsuarios =  [...this.state.users, novoUsuario];

   this.setState({
     users: novoUsuarios,
     valorInputnomeUsuario: "",
     valorInputfotoUsuario: "",
     valorInputfotoPost: ""
   })
 }

 onChangeInputNome = (event) => {
    this.setState({ valorInputnomeUsuario: event.target.value})
 }

 onChangeInputFoto = (event) => {
  this.setState({ valorInputfotoUsuario: event.target.value})
}

onChangeInputPost = (event) => {
  this.setState({ valorInputfotoPost: event.target.value})
}

  render() {
    let listaDePosts = this.state.users.map((user) => {
      return (
        <Post
          nomeUsuario={user.nomeUsuario}
          fotoUsuario={user.fotoUsuario}
          fotoPost={user.fotoPost}
        />
       );
    });

    return (
      <Ajuste>
      <h1>Adicionar novo Post</h1>
        <div>
          <input
            value={this.state.valorInputnomeUsuario}
            onChange={this.onChangeInputNome}
            placeholder={"Nome"}
          />
          <input
            value={this.state.valorInputfotoUsuario}
            onChange={this.onChangeInputFoto}
            placeholder={"Foto Usuário"}
          />
          <input
            value={this.state.valorInputfotoPost}
            onChange={this.onChangeInputPost}
            placeholder={"Foto Post"}
          />
          <button onClick={this.adicionarUsuarios}>Adicionar</button>
        </div>
      <MainContainer>
        {listaDePosts}
      </MainContainer>
      </Ajuste>
    );
  }
}

export default App;
