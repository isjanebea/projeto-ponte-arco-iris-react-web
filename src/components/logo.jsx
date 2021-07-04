
import logo from '../assets/img/logo.png';
import logoWhite from '../assets/img/logo-white.png';
import logoBlack from '../assets/img/logo-black.png';
import React from 'react';
import styled from 'styled-components';

const Logo = styled.img`
    padding: 5px;
    height: 30px;
`

const LogoComponent = ({ white, black }) => {
    let descricao = "logomarca escrito ponte com meio arco-iris sobre  a vogal E";
    if (white) {
        return (
            <Logo src={logoWhite} alt={descricao} />
        )
    }
    else {
        return black ? (
            <Logo src={logoBlack} alt={descricao} />
        ) : (
            <>
                { /* is Default */}
                <Logo src={logo} alt={descricao} />
            </>
        )
    }
}

export default LogoComponent;