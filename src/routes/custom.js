import React, { useContext } from 'react';
import { Redirect , Route} from 'react-router-dom'; 


// import { Context } from '../context/auth';

import  history  from './history';

// const CustomRoute = ({ isPrivate, isLoggin, ...rest}) => {

//     const { isAuth : authenticated  } = useContext( Context )
//     console.log(isLoggin)
//     if (isPrivate && !authenticated) return <Redirect to="/login" />
//     if (authenticated && isLoggin) return <Redirect to="/" />
//     return <Route {...rest} />
//   }
  

//   export default CustomRoute;
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