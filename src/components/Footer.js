import React from "react";
import { FooterContainer } from "./styles";
import Button from "./Button";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";
import SignOff from "./SignOff";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer-1">
        <Button href={"/products/walnut-5000"} text="Shop now" />
        <ul>
          <li>
            <Link to={"/about"}>About us</Link>
          </li>
        </ul>
        <h4>Keep in touch</h4>
        <input type="text" placeholder="Email address..." />
      </div>
      <div className="footer-2">
        <Logo type={"stacked"} compact={true} footer={true} />
        <p>
          <strong>Did you know</strong>: It takes about 170 days for a walnut to
          develop and mature on a tree.
        </p>
      </div>
      <div className="footer-3">
        <SocialLinks />
        <SignOff />
      </div>
    </FooterContainer>
  );
};

export default Footer;
