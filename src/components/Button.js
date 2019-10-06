import React from 'react';
import styled from 'styled-components';
import theme from '../theme';

const Button = props => {
    return <Btn href={props.href}>{props.text}</Btn>
}

const Btn = styled.a`
    border: 1px solid ${theme.colorBrand};
    text-decoration: none;
    color: ${theme.colorBrand};
    line-height: 1;
    padding: 0.75em 1em;
    text-transform: uppercase;
`

export default Button;