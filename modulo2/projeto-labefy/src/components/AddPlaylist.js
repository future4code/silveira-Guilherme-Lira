import React from 'react'
import axios from 'axios'

const headers = {
    headers: {
        Authorization: "Guilherme-Lira-Silveira"
    }
};

export default class AddSong extends React.Component {
  state = {
    playlist: [],
    inputNamePlaylist: ""
  }

  createPlaylist = () => {
    const body = {
        name: this.state.inputNamePlaylist
    }
    axios
    .post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body, headers)
    .then((res) => {
        alert(`Playlist: ${this.state.inputNamePlaylist} criada!`)
        this.setState({inputNamePlaylist: ""})
    })
        .catch((err) => {
        alert(err.response.data.message)
    })
}

onChangeNamePlaylist = (e) => {
    this.setState({ inputNamePlaylist: e.target.value });
};


  render() {
    return (
        <div>
        <h2> PÁGINA PARA ADICIONAR NOVAS PLAYLISTS </h2>
        <div>
            <input placeholder="Nome" type="text" value={this.state.inputNamePlaylist} onChange={this.onChangeNamePlaylist} />
            <button onClick={this.createPlaylist}> Criar Playlist </button>
        </div>
    </div>
    )
  }
}