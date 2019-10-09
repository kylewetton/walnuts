import React from 'react';
import Menu from './Menu';
import OffCanvas from './OffCanvas';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Logo = props => <Link to={'/'}><LogoImg alt="Walnut" src={window.location.origin +'/assets/logo-inline.svg'} compact={props.compact} /></Link>

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false,
            compact: true
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
      }

        // Toggle menu style
    handleScroll = () => {
        const compact = window.pageYOffset === 0;
        this.setState({
        compact
        });
    };

      
    openMenu = () => {
        this.setState({menuOpen: !this.state.menuOpen})
    }

    render() {
        return (
            <React.Fragment>
                <HeaderContainer compact={this.state.compact}>
                <Logo compact={this.state.compact} />
                <Menu isOpen={this.state.menuOpen} openMenu={() => this.openMenu()} />
            </HeaderContainer>
            <OffCanvas open={this.state.menuOpen} />
            </React.Fragment>
        )
    }
}

const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 50;
    padding: ${props => props.compact ? '3.15em' : '1.5em'};
    display: flex;
    justify-content: space-between;
    transition: 0.25s ease-in-out;
    background: ${props => props.compact ? 'transparent' : 'white'}
    box-shadow: ${props => props.compact ? 'none' : '0px 0px 15px rgba(0,0,0,0.05)'}
`

const LogoImg = styled.img`
    transition: 0.25s ease-in-out;
    height: ${props => props.compact ? '50px' : '35px'};
`

export default Header;