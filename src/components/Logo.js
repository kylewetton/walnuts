import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Logo = props => <Link to={'/'}><LogoImg alt="Walnut" src={window.location.origin +'/assets/logo-inline.svg'} compact={props.compact} /></Link>

const LogoImg = styled.img`
    transition: 0.25s ease-in-out;
    height: ${props => props.compact ? '50px' : '35px'};
`

export default Logo;