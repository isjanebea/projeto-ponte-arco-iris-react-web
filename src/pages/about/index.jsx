import React, { useState, useContext } from 'react';
import styled from 'styled-components'

import AnchorLink from "react-anchor-link-smooth-scroll";
import { Context } from '../../context' 


import {
    Container,
    SideMenu,
    PageContainer,
    AchorButton,
    ButtonListIcon
} from './style';
import { H2 , P } from '../../components/text';



const ListItem = (props) => {
    const handleClick = (event) => {
        
    }
    return (
        <li>
            <AnchorLink href={props.to}>
                <AchorButton startIcon={<ButtonListIcon  />} onClick={handleClick}>{props.text}</AchorButton>
                </AnchorLink>
        </li>
    )
}

const Contato = () => {
    return (
        <PageContainer id="contato">
            <H2>Contato</H2>
            <P>Pagina em Construcao</P>
        </PageContainer>
    )
}
const TermosDeUso = () => {
    return (
        <PageContainer id="termos">
            <H2>Termos de Uso</H2>
            <P>Pagina em construção</P>
        </PageContainer>
    )
}

const Sobre = () => {
    return (
        <PageContainer id="descricao">
            <H2>Ponte Arco Iris</H2>
            <P>Pagina em construção</P>
        </PageContainer>
    )
}

const ApiDocs = () => {
    return (
        <PageContainer id="api-docs">
            <H2>Documentação da API</H2>
            <P>Pagina em construção</P>
        </PageContainer>
    )
}

const GitHub = () => {
    return (
        <PageContainer id="github">
            <H2>Desenvolvedore? Colabore!</H2>
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