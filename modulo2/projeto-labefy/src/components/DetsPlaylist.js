import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const headers = {
  headers: {
      Authorization: "Guilherme-Lira-Silveira"
  }
};

const Audio = styled.iframe`
  margin: 0 0;
  text-align: center;
  cursor: pointer;
  height: 4vh;
`;

const CardUser = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    align-items: center;
    justify-content: center;
    margin: 10px;
    border-radius: 40px;
    border: 2px solid black;
    height: 190px;
    p {
        font-weight: bolder;
        font-size: medium;
    }
`
const MusicContainer = styled.div`
    display: flex;
`

export default class DetsPlaylist extends React.Component {
  state = {
    playlist: {},
    songs: [],
    page: "detsplaylist",
    nameSong: "",
    nameArtist: "",
    nameUrl: "",
    playlistId: ""
  }

onChangeNameSong = (e) => {
    this.setState({ nameSong: e.target.value });
};

onChangeNameArtist = (e) => {
  this.setState({ nameArtist: e.target.value });
};

onChangeNameUrl = (e) => {
  this.setState({ nameUrl: e.target.value });
};

  getPlaylist = () => {
    axios
    .get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.idPlaylist}/tracks`, headers)
    .then((res) => this.setState({playlist: res.data.result.tracks}))
    .catch((err) => console.log(err.response))
  }

  addTrackToPlaylist = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.idPlaylist}/tracks`
    const body = {nameSong: this.state.nameSong, nameArtist: this.state.nameArtist, nameUrl: this.state.nameUrl}
  axios
  .post(url, body, headers)
  .then((res) => {
    this.setState({nameSong: "", nameArtist: "", nameUrl: ""})
    this.getgetPlaylist();
    alert(`Música adicionada com sucesso!`)
  })
  .catch((err) => {
    alert(err.response.data.message)
    alert("Problema com a função: addTrackToPlaylist ")
  })
}

  getPlaylistTracks = (idPlaylist) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlaylist}/tracks`
    axios
    .get(url, headers)
    .then((res) => {
      console.log(res.data.result.tracks)
        this.setState({
            songs: res.data.result.tracks,
            playlistId: idPlaylist,
        })
    })
    .catch((err) => {
        alert(err) 
    })
}

  render() {
    console.log(this.getPlaylistTracks(this.props.idPlaylist))
    const PlaylistDetails = this.state.songs.map((song) => {
      return (
        <CardUser>
          <p key={song.id}>Nome: {song.name}</p>
          <p>Artista: {song.artist}</p>
          <Audio controls src={song.url}>
          <Audio src={song.url}> type={"audio/mp3"}</Audio>
          </Audio>
        </CardUser>
      )
    }
    )
    
    return (
    <div>
      <h3>AQUI ESTÃO AS MÚSICAS DESSE PLAYLIST</h3>
         {PlaylistDetails}
      <h2> UTILIZE O ESPAÇO ABAIXO PARA ADICIONAR UMA NOVA MÚSICA A ESSA LISTA. </h2>
      <MusicContainer>
            <input placeholder="Nome" type="text" value={this.state.nameSong} onChange={this.onChangeNameSong} />
            <input placeholder="Artista" type="text" value={this.state.nameArtist} onChange={this.onChangeNameArtist} />
            <input placeholder="Url da Música" type="text" value={this.state.nameUrl} onChange={this.onChangeNameUrl} />
            <button onClick={this.addTrackToPlaylist}> Criar Playlist </button>
      </MusicContainer>
      </div>
    )
  }
}