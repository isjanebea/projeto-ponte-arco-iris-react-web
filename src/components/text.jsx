import styled from 'styled-components';
import React from 'react';
const H3 = styled.h3`
    color : ${props => props.theme.color.primary};
    font-size: 1.3em;
`
const H2 = styled.h2`
    color : ${props => props.theme.color.primary};
    font-size: 2.3em;
`
const H1 = styled.h1`
    color : ${props => props.theme.color.primary};
    font-size: 3em;
`

const Titulo = ({ variant, text}) => {
    if (variant=="h3") return <H3>{text}</H3>;
    if (variant=="h2") return <H2>{text}</H2>;
    if (variant=="h1") return <H1>{text}</H1>;
}

export {
    Titulo, H1, H2, H3
}