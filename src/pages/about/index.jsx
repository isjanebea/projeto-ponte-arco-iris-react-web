import React, { useState, useContext } from 'react';
import styled from 'styled-components'
import { Button, Typography } from '@material-ui/core';
import ListIcon from '@material-ui/icons/List';
import { makeStyles } from '@material-ui/core/styles';
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Context } from '../../context' 



import API from '../api/api';
import HOME from '../home'

const Container = styled.div`
    margin-top: 30px;
    display: grid;
    grid-template-columns: 200px 1fr;
    padding-top: 5px;
    @media (max-width: 425px) {
        display: flex;
        flex-direction: column;
        
    }

    @media (max-width: 767px) {
        grid-template-columns: 200px 1fr;
        
    }

    @media (max-width: 1024px) {
        grid-template-columns: 200px 1fr;
        
    }
    .pages {
        
    }
    
`

const SideMenu = styled.div`
    border-right: 1px rgba(0,0,0,0.1)  solid;

    

    ul {
        position: fixed;
        background: rgba(255,255,255,0.7);
        height: 100vh;
        padding: 10px 30px 10px 20px;
    }
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
        
    }
    return (
        <li>
            <AnchorLink href={props.to}>
                <Button className={styles.button} startIcon={<ListIcon />} onClick={handleClick}>{props.text}</Button>
                </AnchorLink>
        </li>
    )
}

const Contato = () => {
    return (
        <PageContainer id="contato">
            <Titulo>Contato</Titulo>
            <P>Pagina em Construcao</P>
        </PageContainer>
    )
}
const TermosDeUso = () => {
    return (
        <PageContainer id="termos">
            <Titulo>Termos de Uso</Titulo>
            <P>Pagina em construção</P>
        </PageContainer>
    )
}

const Sobre = () => {
    return (
        <PageContainer id="descricao">
            <Titulo>Ponte Arco Iris</Titulo>
            <P>Pagina em construção</P>
        </PageContainer>
    )
}

const ApiDocs = () => {
    return (
        <PageContainer id="api-docs">
            <Titulo>Documentação da API</Titulo>
            <P>Pagina em construção</P>
            <API />
        </PageContainer>
    )
}

const GitHub = () => {
    return (
        <PageContainer id="github">
            <Titulo>Desenvolvedore? Colabore!</Titulo>
            <P>Pagina em construção</P>
        </PageContainer>
    )
}


// a
const About = () => {

 const { setMenu, menu } = useContext(Context);
 
 if (menu==false) {
     setMenu(true)
 }
    return (
        <Container>
            <SideMenu>
                <ul>
                    <ListItem text="Sobre" to="#descricao"/>
                    <ListItem text="API DOCS" to="#api-docs" />
                    <ListItem text="Contato" to="#contato" />
                    <ListItem text="GitHub" to="#github" />
                    <ListItem text="Termos de uso" to="#termos" />
                </ul>
            </SideMenu>
            <div className="pages">
                <Sobre />
                <ApiDocs  />
                <Contato />
                <GitHub  />
                <TermosDeUso />
            </div>
        </Container>
    )
}

export default About;