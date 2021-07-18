import { useState, useContext } from 'react';


import { useQuery } from './host';
import history from '../routes/history';
import { Context } from '../context/index';
import EstadosHooks from './estados';


const FilterHooks = () => {
    const query = useQuery();

    const [estado, setEstado] = useState('');
    const [open, setOpen] = useState(false);
    const { setHostSeach } = useContext(Context);

    const { estados: estadoData } = EstadosHooks();

    
    if (query.get('estado') && estado == '') {
        estadoData.forEach(state => {
            if (state.toLowerCase() == query.get('estado').replace(/\s+?/g, " ").toLowerCase()) {
                setEstado(state)
            }
        })
    }
    const handleChange = (event) => {

        setEstado(event.target.value);

    };

    const handleFilter = () => {
        let filter = { estado };
        if (filter == null || filter.estado=="") return null;
        let urlseach = "/lares?" + Object.keys(filter).map(key => key + "=" + filter[key].replace(/\s+/g, "%20")).join('');
        setHostSeach(urlseach);
        history.push(urlseach)
    }
    const handleClear = () => {
        setHostSeach('');
        setEstado('');
        history.push("/lares")
    }
    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return {
        handleOpen, handleClose, handleClear, 
        handleFilter, handleChange,
        open, estado
    }
}

export default FilterHooks;