import React, { useState } from 'react';
import styled from 'styled-components'
import { Button, Typography } from '@material-ui/core';
import ListIcon from '@material-ui/icons/List';
import { makeStyles } from '@material-ui/core/styles';


import API from '../api/api';
import HOME from '../home'

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 7fr;
    border-top: 1px rgba(0,0,0,0.1) solid;
    padding-top: 5px;
    @media (max-width: 425px) {
        display: flex;
        flex-direction: column;
        
    }

    @media (max-width: 767px) {
        grid-template-columns: 1fr 4fr;
        
    }

    @media (max-width: 1024px) {
        grid-template-columns: 1fr 5fr;
        
    }
    
`

const SideMenu = styled.div`
    border-right: 1px rgba(0,0,0,0.1)  solid;
    background: rgba(255,255,255,0.7);
    height: 100vh;
    @media (max-width: 425px) {
        height: 100%;
        margin-bottom: 5px;
    }
`

const PageContainer = styled.section`
    background: rgba(255,255,255, 0.7);
    border-radius: 5px;
    margin: 0px 5px 5px 5px;
    padding: 30px 10px 30px 10px;
`

const Titulo = styled.h3`
    color : rgb(70,30,70);
    font-family: Roboto, sans-serif;
    font-size: 2em;
    line-height: 2em;
`

const P = styled.p`
    color : rgb(60,30,60);
    font-family: Roboto, sans-serif;
    font-size: 1em;
    line-height: 1em;
`
const useStyles = makeStyles({
    button: {
        color: 'rgb(60,30,60)',
    }
});

const ListItem = (props) => {
    const styles = useStyles();
    const handleClick = (event) => {
        window.location.href = props.to;
    }
    return (
        <li>
            <Button className={styles.button} startIcon={<ListIcon />} onClick={handleClick}>{props.text}</Button>
        </li>
    )
}

const Contato = () => {
    return (
        <PageContainer>
            <Titulo variant="h6">Contato</Titulo>
            <P variant="body2">Pagina em Construcao</P>
        </PageContainer>
    )
}
const TermosDeUso = () => {
    return (
        <PageContainer>
            <Titulo variant="h6">Termos de Uso</Titulo>
            <P variant="body2">Pagina em construção</P>
        </PageContainer>
    )
}

const Sobre = () => {
    return (
        <PageContainer>
            <Titulo variant="h6">Ponte Arco Iris</Titulo>
            <P variant="body2">Pagina em construção</P>
        </PageContainer>
    )
}

const ApiDocs = () => {
    return (
        <PageContainer>
            <Titulo variant="h6">Documentação da API</Titulo>
            <P variant="body2">Pagina em construção</P>
        </PageContainer>
    )
}

const GitHub = () => {
    return (
        <PageContainer>
            <Titulo variant="h6">Desenvolvedore? Colabore!</Titulo>
            <P variant="body2">Pagina em construção</P>
        </PageContainer>
    )
}



const About = () => {
    return (
        <Container>
            <SideMenu>
                <ul>
                    <ListItem text="Sobre" to="#sobre"/>
                    <ListItem text="API DOCS" to="#api-docs" />
                    <ListItem text="Contato" to="#contato" />
                    <ListItem text="GitHub" to="#github" />
                    <ListItem text="Termos de uso" to="#termos" />
                </ul>
            </SideMenu>
            <div className="pages">
                <Sobre id="sobre" />
                <ApiDocs id="api-docs" />
                <Contato id="contato" />
                <GitHub id="github" />
                <TermosDeUso id="termos" />
            </div>
        </Container>
    )
}

export default About;