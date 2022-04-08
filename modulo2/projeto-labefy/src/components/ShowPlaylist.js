import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const CardUser = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 200px;
    display: flex;
    justify-content: space-between;
`

const MyPlaylist = styled.div`
`

const headers = {
    headers: {
        Authorization: "Guilherme-Lira-Silveira"
    }
};

export default class ShowPlaylist extends React.Component {
  state = {
    playlist: [],
    page: "playlist"
  }

  componentDidMount() {
    this.getPlaylist();
 }

getPlaylist = () => {
    axios
        .get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", headers)
        .then((res) => {
            this.setState({playlist: res.data.result.list});
        })
        .catch((err) => {
            console.log(err.response.data);
        });
}

deletePlaylist = (playlistId) => {
    if (window.confirm("Gostaria de apagar este playlist??")) {
        axios
            .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`, headers)
            .then(() => {
                alert("Playlist apagado com sucesso!");
                this.getPlaylist();
            })
            .catch(e => { alert("Não foi possível apagar o playlist"); });
    }
};


  render() {
    const listPlaylist = this.state.playlist.map((play) => {
        return (
        <CardUser key={play.id}>
            <button onClick={() => this.props.screenDetsPlaylist(play.id)}>{play.name}</button> 
            <button onClick={() => this.deletePlaylist(play.id)}>❌</button>
        </CardUser>
        )
    })
    
    return (
    <MyPlaylist>
        <h2> Seus Playlists: </h2>
        {listPlaylist}
    </MyPlaylist>
    )
  }
}