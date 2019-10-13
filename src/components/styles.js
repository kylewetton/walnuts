import styled from "styled-components";
import { Link } from "react-router-dom";
import theme from "../theme";

export const FooterContainer = styled.footer`
  margin-top: 4em;
  height: 33vh;
  min-height: 330px;
  display: flex;
  border-top: 2px solid #f4f1eb;

  h4 {
    margin-top: 0;
  }
  > div {
    display: flex;
    flex-direction: column;
    padding: 4em;

    flex: 1;
    justify-content: space-between;
  }
  .footer-1 {
    align-items: flex-start;
    button {
      margin-bottom: 2em;
    }
    ul {
      margin: 0;
      padding: 0;
      margin-bottom: 2em;
      list-style: none;
      li {
        padding: 0;
      }
    }
    input {
      border: none;
      border-bottom: 2px solid #68543b;
      padding: 1em 0;
      color: #68543b;
      width: 100%;
      max-width: 200px;
    }
  }
  .footer-2 {
    text-align: center;
    flex: 2;
    align-items: center;
    p {
      margin: 0;
    }
  }
  .footer-3 {
    text-align: right;
    align-items: flex-end;
  }

  @media (max-width: 748px) {
    flex-direction: column;
    height: auto;
    min-height: auto;
    padding: 4em 2em;

    .footer-2 {
      order: -1;
      p,
      img {
        margin-bottom: 2em;
      }
    }

    .footer-1 {
      input {
        margin-bottom: 2em;
      }
    }

    .footer-3 {
      > div {
        margin-bottom: 2em;
      }
    }
    .footer-1,
    .footer-2,
    .footer-3 {
      text-align: center;
      justify-content: space-between;
      align-items: center;
      padding: 0;
    }
  }
  .footer-logo {
    height: 80px;
  }
`;

export const Btn = styled.button`
  border: 1px solid ${theme.colorBrand};
  text-decoration: none;
  color: ${theme.colorBrand};
  line-height: 1;
  padding: 0.75em 1em;
  text-transform: uppercase;
  transition: 0.25s ease-in-out;
  margin-bottom: 2em;
  :hover {
    background: ${theme.colorBrand};
    color: white;
  }
`;

export const BtnLnk = styled(Link)`
  border: 1px solid ${theme.colorBrand};
  text-decoration: none;
  color: ${theme.colorBrand};
  line-height: 1;
  padding: 0.75em 1em;
  text-transform: uppercase;
  margin-bottom: 2em;
  transition: 0.25s ease-in-out;
  :hover {
    background: ${theme.colorBrand};
    color: white;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  > img {
    cursor: pointer;
  }
`;

export const SignOffContainer = styled.div`
  span,
  a {
    display: inline-block;
    font-size: 0.8rem;
  }
  span {
    margin-left: 1em;
  }
  a {
    opacity: 0.8;
    text-decoration: underline;
  }
`;

export const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 50;
    padding: ${props => (props.compact ? "3.15em" : "1.5em")};
    display: flex;
    justify-content: space-between;
    transition: 0.25s ease-in-out;
    background: ${props => (props.compact ? "transparent" : "white")}
    box-shadow: ${props =>
      props.compact ? "none" : "0px 0px 15px rgba(0,0,0,0.05)"}
`;

export const CartButtons = styled.div`
  display: flex;
  width: 100%;
  ${Btn} {
    flex: 1;
    margin: 0;
    width: 100%;
    display: block;
    border: none;
  }
  ${Btn}:first-child {
    background: ${theme.colorBrand};
    color: white;
  }
  ${Btn}:last-child:hover {
    background: #eeeeee;
    color: ${theme.colorBrand};
  }
`;

export const StyledDeleteCartItem = styled.div`
  width: 12px;
  height: 12px;
  svg {
    height: 100%;
  }
`;

export const CartContainer = styled.div`
  position: fixed;
  bottom: 4em;
  right: 4em;
  background: white;
  flex-direction: column;
  border-radius: 0.25em;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.33);
  z-index: 20;
  .cart-icon {
    height: 20px;
    width: 24px;
    path {
      stroke: ${theme.colorBrand};
    }
  }
  .lineitem-wrapper {
    margin: 0.5em 0;
  }
  .cart-padding {
    padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &.--is-hidden {
    .lineitem-wrapper,
    ${CartButtons} {
      display: none;
    }
  }
`;

export const CartCounterContainer = styled.div`
  width: 20px;
  height: 20px;
  background: red;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  position: absolute;
  font-size: 0.8em;
  line-height: 1;
  top: -10px;
  right: -10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
`;

export const LineItem = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  > div {
    padding: 0.5em;
    flex: 1;
  }
  .name {
    flex: 2;
    font-size: 0.8em;
  }
  .thumbnail {
    > img {
      height: 30px;
      transform: translateY(5px);
    }
  }
  .controls {
    display: flex;
    justify-content: flex-end;
  }
`;
