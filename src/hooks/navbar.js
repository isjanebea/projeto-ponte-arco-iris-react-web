
import { useContext } from 'react';
import history from '../routes/history';
import { Context } from '../context'


const NavBarHooks = () => {
    const { menu, setMenu, ToggleTheme, theme } = useContext(Context);
    const handleClick = (location) => {
        if (menu && !/sobre|acolhida/.test(location)) {
            setMenu(false)
        }
        history.push(location)
    }
    return {
        handleClick,
        menu,
        ToggleTheme,
        theme
    }
}

export default NavBarHooks;