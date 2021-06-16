import React, { useContext } from 'react';
import { Router, Switch } from 'react-router-dom';

import { AuthProvider, Context } from '../context';
import { PublicRouter, PrivateRouter } from './custom';
import history from './history'


/***** COMPONENTS */
import Header from "../components/header";
import Footer from "../components/footer";
import Main from '../components/page';



/**** PAGES */
import Home from '../pages/home';
import NotFound from '../pages/notFound';
import Login from '../pages/login';
import Pages from '../pages/pages';


const Routes = () => (
    <Switch>
        <PublicRouter exact path="/" component={Home} />
        <PublicRouter exact path="/login" component={Login} />
        <PublicRouter path="/pages/:id" component={Pages}  />
        <PublicRouter path="*" component={NotFound} />
    </Switch>
)



const Routers = () => {
    return (
        <AuthProvider>
            <Router history={history}>
                <Header />
                <Main>
                    <Routes />
                </Main>
                <Footer />
            </Router>
        </AuthProvider>
    )
}


export default Routers;