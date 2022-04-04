import React from 'react';
import styled from 'styled-components'

const All = styled.div`
margin: 0;
padding: 0;
text-align: center;
font-family: sans-serif;
`

const Form = styled.div`
  display: flex;
  display: block;
`

const Button = styled.div`
margin-top: 15px;
`

function Etapa2() {
  return (
  <All>
    <Form>
      <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
      <div>
        <p>5. Qual curso?</p>
        <input value=""></input>
      </div>
      <div>
        <p>6. Qual a unidade de ensino?</p>
        <input value=""></input>
      </div>
    </Form>
  </All>
  )
}

export default Etapa2;
