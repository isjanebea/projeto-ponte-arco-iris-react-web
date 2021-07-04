
import React, { createContext, useEffect, useState } from 'react';
import history from '../routes/history';
import server from '../services/server';
import theme from '../styles/theme';

export default function useAuth() {
    const [auth, setAuth] = useState(false);
    const [loading, setLoading] = useState(true);
    const [hostSeach, setHostSeach] = useState('');
    const [menu, setMenu] = useState(false);
    const [dark, setDark] = useState(true);

    const ToggleTheme = () => {
        setDark(dark ? false : true)
        theme.toggleTheme(dark);
        return null;
    }

    const handleLogin = async () => {
        try {
            const { data: { token, user: { user, email } } } = await server.post("auth/")
            localStorage.setItem('token', JSON.stringify(token))
            server.defaults.headers.authorization = `Bearer ${token}`;
            setAuth(true)
            history.push("/")

        } catch (error) {
            console.log('falha ao obter dados do servidor')
        }
    }

    const handleLogout = () => {
        localStorage.removeItem("token")
        server.defaults.headers.authorization = undefined;
        setAuth(false)
        history.push("/login")
    }

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            server.defaults.authorization = `Bearer ${JSON.parse(token)}`
            setAuth(true)
        }
        setLoading(false)
    }, [])
    return {
        handleLogin,
        handleLogout,
        auth,
        loading,
        setHostSeach,
        hostSeach,
        menu,
        setMenu,
        ToggleTheme,
        theme
    }
}