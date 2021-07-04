import styled from 'styled-components';
import { Button } from '@material-ui/core';
import ListIcon from '@material-ui/icons/List';

const Container = styled.div`
    display: grid;
    grid-template-columns: 200px 1fr;
    padding-top: 5px;
    @media (max-width: 425px) {
        display: flex;
        flex-direction: column;
        
    }

    @media (max-width: 767px) {
        grid-template-columns: 200px 1fr;
        
    }

    @media (max-width: 1024px) {
        grid-template-columns: 200px 1fr;
        
    }
    
`

const SideMenu = styled.div`
    border-right: 1px rgba(${props => props.theme.color.bordersecondary}, 0.1)  solid;
    width: 200px;

    @media (max-width: 425px) {
        margin-bottom: 5px;
        z-index: 20;
        width: 100px;
        flex-direction: column-reverse;

    }
`

const Menu = styled.ul`
 

    position: fixed;
    background: rgba(${props => props.theme.color.bgOpacity},0.7);
    padding: 10px 30px 10px 20px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    transition: 2;

    li {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    @media (max-width: 425px) {
            display: ${ props => props.open ? 'flex' : 'none'};
            height: 220px;
            padding: 0px;
            padding-right: 10px;
            z-index: 20;
            position: fixed;
            background: rgba(${props => props.theme.color.bgOpacity},1);
            border-radius: 5px;
            bottom: 10vh;
            right: 1vh;

        li {
            display: flex;
            flex-direction: row-reverse;
        }
    }
`

const PageContainer = styled.section`
    background: rgba(${props => props.theme.color.bgOpacity}, 0.7);
    border-radius: 5px;
    margin: 0px 5px 5px 5px;
    padding: 30px 10px 30px 10px;
`
const AchorButton = styled(Button)`
    color : ${props => props.color ? props.theme.color[props.color] : props.theme.color.primary}
`
const ButtonListIcon = styled(ListIcon)`
    color : ${props => props.color ? props.theme.color[props.color] : props.theme.color.primary}
`

export {
    Container,
    SideMenu,
    PageContainer,
    ButtonListIcon,
    AchorButton,
    Menu
}