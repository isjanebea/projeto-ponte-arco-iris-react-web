import React, { createContext } from 'react';

import UseAuth from '../hooks/AuthProvider';

const Context = createContext();


const AuthProvider = ({ children }) => {
    const  {
        handleLogin,
        handleLogout,
        auth,
        loading,
        hostSeach,
        setHostSeach,
        menu, 
        setMenu
    } = UseAuth();

    return (
        <Context.Provider
            value={{
                auth: {
                    isAuth: auth,
                },
                handleLogin,
                handleLogout,
                setHostSeach,
                hostSeach,
                menu, 
                setMenu
            }}
        >
            {children}
        </Context.Provider>
    )
}


export {
    Context, AuthProvider
}