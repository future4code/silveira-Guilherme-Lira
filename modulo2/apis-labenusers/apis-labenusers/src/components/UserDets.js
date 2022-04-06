import axios from "axios";
import React from "react";

const headers = {
    headers: {
        Authorization: "Guilherme-Lira-Silveira"
    }
};

export default class UserDets extends React.Component {
    state = {
        page: "dets",
        usersDets: [],
        inputName: "",
        inputEmail: ""
    }
    
    createUser2 = () => {
        const body = {
            name: this.state.inputName,
            email: this.state.inputEmail
        }
        axios
            .put(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${this.props.userId}`, body, headers)
            .then(() => {
                this.setState({ inputName: "", inputEmail: "" })
                this.getUserDets();
                alert(`Usuário ${this.state.name} editado com sucesso!`)
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }

    getUserDets = () => {
        axios
            .get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${this.props.userId}`, headers)
            .then((res) => {
                console.log(res.data);
                this.setState({ userDets: res.data });
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    }

    onChangeName = (e) => {
        this.setState({ inputName: e.target.value });
    };

    onChangeEmail = (e) => {
        this.setState({ inputEmail: e.target.value });
    };

    render(){
        return (
        <div>
            <h2> TELA COM DETALHES DO USUÁRIO </h2>
        </div>
        )
    }
}