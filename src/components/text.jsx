import styled from 'styled-components';
import React from 'react';
const Titulo = styled.h3`
    color : ${props => props.theme=='dark'? 'white' : 'black' };
`

class Components {

    Titulo(props) {
        return (
            <div></div>
        )
    }

}

export default new Components();