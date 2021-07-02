import React, {useEffect, useState} from 'react';
import history from '../routes/history';
import server from '../services/server'


const EstadosHooks = () => {
    const [ loading, setLoading ] = useState(true);
    const [estados, setEstados ] = useState([]);
    const [error, setError] = useState(false);
    useEffect(() => {
        setLoading(true)
        server.get("/localizacao/estados")
        .then(response => {
            setEstados(response.data)
            setLoading(false)
        })
        .catch(error => {
            setError(error.message)
            setLoading(false)
        })
    }, [])

    return {
        loading,
        estados,
        error
    }
}

export default EstadosHooks;