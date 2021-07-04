import React, { useContext } from 'react';
import { Redirect , Route} from 'react-router-dom'; 

import { Context } from '../context'

const PrivateRouter = ({...rest}) => {
    const { isAuth } = useContext(Context)
    return isAuth ? (<Route {...rest} />) : (<Redirect to="/login" />)
}


const PublicRouter = ({...rest}) => {
    return <Route {...rest} />
}


export {
    PrivateRouter,
    PublicRouter
}