import styled from 'styled-components'

export const WebSite = styled.div`
  display: grid;
  grid-template-rows: 1fr 10fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: 
    "header header header"
    "main main main"
    "footer footer footer";
  grid-gap: 0;
  height: 100vh;
`

export const HeaderContainer = styled.div`
  display: flex;
  grid-area: header;
  background-color: orange;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
  button{
    margin-right: 10px;
  }
  img {
    margin-top: 10px;
  }
`