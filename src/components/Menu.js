import React from 'react';
import styled from 'styled-components';
import theme from '../theme';

const Burger = props => {
    return ( 
    <BurgerWrapper isOpen={props.isOpen} onClick={props.openMenu}>
        <span></span>
        <span></span>
        <span></span>
    </BurgerWrapper>
    )
}

const Menu = props => {
        return (
            <Nav>
                <NavItem active={true}>Shop now</NavItem>
                <NavItem>Features</NavItem>
                <NavItem>About us</NavItem>
                <Burger isOpen={props.isOpen} openMenu={() => props.openMenu()} />
            </Nav>
        )
    }

const BurgerWrapper = styled.div`
    height: 20px;
    display: flex;
    flex-direction: column;
    margin-left: 1.75em;
    align-items: flex-end;
    justify-content: ${props => props.isOpen ? 'center' : 'space-between'};
    span {
        display: block;
        height: 2px;
        width: 20px;
        background: ${theme.colorBlack}
        transition: 0.25s ease-in;
    }
    span:nth-child(1) {
        width: ${props => props.isOpen ? '20px' : '15px'};
        transform: ${props => props.isOpen ? 'translateY(2px) rotate(45deg);' : 'translateY(0px) rotate(0deg);' }
    }
    span:nth-child(2) {
        width: ${props => props.isOpen ? '0px' : '20px'};
    }
    span:nth-child(3) {
        width: ${props => props.isOpen ? '20px' : '8px'};
        transform: ${props => props.isOpen ? 'translateY(-2px) rotate(-45deg);' : 'translateY(0px) rotate(0deg);' }
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