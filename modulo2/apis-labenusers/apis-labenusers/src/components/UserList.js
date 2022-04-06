import axios from "axios";
import React from "react";
import styled from "styled-components"

const CardUser = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 300px;
    display: flex;
    justify-content: space-between;
`

const headers = {
    headers: {
        Authorization: "Guilherme-Lira-Silveira"
    }
};

export default class UserList extends React.Component {
    state = {
        users: [],
        page: "list"
    }

    componentDidMount() {
        this.getAllUser();
    }

    getAllUser = () => {
        axios
            .get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", headers)
            .then((res) => {
                console.log(res.data);
                this.setState({ users: res.data });
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    }

    deleteUser = userId => {
        if (window.confirm("Gostaria de apagar este usuário??")) {
            axios
                .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`, headers)
                .then(() => {
                    alert("Usuário apagado com sucesso!");
                    this.getAllUser();
                })
                .catch(e => { alert("Não foi possível apagar o usuário"); });
        }
    };

    render() {
        const listUsers = this.state.users.map((user) => {
            return (
            <CardUser key={user.id}>
                <button onClick={this.props.screenDets}>{user.name}</button> 
                <button onClick={this.props.screenDets}>Editar</button> 
                <button onClick={() => this.deleteUser(user.id)}>❌</button>
            </CardUser>
            )
        })
        return (
        <div>
            <h2> LISTA DE USUÁRIOS </h2>
            <button onClick={this.props.screenSignedUp}> Trocar de Tela </button>
            {listUsers}
        </div>
        )
        console.log(this.state.page)
    }
}