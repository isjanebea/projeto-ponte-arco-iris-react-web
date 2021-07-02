import React, { useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import ibge from '../services/ibge'
import HostHooks from '../hooks/host'
import { useQuery } from '../hooks/host';
import history from '../routes/history';
import { Context } from '../context/index';
import EstadosHooks from '../hooks/estados';
import Error from '../components/error';
const useStyles = makeStyles((theme) => ({
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },

}));

export default function ControlledOpenSelect(props) {
    const classes = useStyles();
    const query = useQuery();
    const [estado, setEstado] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const { setHostSeach } = useContext(Context);
    const { estados: estadoData, loading, error } = EstadosHooks()
    if (error) {
        return <Error error={error} />
    }

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
        if (filter == null) return null;
        let urlseach = "/acolhida?" + Object.keys(filter).map(key => key + "=" + filter[key].replace(/\s+/g, "%20")).join('');
        setHostSeach(urlseach);
        history.push(urlseach)
    }
    const handleClear = () => {
        setHostSeach('');
        setEstado('');
        history.push("/acolhida")
    }
    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };


    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label">Estado</InputLabel>
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={estado}
                    onChange={handleChange}
                >
                    {loading ? <MenuItem value={null} >carregando..</MenuItem> : estadoData.sort((a, b) => a - b).map(estado => (
                        <MenuItem value={estado} key={estado} >{estado}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            {props.bar == false ? (
                <>
                    <Button onClick={loading == false ? handleFilter : null}>Buscar</Button>
                </>
            ) : (

                <>
                    <Button onClick={loading == false ? handleFilter : null}>Filtrar</Button><Button onClick={handleClear}>Limpar</Button>
                </>
            )}
        </div>
    );
}