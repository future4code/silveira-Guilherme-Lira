import axios from "axios";
import React from "react";

const headers = {
    headers: {
        Authorization: "Guilherme-Lira-Silveira"
    }
};

export default class UserSignedUp extends React.Component {

    state = {
        inputName: "",
        inputEmail: ""
    }

    createUser = () => {
        const body = {
            name: this.state.inputName,
            email: this.state.inputEmail
        }
        axios
            .post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, headers)
            .then((res) => {
                alert(`Usuário ${this.state.inputName} criado!`)
                this.setState({ inputName: "", inputEmail: "" })
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }

    onChangeName = (e) => {
        this.setState({ inputName: e.target.value });
    };

    onChangeEmail = (e) => {
        this.setState({ inputEmail: e.target.value });
    };

    render() {
        return (
            <div>
                <h2> CADASTRAR USUÁRIO </h2>
                <button onClick={this.props.screenList}> Trocar Tela </button>
                <div>
                    <input placeholder="Nome" type="text" value={this.state.inputName} onChange={this.onChangeName} />
                    <input placeholder="E-mail" type="text" value={this.state.inputEmail} onChange={this.onChangeEmail} />
                    <button onClick={this.createUser}> Criar Usuário </button>
                </div>
            </div>
        )
    }
}