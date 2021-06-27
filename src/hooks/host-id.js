
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import server from '../services/server'
const HostPageIdHooks = () => {
    const { id } = useParams()
    const [hostData, setHostData] = useState({ loading: true, error: false, host: null, adress: null });

    // usar o id do endereco
    useEffect(() => {
        setHostData({ loading: true, error: false })
        server.get("/localizacao/" + id)
            .then(response => response.data)
            .then(data => {
                setHostData({ loading: false, host: data.host, adress: data })
            }).catch(error => {
                setHostData({ loading: false, error: error.message })
            })
    }, [])

    return {
        error: hostData.error,
        loading: hostData.loading,
        host: hostData.host,
        adress: hostData.adress
    }
}

export default HostPageIdHooks;