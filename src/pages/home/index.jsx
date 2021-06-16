import React, { useContext} from 'react';
import { Context } from '../../context'

import bgMain from '../../assets/img/main.jpg';
import styled from 'styled-components';


const Main = styled.main`
    background: url(${bgMain}) no-repeat center center;
    height: 100%;
    width: 100%;
    background-size: cover

`


const Home = props => {
const { setBanner } = useContext(Context)
setBanner(true)
    return (
        <Main>
            <h1> HomePage</h1>
        </Main>
    )
}


export default Home;