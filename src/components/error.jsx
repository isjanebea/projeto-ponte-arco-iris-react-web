
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
const Error = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`



const Page = (props) => {
    return (
        <Error>
                <section style={{ textAlign: 'center'}}>
                <Typography variant="h5"><ErrorOutlineIcon style={{marginBottom: '-3px'}} />Descupa, ocorreu um erro.</Typography>
                <Typography variant="body"> detalhes sobre o erro: {props.error}</Typography>
                </section>
                
        </Error>
    )
} 


export default Page;