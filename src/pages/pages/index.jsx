import React from 'react';
import { useParams} from 'react-router-dom';
const PagesExample = props => {
    const { id } = useParams()
    return (
        <>
            <br></br>
            <br></br>
            <br></br>
            <h1>{id}</h1>
        </>
    )
}


export default PagesExample;