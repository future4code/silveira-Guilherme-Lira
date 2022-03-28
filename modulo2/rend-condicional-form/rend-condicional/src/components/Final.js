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

function Final() {
  return (
  <All>
    <Form>
      <h3>O FORMULÁRIO ACABOU</h3>
      <p>Muito obrigado por participar! Entraremos em contato!</p>
    </Form>
  </All>
  )
}

export default Final;
