import React from 'react';
import Loading from '../../components/loading';
import Error from '../../components/error';
import EstadosHooks from '../../hooks/estados'
import styled from 'styled-components';
import Options from '../../components/filterSelect'


import { Main, Header, Container } from './acolhide.style.js'
import { Titulo } from '../../components/text';



const CheckInComponent = (props) => {
    return (
        <div style={{ borderTop: "1px rgba(0,0,0,0.1) solid" }}>
            <Main>
                <Header>
                    <Container>
                        <Titulo variant="h1" color="destaque" text="Escolha seu Estado" /><Options bar={false} />
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