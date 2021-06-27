import { Typography } from '@material-ui/core';
import styled from 'styled-components';


const FooterComponent= styled.div`
    display: flex;
    width: 100%;
    height: 10vh;
    color: white;
`


const Footer = props => {
    return (
        <FooterComponent id="footer">
            <Typography>Footer</Typography>
        </FooterComponent>
    )
}


export default Footer;