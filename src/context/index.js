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
        setHostSeach
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
                hostSeach
            }}
        >
            {children}
        </Context.Provider>
    )
}


export {
    Context, AuthProvider
}