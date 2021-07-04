import React, { useContext } from 'react';
import { Router, Switch } from 'react-router-dom';

import { Context } from '../context';
import { PublicRouter, PrivateRouter } from './custom';
import history from './history'


/**
 * CSS, SSAS, ESTILOS
 */

import GlobalStyle from '../styles/global';
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme';
import '../styles/animation.css'
import CssBaseline from '@material-ui/core/CssBaseline';


/***** COMPONENTS */
import Header from "../components/header";
import Footer from "../components/footer";
import Main from '../components/page';



/**** PAGES */
import Home from '../pages/home';
import NotFound from '../pages/notFound';
import AcolhidaId from '../pages/host/id';
import Login from '../pages/login';
import Host from '../pages/host'
import Api from '../pages/api/api.jsx'
import Cadastro from '../pages/cadastro'
import Acolhide from '../pages/check-in/acolhide'
import About from '../pages/about';

const Routes = () => (
    <Switch>
        <PublicRouter exact path="/" component={Home} />
        <PublicRouter exact path="/login" component={Login} />
        <PublicRouter exact path="/documentacao" component={Api} />
        <PublicRouter exact path="/cadastro" component={Cadastro} />
        <PublicRouter exact path="/acolhida" component={Host} />
        <PublicRouter exact path="/acolhida/:id" component={AcolhidaId} />
        <PublicRouter exact path="/acolhide" component={Acolhide} />
        <PublicRouter exact path="/sobre" component={About} />
        <PublicRouter path="*" component={NotFound} />
    </Switch>
)


const Navigation = () => {
    theme.dark = useContext(Context).theme;
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router history={history}>
                <Header />
                <Routes />
                <Footer />
            </Router>
            <GlobalStyle />
        </ThemeProvider>
    )
}


export default Navigation;