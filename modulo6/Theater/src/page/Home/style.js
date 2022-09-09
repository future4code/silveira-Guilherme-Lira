import styled from "styled-components";

export const Main = styled.div`
    padding: 0;
    margin: 0;
`

export const Header = styled.div`
    height: 56px;
    background: #5C16C5;
`

export const WelcomeText = styled.div`
    margin-top: 0px;
    
    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 56px;
        text-align: center;
        letter-spacing: -0.005em;
        color: #FFFFFF;
        }
`

export const FilterText = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 20px;
    color: #FFFFFF;
`

export const SearchBlock = styled.div`
    height: 500px;
    background: #2D0C5E;
`

export const MoviePage = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: wrap;
    flex-wrap: wrap;
    gap: 20px;
    row-gap: 20px;
    margin-inline-start: 112px;
    margin-inline-end: 112px;
`

export const ButtonFilterBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
`

export const ButtonFilter = styled.button`
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    margin-inline-start: 20px;
    margin-bottom: 20px;
    margin-right: 20px;
    background: #FFFFFF;
    border-radius: 4px;
     p {
        width: 100px;
        height: 30px;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: #323232;
    } 
`