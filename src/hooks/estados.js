import React, {useEffect, useState} from 'react';
import history from '../routes/history';
import server from '../services/server'


const EstadosHooks = () => {
    const [ loading, setLoading ] = useState(true);
    const [estados, setEstados ] = useState([]);
    const [city, setCity ] = useState([]);
    const [error, setError] = useState(false);
    useEffect(() => {
        setLoading(true)
        server.get("/enderecos/estados")
        .then(response => {
            setEstados(response.data)
            setLoading(false)
        })
        .catch(error => {
            setError(error.message)
            setLoading(false)
        })
    }, [])

    const filterCity = state => {
        setCity(estados[state])
    }
    return {
        loading,
        estados : Object.keys(estados),
        error,
    }
}

export default EstadosHooks;