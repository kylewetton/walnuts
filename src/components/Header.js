import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import { HeaderContainer } from "./styles";
import Logo from "./Logo";

const Header = () => {
  const [state, setState] = useState({
    menuOpen: false,
    compact: true
  });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  // Toggle menu style
  const handleScroll = () => {
    const compact = window.pageYOffset === 0;
    setState({
      compact
    });
  };

  const openMenu = () => {
    setState({ menuOpen: !state.menuOpen });
  };

  return (
    <React.Fragment>
      <HeaderContainer compact={state.compact}>
        <Logo compact={state.compact} type={"inline"} />
        <Menu isOpen={state.menuOpen} openMenu={() => openMenu()} />
      </HeaderContainer>
    </React.Fragment>
  );
};

export default Header;
