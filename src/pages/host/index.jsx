
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button, Typography } from '@material-ui/core';
import HostHooks from '../../hooks/host'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Error from '../../components/error';
import Loading from '../../components/loading';
import FilterOptios from '../../components/filterSelect';
import history from '../../routes/history'

import {
    ListGroup,
    List,
    ListItem,
    ButtonBar,
    CardHeader,
    FilterComponent,
    Card,
    Container
} from './index.style'

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
            <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", flexWrap: "wrap-reverse", lineHeight: "3em" }}>
                <div>
                    <Button variant="outlined" color="secondary" onClick={() => history.push('/acolhida/' + _id)}>Mais informações</Button>
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
        <Container>
            <div style={{ minHeight: '100vh', }}>
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
        </Container>
    )

}

export default Host;