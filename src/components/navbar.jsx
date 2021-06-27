import React from 'react';
import styled from 'styled-components';
import { Button, makeStyles} from '@material-ui/core';
import logo from '../assets/img/logo.png';
import TemporaryDrawer from './drawer'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


const Nav = styled.nav`
    color:  rgb(255,255,255);
    box-shadow: 1px 1px 1px rgba(255,255,255,0);
    width: 100%;
    display: flex;
    flex-direction: row;
    position: static;
    border: 0px black solid;
    justify-content: space-between;
    align-items: center;
    `



    const useStyles = makeStyles({
        button: {
            color : 'white',
            textShadow: '1px 1px 1px rgba(0,0,0,.3)'
        }
      });


const MobileMenu = (props) => {
    
    return (
        <Nav style={{ background: props.menu ? "rgba(255,0,255, 0)" : 'rgba(255,255,255,0)' }}>
            <div>
                <TemporaryDrawer color={props.color} />
            </div>
            <OtherMenu />
        </Nav>
    )
}

const OtherMenu = ({ classes : style }) => (
    
    <div>
        <Button className={style.button} href="/login"><AccountCircleIcon /></Button>
    </div>
)


const DestopMenu = (props) => {
    const style = useStyles()
 return (  
    <Nav>
        <div>
            <Button className={style.button} href="/">Home</Button>
            <Button className={style.button} href="/acolhida">Lares</Button>
            <Button className={style.button} href="/documentacao">Documentação</Button>
            <Button className={style.button} href="/sobre">Sobre</Button>
        </div>
        <OtherMenu classes={style} />
    </Nav>
 ) 
}

const NavBar = ({ ...rest }) => (
    <div>
        {/* <MobileMenu className="tela-mobile" {...rest} /> */}
        <img src={logo} style={{ height: '30px', marginBottom: '-3px', marginLeft: '10px' }} />
        <DestopMenu className="tela-desktop" {...rest} />
    </div>
)

export {
    NavBar
}