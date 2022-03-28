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

function Etapa3() {
  return (
  <All>
    <Form>
      <h3>ETAPA 3 - INFORMÇÃOES GERAIS DE ENSINO</h3>
      <div>
        <p>5. Por que você não terminou um curso de graduação?</p>
        <input value=""></input>
      </div>
      <div>
        <p>6. Você fez algum curso complementar?</p>
        <select>
          <option value="Nenhum">Nenhum</option>
          <option value="Curso Técnico">Curso Técnico</option>
          <option value="Curso de inglês">Curso de inglês</option>
        </select>
      </div>
    </Form>
  </All>
  )
}

export default Etapa3;
