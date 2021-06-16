
import React, { createContext, useEffect, useState } from 'react';
import history from '../routes/history';
import axios from '../connection/axios';


export default function useAuth() {
    const [visibleBanner, setBanner] = useState(false)
    const [auth, setAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    const handleLogin = async () => {
        try {
            const { data: { token, user: { user, email } } } = await axios.post("auth/")
            localStorage.setItem('token', JSON.stringify(token))
            axios.defaults.headers.authorization = `Bearer ${token}`;
            setAuth(true)
            history.push("/")

        } catch (error) {
            console.log('falha ao obter dados do servidor')
        }

    }

    const handleLogout = () => {
        localStorage.removeItem("token")
        axios.defaults.headers.authorization = undefined;
        setAuth(false)
        history.push("/login")
    }

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            axios.defaults.authorization = `Bearer ${JSON.parse(token)}`
            setAuth(true)
        }
        setLoading(false)
    }, [])
    return {
        handleLogin,
        handleLogout,
        auth,
        loading,
        visibleBanner,
        setBanner
    }
}