import React from 'react'
import styled from 'styled-components'
import AddPlaylist from './components/AddPlaylist'
import ShowPlaylist from './components/ShowPlaylist'
import DetsPlaylist from './components/DetsPlaylist'

const Header = styled.div`
  margin: 10px;
  padding: 10px;
  display: flex;
  background-color: aliceblue;
  align-items: center;
  border: 1px solid black;
`
const Header1 = styled.div`
  margin: auto;
  display: flex;
  background-color: aliceblue;
  flex-direction: column;
`
const Menu = styled.div`
  display: flex;
  justify-content: space-around;
`
const Middle = styled.div`
  display: flex;
  margin: auto;
  margin-top: 5px;
  margin-bottom: 5px;
`
const Main = styled.div`
  display: flex;
  flex-direction: column;
`
const Footer = styled.div`
 display: flex;
 background-color: lightgrey;
 border: 1px solid black;
 margin-top: 50px;
`
const Footer1 = styled.div`
  margin: auto;
  display: flex;
`

export default class App extends React.Component {
  state = {
    page: "addplaylist",
    idOfPlaylist: ""
  }

  changeScreen = () => {
    switch (this.state.page) {
      case "addplaylist":
        return <AddPlaylist screenListPlaylist={this.screenListPlaylist}/>
      case "playlist":
        return <ShowPlaylist screenAddPlaylist={this.screenAddPlaylist} screenDetsPlaylist={this.screenDetsPlaylist} idPlaylist={this.state.idOfPlaylist}/>
      case "detsplaylist":
        return <DetsPlaylist idPlaylist={this.state.idOfPlaylist}/>
      default:
        return <div> Pagina não encontrada! </div>
    }
  }

  screenAddPlaylist = () => {
    this.setState({ page: "addplaylist" })
  }

  screenListPlaylist = () => {
    this.setState({ page: "playlist" })
  }

  screenDetsPlaylist = (idPlaylist) => {
    this.setState({ page: "detsplaylist", idOfPlaylist:idPlaylist })
  }

  render() {
    return (
      <Main>
        <Header>
          <Header1>
            <h1> BEM VINDO AO SEU LABEFY </h1>
            <Menu>
            <button onClick ={this.screenAddPlaylist}><a>Adicionar Playlist</a></button>
            <button onClick ={this.screenListPlaylist}><a>Ver Playlists</a></button>
            </Menu>
          </Header1>
        </Header>

        <Middle>
          {this.changeScreen()}
        </Middle>

        <Footer>
          <Footer1>
            <h2> SEU AMBIENTE DE MÚSICA PARA TODOS OS MOMENTOS </h2>
          </Footer1>
        </Footer>

      </Main>
    )
  }
}