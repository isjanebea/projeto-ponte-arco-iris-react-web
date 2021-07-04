import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import Iframe from 'react-iframe'
import styled, { createGlobalStyle } from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import HostIdHooks from '../../hooks/host-id';
import Error from '../../components/error';
import Loading from '../../components/loading';
 import { P , H3, H2 } from '../../components/text';

const Section = styled.section`
    background: rgba(${props => props.theme.color.bgOpacity},0.8);
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid rgba(0,0,0,0.2);
`
const Strong = styled.strong`
    font-weight: bold;
`

const Container = styled.div`
    padding: 10px;
    background: ${props => props.theme.color.bg};
` 
{/* <iframe src="" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe> */ }
const utils = {
    dateFormatoLong(data) {
        return new Date(data).toLocaleDateString("PT-BR", { month: "long", year: "numeric" })
    },
}
const HostId = () => {


    const { host, adress, error, loading } = HostIdHooks()
    if (error) {
        return <Error error={error} />
    }
    
    if (loading) {
        return <Loading />
    }

    return (
        <>
            <Container>
                <Section className="border-arco-iris animRight">
                    <div style={{ borderBottom: "1px rgba(0,0,0,0.2) solid", marginBottom: '20px' }}>
                        <H2 className={"gradient"}>{host.name}</H2>
                    </div>
                    <P>
                        <Strong>Descrição: </Strong>{host.description}
                    </P>
                    <section style={{ marginTop: '10px' }}>
                        <P><Strong>Dominio de Atividade:</Strong> {host.activityDomain}</P>
                        <P><Strong>Tipo:</Strong> {host.type}</P>
                        <P><Strong>Fundação: </Strong> {utils.dateFormatoLong(host.foundedAt)}</P>
                    </section>
                </Section>
                <Section className="border-arco-iris animLeft">
                    <ul>
                        <li><div style={{ borderBottom: "1px rgba(0,0,0,0.2) solid", marginBottom: '20px' }}>
                            <H2 className={"gradient"}>Atividades e Projetos</H2>
                        </div></li>
                        {host.activitiesAndProjects.map((acao, index) => (
                            <li key={index}>
                                <H3 className={"gradient"}>{acao.title}</H3>
                                <P>{acao.description}</P>
                            </li>
                        ))
                        }
                    </ul>
                </Section>
                <Section>
                    <Iframe style={{ marginRight: "20px" }} url=" https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.5427957085017!2d-43.17704264894274!3d-22.93022864440039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997fab9556c361%3A0x7d02cb8000b55021!2sCasaNem%20-%20Sede%20Definitiva!5e0!3m2!1spt-BR!2sbr!4v1624391587495!5m2!1spt-BR!2sbr"
                        width="100%"
                        height="400px"
                        id="googleMap"
                        className=""
                        display="initial"
                        position="relative"
                        loading="lazy"
                    />
                </Section>
            </Container >
        </>
    )
}


export default HostId;
