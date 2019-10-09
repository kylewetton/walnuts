import React from 'react';
import styled from 'styled-components';
import theme from '../theme';
import {Link} from 'react-router-dom';

const Button = props => {
    return <Btn to={props.href}>{props.text}</Btn>
}

const Btn = styled(Link)`
    border: 1px solid ${theme.colorBrand};
    text-decoration: none;
    color: ${theme.colorBrand};
    line-height: 1;
    padding: 0.75em 1em;
    text-transform: uppercase;
    transition: 0.25s ease-in-out;
    :hover {
        background: ${theme.colorBrand};
        color: white;
    }
`

export default Button;