import React from 'react'
import axios from 'axios';

const headers = {
  headers: {
      Authorization: "Guilherme-Lira-Silveira"
  }
};

export default class DetsPlaylist extends React.Component {
  state = {
    playlist: [],
    songs: [],
    page: "detsplaylist",
    playlistId: ""
  }

  addTrackToPlaylist = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.playlistId}/tracks`
    const body = {
        name: prompt("Nome da música:"), 
        artist: prompt('Nome do artista:'),
        url: prompt("Link url do spotify: (acrescente a palavra 'embed' no meio do link como o exemplo: https://open.spotify.com/embed/track/6Paon2GSO2btqO6qmS6hSE)")
  }}

  getPlaylistTracks = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
    axios
    .get(url, headers)
    .then((res) => {
        this.setState({
            songs: res.data.result.songs,
            playlistId: id,
            button: <div onClick={() => this.addTrackToPlaylist(this.state.playlistId)}>Add Track</div>
        })
    })
    .catch((err) => {
        alert(err)
    })
}

  render() {
    const PlaylistDetails = this.state.songs.map((song) => {
      return (
        <div>
          <p1>{song.name}</p1>
          <p1>{song.artist}</p1>
          <iframe src={song.url} width="90%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </div>
      )
    })
    return (
      <div>
      <h3>
        PÁGINA PARA DETALHAR OS PLAYLISTS
      </h3>
         {PlaylistDetails}
      </div>
    )
  }
}