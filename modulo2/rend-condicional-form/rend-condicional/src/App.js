import React from 'react';
import styled from 'styled-components';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';

const Button = styled.div`
margin-top: 15px;
text-align: center;
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

  CheckPage = (step) => {
    {step == '1' || step == '2' || step == '3' ? this.FindStep() : 0}
  }


  render() {
    return (
    <div>
      {/* Step == '1' || Step == '2' || Step == '3' ? {this.FindStep()} : return 0 */}
      {this.FindStep()} 
      <Button>
        <button onClick={this.CheckPage}>Próxima Etapa</button>
      </Button>
    </div>
    );
  }
}

export default App;
