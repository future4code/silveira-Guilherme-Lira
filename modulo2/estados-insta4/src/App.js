import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'Tathy'}
          fotoUsuario={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAjkV60VRydBMkkHj9Vh-Y6b66f8JCfzcBNQ&usqp=CAU'}
          fotoPost={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkfQxaq3GBCJ-2sTQiiujLfHs68cQK_3kJxg&usqp=CAU'}
        />
        <Post
          nomeUsuario={'Drika'}
          fotoUsuario={'https://www.meupositivo.com.br/doseujeito/wp-content/uploads/2019/06/dicas-para-fotos-melhores-no-android.jpg'}
          fotoPost={'https://somos.lojaiplace.com.br/wp-content/uploads/2021/01/melhorar-fotos-no-iphone-CRED-iStock_HDesert.jpg'}
        />
      </MainContainer>
    );
  }
}

export default App;
