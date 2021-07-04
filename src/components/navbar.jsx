import React from 'react';
import styled from 'styled-components';


import { Button } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Logo from './logo';
import Switches from './switches';

import NavBarHooks from '../hooks/navbar';

const themeBg = theme => `rgba(${theme.use == 'dark' ? '0,0,0,1' : '255,255,255,1'})`;
const themeBox = theme => `rgba(${theme.use == 'dark' ? '0,0,0,.3' : '255,255,255,.3'})`;


const Nav = styled.nav`
    color:  rgb(255,255,255);
    box-shadow: 1px 1px 1px ${props => props.pos ? themeBox(props.theme) : 'rgba(0,0,0,0)'};
    width: 100%;
    display: flex;
    flex-direction: row;
    position: ${(props) => props.pos ? 'fixed' : 'static'};
    background ${(props) => props.pos ? themeBg(props.theme) : 'rgba(0,0,0,0)'};
    z-index: 10;
    left: 0;
    top: 0;
    border: 0px black solid;
    justify-content: space-between;
    align-items: center;
    `
const NavButton = styled(Button)`
      color: ${props => props.theme.color.secondary};
`

const StyledAccountCircleIcon = styled(AccountCircleIcon)`
      color: ${props => props.theme.color.secondary};
`


const AlignCenter = styled.div`
   display: flex;
   itens-aligm: center;
`




const RightMenu = () => {
    const { handleClick, ToggleTheme, theme } = NavBarHooks();
    return (
        <AlignCenter>
            <Switches />
            <Button onClick={() => handleClick("/login")}><StyledAccountCircleIcon /></Button>
        </AlignCenter>
    )
}


const NavBar = (props) => {
    const { handleClick, menu, theme } = NavBarHooks();
    return (
        <>
            <Nav pos={menu}>
                <AlignCenter>
                    {/* LEFT */}
                    <Logo />
                    <NavButton onClick={() => handleClick("/")}>Home</NavButton>
                    <NavButton onClick={() => handleClick("/acolhida")}>Lares</NavButton>
                    <NavButton onClick={() => handleClick("/sobre")}>Sobre</NavButton>
                </AlignCenter>
                <RightMenu />
            </Nav>
            {menu &&
                <>
                    <br></br>
                    <br></br>
                </>
            }
        </>
    )
}

export {
    NavBar
}