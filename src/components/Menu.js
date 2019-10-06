import React from 'react';
import styled from 'styled-components';
import theme from '../theme';

const Burger = () => {
    return <BurgerIcon />
}

const Menu = () => {
    return (
        <Nav>
            <NavItem active={true}>Shop now</NavItem>
            <NavItem>Features</NavItem>
            <NavItem>About us</NavItem>
            <Burger />
        </Nav>
    )
}

const BurgerIcon = styled.span`
    display: block;
    height: 2px;
    width: 20px;
    background: ${theme.colorBlack}
    margin-left: 1.75em;
    align-items: flex-end;
    :before, :after {
        content: '';
        display: block;
        width: 15px;
        transform: translateY(-8px);
        height: 2px;
        float: right;
        background: ${theme.colorBlack}
    }
    :after {
        transform: translateY(6px);
        width: 8px;
    }
`

const NavItem = styled.li`
    padding: 0 1.75em;
    color: ${props => props.active ? theme.colorBrand : theme.colorBlack}
    font-weight: ${props => props.active ? 'bold' : 'normal'}
`

const Nav = styled.ul`
    list-style: none;
    display: flex;
    margin: 0; padding: 0;
    align-items: center;
`

export default Menu;