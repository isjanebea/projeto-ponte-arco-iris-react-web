
import { useContext } from 'react';
import history from '../routes/history';
import { Context } from '../context'


const NavBarHooks = () => {
    const { menu, setMenu, toggleTheme } = useContext(Context);
    const handleClick = (location) => {
        if (menu) {
            setMenu(false)
        }
        history.push(location)
    }
    return {
        handleClick
    }
}

export default NavBarHooks;