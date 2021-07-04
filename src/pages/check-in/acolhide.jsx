import React from 'react';
import Loading from '../../components/loading';
import Error from '../../components/error';
import EstadosHooks from '../../hooks/estados'
import styled from 'styled-components';
import Options from '../../components/filterSelect'


import { Main, Header, Container } from './acolhide.style.js'
import { H1 } from '../../components/text';



const CheckInComponent = (props) => {
    return (
        <div style={{ borderTop: "1px rgba(0,0,0,0.1) solid" }}>
            <Main>
                <Header>
                    <Container>
                        <H1 style={{ lineHeight : "1em"}}  color="destaque">Escolha seu Estado</H1><Options bar={false} />
                    </Container>
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