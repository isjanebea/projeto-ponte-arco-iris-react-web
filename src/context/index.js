import React, { createContext } from 'react';

import UseAuth from '../hooks/AuthProvider';

const Context = createContext();


const AuthProvider = ({ children }) => {
    const  {
        handleLogin,
        handleLogout,
        auth,
        loading,
        visibleBanner,
        setBanner
    } = UseAuth();

    return (
        <Context.Provider
            value={{
                auth: {
                    isAuth: auth,
                },
                components: {
                    header: visibleBanner,
                },
                setBanner,
                handleLogin,
                handleLogout
            }}
        >
            {children}
        </Context.Provider>
    )
}


export {
    Context, AuthProvider
}