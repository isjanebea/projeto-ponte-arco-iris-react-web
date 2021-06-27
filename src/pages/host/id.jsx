import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Typography } from '@material-ui/core';
import Iframe from 'react-iframe'
import styled, { createGlobalStyle } from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import HostIdHooks from '../../hooks/host-id';
import Error from '../../components/error';
import Loading from '../../components/loading';
const useStyles = makeStyles({
    titulo: {
        fontSize: '2rem',
        fontHeight: 'bold',
        lineHeight: '1.3',
    },
    subTitulo: {
        fontSize: '1.3rem',
        fontHeight: 'bold',
        lineHeight: '1.3',
    }
});





const Section = styled.section`
    background: rgba(255,255,255,0.8);
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    box-shadow: 2px 2px 2px rgba(200,200,200,0.2);
    border: 1px solid rgba(0,0,0,0.2);
    color: rgb(70,70,70)
`
const Strong = styled.strong`
    font-weight: bold;
`
{/* <iframe src="" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe> */ }
const utils = {
    dateFormatoLong(data) {
        return new Date(data).toLocaleDateString("PT-BR", { month: "long", year: "numeric" })
    },
}
const HostId = () => {

    const style = useStyles()
    const { host, adress, error, loading } = HostIdHooks()
    if (error) {
        return <Error error={error} />
    }
    
    if (loading) {
        return <Loading />
    }

    return (
        <>
            <div style={{ background: "rgb(240,230,240)", padding: '10px' }}>
                <Section className="border-arco-iris animRight">
                    <div style={{ borderBottom: "1px rgba(0,0,0,0.2) solid", marginBottom: '20px' }}>
                        <Typography className={"gradient " + style.titulo} variant="h5">{host.name}</Typography>
                    </div>
                    <Typography variant="body2">
                        <Strong>Descrição: </Strong>{host.description}
                    </Typography>
                    <section style={{ marginTop: '10px' }}>
                        <Typography variant="body2"><Strong>Dominio de Atividade:</Strong> {host.activityDomain}</Typography>
                        <Typography variant="body2"><Strong>Tipo:</Strong> {host.type}</Typography>
                        <Typography variant="body2"><Strong>Fundação: </Strong> {utils.dateFormatoLong(host.foundedAt)}</Typography>
                    </section>
                </Section>
                <Section className="border-arco-iris animLeft">
                    <ul>
                        <li><div style={{ borderBottom: "1px rgba(0,0,0,0.2) solid", marginBottom: '20px' }}>
                            <Typography className={"gradient " + style.subTitulo} variant="h6">Atividades e Projetos</Typography>
                        </div></li>
                        {host.activitiesAndProjects.map((acao, index) => (
                            <li key={index}>
                                <Typography className={"gradient " + style.subTitulo} variant="h6">{acao.title}</Typography>
                                <Typography variant="body2">{acao.description}</Typography>
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
            </div >
        </>
    )
}


export default HostId;
