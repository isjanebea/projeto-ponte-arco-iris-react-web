import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

import EstadosHooks from '../hooks/estados';
import FilterHooks from '../hooks/filterSelect';

import Error from './error';

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

    const { estados: estadoData, loading, error } = EstadosHooks(); 
    const { handleClose, handleOpen, estado, handleChange, handleFilter, handleClear, open } = FilterHooks();

    if (error) {
        return <Error error={error} />
    }

   


    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="state-controlled-open-select-label">Estado</InputLabel>
                <Select
                    labelId="state-controlled-open-select-label"
                    id="state-controlled-open-select"
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