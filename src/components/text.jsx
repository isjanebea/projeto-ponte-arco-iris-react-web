import styled from 'styled-components';
import React from 'react';

// controllers
const colorTitle = props => props.color ? props.theme.color[props.color] : props.theme.color.primary;
const colorText = props => props.color ? props.theme.color[props.color] : props.theme.color.primary;


const H3 = styled.h3`
    color : ${colorTitle};
    font-size: 1.3em;
    line-height: 1.5em;
    @media(max-width: 425px) {
        font-size: .9em;
    }
`
const H2 = styled.h2`
    color : ${colorTitle};
    font-size: 2.3em;
    line-height: 2em;
    @media(max-width: 425px) {
        font-size: 1.2em;
    }
`
const H1 = styled.h1`
    color : ${colorTitle};
    line-height: 2em;
    font-size: 3em;
    @media(max-width: 425px) {
        font-size: 1.6em;
    }
`

const P = styled.p`
    font-size: 1em;
    line-height: 1em;
    color : ${colorText};
`


const Titulo = ({ variant, text, color}) => {
    if (variant=="h1") return <H1 color={color}>{text}</H1>;
    else if (variant=="h2") return <H2 color={color}>{text}</H2>;
    else return <H3 color={color}>{text}</H3>;
}

export {
    Titulo, H1, H2, H3, P
}