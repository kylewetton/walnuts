import React from "react";
import { BtnLnk, Btn } from "./styles";

const Button = ({ href, text, onClick }) => {
  return href ? (
    <BtnLnk to={href}>{text}</BtnLnk>
  ) : (
    <Btn onClick={onClick}>{text}</Btn>
  );
};

export default Button;
