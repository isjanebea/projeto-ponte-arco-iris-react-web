
import logo from '../assets/img/logo.png';
import React from 'react';
import styled from 'styled-components';

const Logo = styled.img`
    padding: 5px;
    height: 30px;
`  

const LogoComponent = () => (
    <Logo src={logo} alt="logomarca escrito ponte com meio arco-iris sobre o E" />
)

export default LogoComponent;