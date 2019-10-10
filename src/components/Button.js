import React from 'react';
import {BtnLnk, Btn} from './styles';

const Button = props => {
    return props.to ? <BtnLnk to={props.href}>{props.text}</BtnLnk> : <Btn>{props.text}</Btn>
    
}

export default Button;