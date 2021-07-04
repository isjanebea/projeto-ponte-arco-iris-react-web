
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button, Typography } from '@material-ui/core';
import HostHooks from '../../hooks/host'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Error from '../../components/error';
import Loading from '../../components/loading';
import FilterOptios from '../../components/filterSelect';
import history from '../../routes/history'


const ListGroup = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
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
    max-width : 350px;
    border: 1px rgba(30,30,30,0.2) solid;
    border-radius: 5px 5px 5px 5px;
    padding: 10px;
    color: rgb(60,0,30);
    background: linear-gradient(to left, rgb(255,240,255), rgba(255,255,255,0.8));

    @media(max-width: 425px) {
        flex-direction: column;
        position: relative;
        width: 375px;
      }

`

const ButtonBar = styled.div`
      display: flex;
      justify-content: space-between;
      aligm-items: center;
      @media(max-width: 415px) {
            flex-direction: column-reverse;
            .label-location {
                margin-bottom: 10px;
                justify-content: center;
                
            }
      }
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
const Container = styled.div`
      background: linear-gradient(to bottom, rgba(255,255,255, 0.5), rgba(255,255,255,0));
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
        <div style={{ background: "rgba(255, 255, 255, 0.3)" }}>
            <div style={{ minHeight: '100vh', width: '100%' }}>
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
        </div>
    )

}

export default Host;