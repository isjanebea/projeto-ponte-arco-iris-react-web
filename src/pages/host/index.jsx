
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button, Typography } from '@material-ui/core';
import HostHooks from '../../hooks/host'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Error from '../../components/error';
import Loading from '../../components/loading';
import FilterOptios from '../../components/option';



const ListGroup = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const List = styled.div`
    display: flex;
    width: 100%;
`
const ListItem = styled.li`
    padding: 10px
`
// colocar um icone de mapa e o endereco
const Card = styled.section`
    width : 350px;
    border: 1px rgba(30,30,30,0.2) solid;
    border-radius: 5px 5px 5px 5px;
    padding: 10px;
    color: rgb(60,0,30);
    background: linear-gradient(to left, rgb(255,240,255), rgba(255,255,255,0.8));

`

const CardHeader = styled.div`
    padding : 10px;
    border-bottom: 1px rgba(127,127,127,0.5) solid;
`

const FilterComponent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 1px rgba(0,0,0,0.1) solid;
    padding: 10px;
`

const CardHost = ({ host, _id, uf, city }) => (
    <div>
        <Card className="descricao">
            <CardHeader>
                <Typography variant="h5">{host.name}</Typography>
            </CardHeader>
            <div style={{ height: '250px' }}>
                <Typography variant="body2">
                    {host.description
                        .split(" ")
                        .filter((desc, index) => index >= 0 && index <= 35)
                        .join(" ") + "..."}
                </Typography>

            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                    <Button variant="outlined" color="secondary" href={'/acolhida/' + _id}>Mais informações</Button>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <LocationOnIcon style={{ fontSize: '15px' }} /><Typography variant="body1" style={{ fontSize: '15px' }}>{city} - {uf}</Typography>
                </div>
            </div>
        </Card>
    </div>
)

const Filter = (props) => {
    return (
        <FilterComponent>
            <FilterOptios options={props.host} />
        </FilterComponent>
    )
}

const Host = () => {
    const { loading, hostList, error } = HostHooks();

    if (error) {
        return <Error error={error} />
    }


    return loading ? (
        <Loading />
    ) : (
        <div style={{ height: '100vh', width: '100%', background: 'rgba(255, 255, 255, 0.3)'}}>
            <Filter host={hostList} />
            <List>
                <ListGroup>
                    {hostList.map((host, index) => {
                        return (
                            <ListItem key={'host' + index}>
                                <CardHost {...host} />
                            </ListItem>
                        )
                    })}
                </ListGroup>
            </List>
        </div>
    )

}

export default Host;