import React from "react";
import UserSignedUp from "./components/UserSignedUp"
import UserList from "./components/UserList"
import UserDets from "./components/UserDets"

export default class App extends React.Component {
  state = {
    page: "signedup"
  }

  changeScreen = () => {
    switch (this.state.page){
      case "signedup":
        return <UserSignedUp screenList={this.screenList}/>
      case "list":
        return <UserList screenSignedUp={this.screenSignedUp} screenDets={this.screenDets}/>
      case "dets":
        return <UserDets />
      default:
        return <div> Pagina não encontrada! </div>
    }
  }

  screenSignedUp = () => {
    this.setState({page: "signedup"})
  }

  screenList = () => {
    this.setState({page: "list"})
  }

  screenDets = () => {
    this.setState({page: "dets"})
  }
  

  render() {
    return(
      <div>
        {this.changeScreen()}
      </div>
    )
  }
}
