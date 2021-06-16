import banner from '../assets/img/header.jpg'
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
const ImgHeader = styled.div`
 background-image: url(${banner});
 background-size: cover;
 background-attachment: fixed;
 background-repeat: none;
 background-position: center center;
 width: 100%;
 height: 100vh;
 justify-content: center;
 align-items: center;
 display: flex;
`;


const Content = styled.section`
    color : white;
`
const Banner = ({size}) => (
    <ImgHeader id="banner" style={{ height : size + 'vh'}}>
        <Content>
            <Typography variant="h3">Header</Typography>
            <Typography>Bem vindos ao site....${size}</Typography>
        </Content>
    </ImgHeader>
)

export default Banner;