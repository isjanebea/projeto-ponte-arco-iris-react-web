import React, { useContext } from 'react';
import styled from 'styled-components';
import { Button, makeStyles } from '@material-ui/core';
import logo from '../assets/img/logo.png';
import TemporaryDrawer from './drawer'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import history from '../routes/history'
import { Context } from '../context'
const Nav = styled.nav`
    color:  rgb(255,255,255);
    box-shadow: 1px 1px 1px rgba(255,255,255,0);
    width: 100%;
    display: flex;
    flex-direction: row;
    position: ${(props) => props.pos ? 'fixed' : 'static'};
    background ${(props) => props.pos ? 'rgba(0,0,0,7)' : 'rgba(0,0,0,0)'};
    z-index: 10;
    left: 0;
    top: 0;
    border: 0px black solid;
    justify-content: space-between;
    align-items: center;
    `



const useStyles = makeStyles({
    button: {
        color: 'white',
        textShadow: '1px 1px 1px rgba(0,0,0,.3)'
    }
});



const MobileMenu = (props) => {
    const { menu } = useContext(Context);

    return (
        <Nav pos={menu} style={{ background: props.menu ? "rgba(255,0,255, 0)" : 'rgba(255,255,255,0)' }}>
            <div>
                <TemporaryDrawer color={props.color} />
            </div>
            <OtherMenu />
        </Nav>
    )
}

const OtherMenu = ({ classes: style }) => (

    <div>
        <Button className={style.button} href="/login"><AccountCircleIcon /></Button>
    </div>
)


const DestopMenu = (props) => {
    const style = useStyles()
    const { menu, setMenu } = useContext(Context);
    const handleClick = (location) => {
        if (menu) {
            setMenu(false)
        }
        history.push(location)
    }
    return (
        <Nav pos={menu}>
            <div style={{ display: 'flex', itensAligm: "center" }}>
                <img src={logo} style={{ padding: '5px', height: '22px' }} />
                <Button className={style.button} onClick={() => handleClick("/")}>Home</Button>
                <Button className={style.button} onClick={() => handleClick("/acolhida")}>Lares</Button>
                <Button className={style.button} onClick={() => handleClick("/sobre")}>Sobre</Button>
            </div>
            <OtherMenu classes={style} />
        </Nav>
    )
}

const NavBar = ({ ...rest }) => (
    <div>
        {/* <MobileMenu className="tela-mobile" {...rest} /> */}

        <DestopMenu className="tela-desktop" {...rest} />
    </div>
)

export {
    NavBar
}