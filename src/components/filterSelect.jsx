import React, { useState } from 'react';
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


const FormItem = props => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <FormControl className={classes.formControl}>
            <InputLabel id={`${props.value}controlled-open-select-label`}>{props.item}</InputLabel>
            <Select
                labelId={`${props.value}controlled-open-select-label`}
                id={`${props.value}controlled-open-select`}
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={props.value}
                onChange={props.handleChange}
            >
                {props.loading ? <MenuItem value={null} >carregando..</MenuItem> : props.options.sort((a, b) => a - b).map(option => (
                    <MenuItem value={option} key={option} >{option}</MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default function ControlledOpenSelect(props) {

    const { estados: estadoData, loading, error } = EstadosHooks();
    const {estado, handleChange, handleFilter, handleClear} = FilterHooks();

    
    
    if (error) {
        return <Error error={error} />
    }

    return (
        <div>
             <FormItem item="Estado" options={estadoData} value={estado} handleChange={handleChange} />
            {props.bar == false ? (
                <>

                    <Button onClick={loading == false ? handleFilter : null}>Buscar</Button>
                </>
            ) : (

                <>
                   
                    <FormItem item="Cidade" options={estadoData} value={estado} handleChange={handleChange} />
                    <Button onClick={loading == false ? handleFilter : null}>Filtrar</Button><Button onClick={handleClear}>Limpar</Button>
                </>
            )}
        </div>
    );
}