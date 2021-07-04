import { Typography } from '@material-ui/core';
import styled from 'styled-components';


const FooterComponent= styled.div`
    display: flex;
    width: 100%;
    height: 20vh;
    color: white;
    background: red;
    position: absolute;
    z-index: 15;
    background: ${props => props.theme.use=='dark' ? "black" : "white" };
`


const Footer = props => {
    return (
        <FooterComponent id="footer">
            <Typography>Footer</Typography>
        </FooterComponent>
    )
}


export default Footer;