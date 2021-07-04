import React, { useState, useEffect, useContext } from "react"
import server from '../services/server';
import { useLocation } from 'react-router-dom';
import { Context } from '../context'

export function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const queryUrl = (queryHook, ...queres) => {
    let filter = {}

    queres.forEach(query => {
        let queryValue = queryHook.get(query)
        if (queryValue)
            filter[query] = queryHook.get(query)
    })
    return filter;
}
const Host = (props) => {
    const [status, setStatus] = useState({ loading: true, error: false })
    const [hostList, setHostList] = useState([])

    const query = useQuery();
    const { hostSeach, setMenu, menu } = useContext(Context);


    const filter = queryUrl(query, "estado")
    let urlQueryString = "/localizacao?" + Object.keys(filter).map(key => key + "=" + filter[key].replace(/\s+/g, "%20"))
    useEffect(() => {
        if (!menu) {
            setMenu(true)
        }
        setStatus({ loading: true })

        const connect = async () => {
            try {
                const response = await server.get(urlQueryString);
                setStatus({ loading: false });
                setHostList(response.data)
            } catch (error) {
                setStatus({ loading: false, error: error.message })
            }

        }
        connect();
    }, [hostSeach])

    return {
        loading: status.loading,
        error: status.error,
        hostList,
    }
}

export default Host;