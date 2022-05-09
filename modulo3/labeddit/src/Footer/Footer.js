import styled from 'styled-components'

const FooterContainer = styled.div`
    grid-area: footer;
    background-color: #424B54;
    text-align: center;
`

export function Footer() {
  return (
    <FooterContainer>
     <h1> Nos siga em nossas redes sociais! </h1>
    </FooterContainer>
  );
}

export default Footer;