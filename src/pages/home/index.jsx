import React, { useContext, useEffect } from 'react';
import { Context } from '../../context'
import BannerPrecisaDeAjuda from '../../assets/img/banner-precisa-de-ajuda.png';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import bgArcoIris from '../../assets/img/arco-iris.png';
import history from '../../routes/history'
const Main = styled.main`
    background-size: cover;
    display: flex;
    justify-content: center;
    background: url(${bgArcoIris}) rgba(0,0,0,0.8) no-repeat left top;
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
    flex-wrap: warp;


`
const Img = styled.img`
    border: 1px rgba(255,255,255,1) solid;
    border-radius: 5px;
`
const Card = styled.div`
border: 1px rgba(255,255,255,0.2) solid;
border-radius: 5px;
margin: 10px;
width: 40vh;
height: 60vh;
display: flex;
justify-content: center;
align-items: center;
transition: 1s;
cursor: pointer;

&:hover{
    background: rgba(255,255,255,0.1);
    box-shadow: 1px 1px 1px rgba(255,255,255,0.3);
    transform: scale(1.05);
}
`

const useStyles = makeStyles({
    titulo: {
        fontSize: '2rem',
        fontHeight: '900',
        lineHeight: '1.3',
        color: 'white',
    },
    subTitulo: {
        fontSize: '1.3rem',
        fontHeight: 'bold',
        lineHeight: '1.3',
    }
});



const Home = props => {
    const classes = useStyles();
    const handleClick = () => {
        history.push("/acolhida")
    }
    return (
        <Main>
            <Header>
                <Card onClick={() => history.push("/acolhide")}>
                    <Typography variant="h2"  className={classes.titulo}>Precisa de Ajuda</Typography>

                </Card>
                <Card onClick={handleClick}>
                    <Typography variant="h2" className={classes.titulo}>Quero Ajudar</Typography>

                </Card>
            </Header>

        </Main>
    )
}


export default Home;

export {
    Card
}