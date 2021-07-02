import React, { useState, useEffect } from 'react';
import server from '../../services/server'
import Loading from '../../components/loading';
import Error from '../../components/error';
import EstadosHooks from '../../hooks/estados'
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import bgArcoIris from '../../assets/img/arco-iris.png';
import history from '../../routes/history'
import Options from '../../components/option'
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
   


`
const Img = styled.img`
    border: 1px rgba(255,255,255,1) solid;
    border-radius: 5px;
`
const Card = styled.div`
border: 1px rgba(255,255,255,0.2) solid;
border-radius: 5px;
width: 150px;
height: 200px;
display: flex;
justify-content: center;
align-items: center;
transition: 1s;
cursor: pointer;
margin: 10px;

&:hover{
    background: rgba(255,255,255,0.1);
    box-shadow: 1px 1px 1px rgba(255,255,255,0.3);
    transform: scale(1.05);
}
`

const useStyles = makeStyles({
    titulo: {
        fontSize: '1rem',
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



const CheckInComponent = (props) => {
    const classes = useStyles();
    return (
        <div style={{ borderTop: "1px rgba(0,0,0,0.1) solid" }}>
            <Main>
                <Header>
                        <div style={{ padding: '100px', background: 'rgba(255,255,255,0.5)', display: 'flex', borderRadius: "5px"}}>
                        <Typography variant="h3" style={{ color: 'rgb(50,0,50)' }}>Escolha seu Estado</Typography><Options color={'white'} bar={false} />
                        </div>
                </Header>
            </Main>
        </div>
    )
}

const CheckIn = () => {
    const {
        loading,
        estados,
        error
    } = EstadosHooks();

    if (error) {
        return <Error error={error} />
    }
    return (
        loading ?
            <Loading /> :
            <CheckInComponent estados={estados} />
    )
}

export default CheckIn;