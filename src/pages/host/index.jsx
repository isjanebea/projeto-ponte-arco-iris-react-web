
import axios from '../../services/server';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button, Typography } from '@material-ui/core';
import HostHooks from '../../hooks/host'
import ShareIcon from '@material-ui/icons/Share';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Error from '../../components/error';
import Loading from '../../components/loading';
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
    border: 1px rgba(127,127,127,0.2) solid;
    box-shadow: 1px 1px 1px rgba(227,227,227, 0.1);
    border-radius: 5px 5px 5px 5px;
    padding: 5px;
    color: rgb(70,70,60);
    background: linear-gradient(45deg, rgba(255,250,155,0.5) 30%, rgba(255,255,255,0.5) 90%);

`

const CardHeader = styled.div`
    padding : 10px;
    border-bottom: 1px rgba(127,127,127,0.5) solid;
`
const Link = styled.a`
    cursor: pointer;
`

const CardHost = ({host, _id, uf, city}) => (
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
                    <Button href={'/acolhida/'+_id}>Mais informações</Button>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <LocationOnIcon style={{ fontSize: '15px' }} /><label style={{ fontSize: '15px' }}>{city} - {uf}</label>
                </div>
            </div>
        </Card>
    </div>
)

const Host = () => {
    const { loading, hostList, error } = HostHooks();

    if (error) {
        return <Error error={error} />
    }
    

    return loading ? (
        <Loading />
    ) : (
        <div style={{ marginLeft: "14px"}}>
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