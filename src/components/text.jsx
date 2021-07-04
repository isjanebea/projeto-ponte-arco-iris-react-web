import styled from 'styled-components';
import React from 'react';

const color = props => props.color ? props.theme.color[props.color] : props.theme.color.primary;
const H3 = styled.h3`
    color : ${color};
    font-size: 1.3em;
    @media(max-width: 425px) {
        font-size: .9em;
    }
`
const H2 = styled.h2`
    color : ${color};
    font-size: 2.3em;
    @media(max-width: 425px) {
        font-size: 1.2em;
    }
`
const H1 = styled.h1`
    color : ${color};
    font-size: 3em;
    @media(max-width: 425px) {
        font-size: 1.6em;
    }
`

const Titulo = ({ variant, text, color}) => {
    if (variant=="h1") return <H1 color={color}>{text}</H1>;
    else if (variant=="h2") return <H2 color={color}>{text}</H2>;
    else return <H3 color={color}>{text}</H3>;
}

export {
    Titulo, H1, H2, H3
}