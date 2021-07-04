import styled from 'styled-components';
import bgArcoIris from '../../assets/img/arco-iris.png';

const Main = styled.main` 
    background-size: cover;
    background: url(${bgArcoIris}) rgba(0, 0, 0, 0.8) no-repeat left top;
    display: flex;
    justify-content: center;
    background-size: cover;
    margin-top: -70px;
    padding-bottom: 70px;
` // div>p>h
// div{conteudo}
// nav.menu>ul>li*5>a link
const Header = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    align-items: center;
    height: 100vh;
    max-width: 800px;
    flex-wrap: warp;
`
const Img = styled.img`
    border: 1px rgba(255, 255, 255, 1) solid;
    border-radius: 5px;
`
const Card = styled.div` 
    border: 1px rgba(255, 255, 255, 0.2) solid;
    border-radius: 5px;
    margin: 10px;
    width: 40vh;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 1s;
    cursor: pointer;
        @media(max-width: 325px) {
            width: 20vh;
            height: 35vh;
            text-align: center;
        }

        @media(max-width: 375px) {
            width: 25vh;
            height: 40vh;
            text-align: center;
        }

        @media(max-width: 425px) {
            width: 45%;
            height: 45vh;
            text-align: center;
        }

        &:hover {
            background: rgba(255, 255, 255, 0.1);
            box-shadow: 1px 1px 1px rgba(255, 255, 255, 0.3);
            transform: scale(1.05);
        }

`
export {
    Card, Main, Header
}