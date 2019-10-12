import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Logo = ({ compact = false, type, footer = false }) => (
  <Link to={"/"}>
    <LogoImg
      alt="Walnuts"
      src={window.location.origin + `/assets/logo-${type}.svg`}
      compact={compact}
      footer={footer}
    />
  </Link>
);

const LogoImg = styled.img`
  transition: 0.25s ease-in-out;
  height: ${props =>
    props.compact ? (props.footer ? "80px" : "50px") : "35px"};
`;

export default Logo;
