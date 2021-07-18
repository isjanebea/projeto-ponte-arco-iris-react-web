import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components'

import AnchorLink from "react-anchor-link-smooth-scroll";
import { Context } from '../../context'


import {
    Container,
    SideMenu,
    PageContainer,
    AchorButton,
    ButtonListIcon,
    Menu
} from './style';
import { H2, P } from '../../components/text';

import { AddCircle } from '../../components/iconMenu';
import Footer from '../../components/footer';
const ListItem = (props) => {
    const handleClick = (event) => {

    }
    return (
        <li>
            <ButtonListIcon color="secondary" />
            <AnchorLink href={props.to}>
                <AchorButton color="secondary" onClick={handleClick}>{props.text}</AchorButton>
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
    const [visible, setVisible] = useState(false)
    useEffect(() => {

        if (menu == false) {
            setMenu(true)
        }
    }, [])

    const handleClick = () => {
        setVisible(visible ? false : true);
    }
    return (
        <React.Fragment>
            <Container>
                <SideMenu>
                    <a onClick={handleClick}><AddCircle /></a>
                    <Menu open={visible} onClick={visible ? handleClick : () => null}>
                        <ListItem text="Sobre" to="#descricao" />
                        <ListItem text="API DOCS" to="#api-docs" />
                        <ListItem text="Contato" to="#contato" />
                        <ListItem text="GitHub" to="#github" />
                        <ListItem text="Termos de uso" to="#termos" />
                    </Menu>
                </SideMenu>
                <div className="pages">
                    <Sobre />
                    <ApiDocs />
                    <Contato />
                    <GitHub />
                    <TermosDeUso />
                </div>
            </Container>
            <Footer />
        </React.Fragment>
    )
}

export default About;