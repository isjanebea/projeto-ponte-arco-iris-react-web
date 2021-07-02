import React, { useState, useEffect , useContext} from "react"
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
    const [status, setStatus] = useState({ loading: true, error: false})
    const [hostList, setHostList] = useState([])
    
    const query = useQuery();
    const { hostSeach } = useContext(Context)
    const filter = queryUrl(query, "estado")
    
    useEffect(() => {
        setStatus({ loading: true})
        let queryUrl = "/localizacao?" + Object.keys(filter).map(key => key + "=" + filter[key].replace(/\s+/g, "%20")) 
        server.get(queryUrl)
            .then(response => response.data)
            .then(hosts => {
                setStatus({ loading: false })
                setHostList(hosts)
            })
            .catch(error => {
                setStatus({ loading: false, error: error.message })
            })
            
    }, [hostSeach])

    return {
        loading : status.loading,
        error : status.error,
        hostList,
    }
}

export default Host;