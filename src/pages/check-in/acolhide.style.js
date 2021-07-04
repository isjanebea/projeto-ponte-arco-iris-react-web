
import styled from 'styled-components';
const Main = styled.main`
    width: 100%;
    background-size: cover;
    display: flex;
    justify-content: center;
    background: linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
    linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
    linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);
    background-size: cover;
    margin-top: -70px;
    padding-bottom: 70px;
    `
// div>p>h
// div{conteudo}
// nav.menu>ul>li*5>a link

const Header = styled.section`
   
    display: flex;
    flex-direction: row;
    justify-content : space-around;
    width: 100%;
    align-items: center;
    height: 100vh;
    max-width: 800px;
    @media (max-width: 415px) {
        padding: 5px;
    }
`

const Container = styled.section`
     background: rgba(255,255,255,0.5);
     display: flex; 
    border-radius: 5px;
    align-items: center;
    padding: 100px;
    @media (max-width: 425px) {
        padding: 100px 0px 100px 5px;
        justify-content: flex-end;
        margin: 10px;
    }
    @media (max-width: 768px) {
        padding: 100px 20px 100px 50px;
        justify-content: flex-end;
        max-width: 600px;
    }
   ` 

const Titulo = styled.h3`
    font-family: Roboto;
    color: rgb(50,0,50);
    font-size: 3em;
    @media(max-width: 425px) {
        font-size: 1.6em;
    }
`


export {
    Main, Header, Container
}