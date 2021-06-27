import { useState, useEffect } from "react"
import server from '../services/server';

const Host = (props) => {
    const [status, setStatus] = useState({ loading: true, error: false})
    const [hostList, setHostList] = useState([])
    useEffect(() => {
        setStatus({ loading: true})
        server.get("/localizacao")
            .then(response => response.data)
            .then(hosts => {
                setStatus({ loading: false })
                setHostList(hosts)
            })
            .catch(error => {
                setStatus({ loading: false, error: error.message })
            })
            
    }, [])

    return {
        loading : status.loading,
        error : status.error,
        hostList
    }
}

export default Host;