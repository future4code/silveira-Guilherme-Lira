import axios from "axios";
import React from "react";

const headers = {
  headers: {
    Authorization: "Guilherme-Lira-Silveira"
  }
};

export class App extends React.Component {
  state = {
    users: [],
    inputName: "",
    inputEmail: "",
    page: "first"
  }

  componentDidMount() {
    this.getAllUser();
  }

  getAllUser = () => {
    axios
      .get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", headers)
      .then((res) => {
        console.log(res.data);
        this.setState({users: res.data});
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }

  createUser = () => {
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail
    }
    axios
      .post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, headers)
      .then((res) => {
        this.getAllUser();
        alert(`Usuário ${this.state.inputName} criado!`)
        this.setState({inputName: "", inputEmail: ""})
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

  onClickButton = () => {
    if (this.state.page === "first") {
      this.setState({
        page: "second",
      });
    }
    if (this.state.page === "second") {
      this.setState({
        page: "first",
      });
    }
  };

  deleteUser = userId => {
    if (window.confirm("Gostaria de apagar este usuário??")) {
        axios
            .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,headers)
            .then(() => {
                alert("Usuário apagado com sucesso!");
                this.getAllUser();
            })
            .catch(e => {alert("Não foi possível apagar o usuário");});
    }
};

  render() {
  if (this.state.page === "first"){
    const userList = this.state.users.map((user) => {
      return <li key={user.id}>{user.name}</li>;
    })

    return (
      <div>
        <button onClick={this.onClickButton}> Trocar Tela </button>
        <div>
          <input placeholder="Nome" type="text" value={this.state.inputName} onChange={this.onChangeName} />
          <input placeholder="E-mail" type="text" value={this.state.inputEmail} onChange={this.onChangeEmail} />
          <button onClick={this.createUser}>Criar Usuário</button>
        </div>
        <ul>{userList}</ul>
      </div>
    )
  }
  if (this.state.page === "second"){
    return (
      <div>
          <button onClick={this.onClickButton}>Trocar de Tela</button>
          <ol>
            {this.state.users.map((user) => {
              return (
              <li key={user.id}> {user.name} <button onClick={() => this.deleteUser(user.id)}>❌</button> </li>
              );
            })}
          </ol>
        </div>
    )
  }
}
}

export default App;
