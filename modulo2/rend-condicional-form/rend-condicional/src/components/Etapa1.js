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

function Etapa1() {
  return (
  <All>
    <Form>
      <h3>ETAPA 1 - DADOS GERAIS</h3>
      <div>
        <p>1. Qual o seu nome?</p>
        <input value=""></input>
      </div>
      <div>
        <p>2. Qual a sua idade?</p>
        <input value=""></input>
      </div>
      <div>
        <p>3. Qual o seu email?</p>
        <input value=""></input>
      </div>
      <div>
        <p>4. Qual a sua escolaridade?</p>
        <select>
          <option value="Ensino médio incompleto">Ensino médio incompleto</option>
          <option value="Ensino médio completo">Ensino médio completo</option>
          <option value="Ensino superior incompleto">Ensino superior incompleto</option>
          <option value="Ensino superior completo">Ensino superior completo</option>
        </select>
      </div>
    </Form>
  </All>
  )
}

export default Etapa1;
