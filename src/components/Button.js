import React from "react";
import { BtnLnk, Btn } from "./styles";

const Button = ({ href, text }) => {
  return href ? <BtnLnk to={href}>{text}</BtnLnk> : <Btn>{text}</Btn>;
};

export default Button;
