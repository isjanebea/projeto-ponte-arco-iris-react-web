import React from 'react';
import history from '../../routes/history'
import { Card, Header, Main } from './style';
import { Titulo, H2 } from '../../components/text';



const Home = props => {

    const handleClick = () => {
        history.push("/acolhida")
    }
    return (
        <Main>
            <Header>
                <Card onClick={() => history.push("/acolhide")}>
                    <H2 color="secundary">Precisa de Ajuda?</H2>

                </Card>
                <Card onClick={handleClick}>
                <H2 color="secundary">Quero Ajudar</H2>

                </Card>
            </Header>

        </Main>
    )
}


export default Home;

export {
    Card
}