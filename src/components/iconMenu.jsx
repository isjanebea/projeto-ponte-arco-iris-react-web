import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import styled from 'styled-components';
import AddCircleSharpIcon from '@material-ui/icons/AddCircleSharp';

const MenuIcon = styled(MenuRoundedIcon)`
    color: ${props => props.theme.color.secondary};
        @media(min-width: 725px) {
            display: none;
        }
`
const AddCircleColor = styled(AddCircleSharpIcon)`
    color: ${props => props.theme.color.secondary};
        @media(min-width: 725px) {
            display: none;
        }
`
const AddCircleButton = styled.button`
        background: rgba(0,0,0,0);
        border: 0px black solid;
        padding: 10px;
        position: fixed;
        bottom: 1vh;
        right: 1vh;
        z-index: 30;

`
const AddCircle = () => (
    <AddCircleButton>
        <AddCircleColor style={{fontSize: '50px' }} />
    </AddCircleButton>
)


export default MenuIcon;

export {
    AddCircle,
}