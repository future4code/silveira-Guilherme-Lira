import styled from 'styled-components'

export const ContainerCardProduct = styled.div`
    width: 100%;
    margin: 0.5rem 0;
    display: flex;
    border: solid 1px gray;
    border-radius: 7px;
`

export const ImageProduct = styled.img`
    width: 6rem;
    height: 7rem;
    border-radius: 7px 7px 0 0;
`

export const BoxNameQuantity = styled.div`
`
export const QuantityProduct = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1px red;
    width: 2.063rem;
    height: 2.063rem;
`

export const NameProduct = styled.h3`
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: red;
    margin-bottom: 0.25rem;
`

export const BoxInform = styled.div`
   
`

export const InformDescription = styled.p`
    font-family: Roboto;
    font-size: 1 rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: grey;
    padding: 0.25rem 0;
    flex-grow: 1;
`

export const BoxInformPriceButton = styled.div`
    display: flex;
    justify-content: space-between;
`

export const InformPrice = styled.p`
`

export const InformButton = styled.button`
    width: 5.625rem;
    height: 1.938rem;
    border-radius: 8px 0 8px 0;
    background-color: white;
    outline: 0;
    border: 1px black solid;
`