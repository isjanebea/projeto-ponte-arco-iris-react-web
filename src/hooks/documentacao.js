
import { useState, useEffect } from 'react';
import server from '../services/server'
const DocumentacaoHooks = () => {
    const [services, setServices] = useState({ loading: true, error: false, host: null, adress: null });

    // usar o id do endereco
    useEffect(() => {
        setServices({ loading: true, error: false })
        server.get("/doc")
            .then(response => response.data)
            .then(documentacao => {
                setServices({ loading: false, doc: documentacao })
            }).catch(error => {
                setServices({ loading: false, error: error.message })
            })
    }, [])

    return {
        error: services.error,
        loading: services.loading,
        data : services.doc,
    }
}

export default DocumentacaoHooks;