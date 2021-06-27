import React from 'react';
import { Router, Switch } from 'react-router-dom';

import { AuthProvider } from '../context';
import { PublicRouter, PrivateRouter } from './custom';
import history from './history'


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


const Routes = () => (
    <Switch>
        <PublicRouter exact path="/" component={Home} />
        <PublicRouter exact path="/login" component={Login} />
        <PublicRouter exact path="/documentacao" component={Api} />
        <PublicRouter exact path="/cadastro" component={Cadastro} />
        <PublicRouter exact path="/acolhida" component={Host} />
        <PublicRouter exact path="/acolhida/:id" component={AcolhidaId} />
        <PublicRouter path="*" component={NotFound} />
    </Switch>
)



const Routers = () => {
    return (
        <AuthProvider>
            <Router history={history}>
                <Header />
                    <Routes />
                {/* <Footer /> */}
            </Router>
        </AuthProvider>
    )
}


export default Routers;