import React from "react";
import { SignOffContainer } from "./styles";

const SignOff = () => {
  return (
    <SignOffContainer>
      <span>
        <a href="#">Privacy policy</a>
      </span>{" "}
      <span>Created by</span>&nbsp;
      <a target="_blank" href="https://bigpanda.co.nz">
        <strong>Big Panda</strong>
      </a>
    </SignOffContainer>
  );
};

export default SignOff;
