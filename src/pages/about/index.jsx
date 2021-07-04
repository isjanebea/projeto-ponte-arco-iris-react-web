import React, { useState, useContext, useEffect } from 'react';
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
import { H2, P } from '../../components/text';



const ListItem = (props) => {
    const handleClick = (event) => {

    }
    return (
        <li>
            <AnchorLink href={props.to}>
                <AchorButton color="secondary" startIcon={<ButtonListIcon color="secondary" />} onClick={handleClick}>{props.text}</AchorButton>
            </AnchorLink>
        </li>
    )
}

const Contato = () => {
    return (
        <PageContainer id="contato">
            <H2 color="secondary">Contato</H2>
            <P color="secondary">Pagina em Construcao</P>
        </PageContainer>
    )
}
const TermosDeUso = () => {
    return (
        <PageContainer id="termos">
            <H2 color="secondary">Termos de Uso</H2>
            <P color="secondary">Pagina em construção</P>
        </PageContainer>
    )
}

const Sobre = () => {
    return (
        <PageContainer id="descricao">
            <H2 color="secondary">Ponte Arco Iris</H2>
            <P color="secondary">Pagina em construção</P>
        </PageContainer>
    )
}

const ApiDocs = () => {
    return (
        <PageContainer id="api-docs">
            <H2 color="secondary">Documentação da API</H2>
            <P color="secondary">Pagina em construção</P>
        </PageContainer>
    )
}

const GitHub = () => {
    return (
        <PageContainer id="github">
            <H2 color="secondary">Desenvolvedore? Colabore!</H2>
            <P color="secondary">Pagina em construção</P>
        </PageContainer>
    )
}


// a
const About = () => {

    const { setMenu, menu } = useContext(Context);
    useEffect(() => {

        if (menu == false) {
            setMenu(true)
        }
    }, [])
    return (
        <Container>
            <SideMenu>
                <ul>
                    <ListItem text="Sobre" to="#descricao" />
                    <ListItem text="API DOCS" to="#api-docs" />
                    <ListItem text="Contato" to="#contato" />
                    <ListItem text="GitHub" to="#github" />
                    <ListItem text="Termos de uso" to="#termos" />
                </ul>
            </SideMenu>
            <div className="pages">
                <Sobre />
                <ApiDocs />
                <Contato />
                <GitHub />
                <TermosDeUso />
            </div>
        </Container>
    )
}

export default About;