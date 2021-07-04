import React from 'react';
import history from '../../routes/history'
import { Card, Header, Main } from './style';
import { Titulo } from '../../components/text';



const Home = props => {

    const handleClick = () => {
        history.push("/acolhida")
    }
    return (
        <Main>
            <Header>
                <Card onClick={() => history.push("/acolhide")}>
                    <Titulo variant="h2" text="Precisa de Ajuda?" />

                </Card>
                <Card onClick={handleClick}>
                    <Titulo variant="h2" text="Quero Ajudar" />

                </Card>
            </Header>

        </Main>
    )
}


export default Home;

export {
    Card
}