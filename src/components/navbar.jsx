import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

import TemporaryDrawer from './drawer'


const Nav = styled.nav`
    color:  rgb(255,255,255);
    box-shadow: 1px 1px 1px rgba(255,255,255,0);
    padding: 5px;
    width: 100%;
    display: flex;
    flex-direction: row;
    position: fixed;
    border: 0px black solid;
    justify-content: space-between;
    align-items: center;
    `;


const MobileMenu = (props) => {

    return (
        <Nav style={{ background: props.menu ? "rgb(255,150,255)" : 'rgba(255,255,255,0)' }}>
            <div>
                <TemporaryDrawer color={props.color} />
            </div>
            <div>
                <button>
                    item menu
                </button>
            </div>
        </Nav>
    )
}


const NavBar = ({ ...rest }) => {
    const responsive = true;
    return responsive ? <MobileMenu {...rest} /> : () => <h1>sem menu</h1>;
}

export {
    NavBar
}