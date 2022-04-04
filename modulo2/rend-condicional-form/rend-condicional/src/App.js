import React from 'react';
import styled from 'styled-components';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';


const Button = styled.button`
margin-top: 15px;
text-align: center;
`

const All = styled.div`
margin: 0;
padding: 0;
text-align: center;
font-family: sans-serif;
`

class App extends React.Component {
  state = {
    step: 1
  };

  FindStep = () => {
    switch (this.state.step) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      default:
        return <Final />;
    }
  }

  NextPage = () => {
    let newPage = this.state.step + 1;
    this.setState({ step: newPage });
  }

  render() {
    return (
      <All>
        {this.FindStep()}
        {this.state.step >= 4 ? <p>Obrigado!</p> : <Button onClick={this.NextPage}>Próxima Etapa</Button>}
      </All>
    );
  }
}

export default App;
