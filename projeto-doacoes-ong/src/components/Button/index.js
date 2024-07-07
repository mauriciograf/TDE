import React from "react";
import * as C from "./styles";

const Button = ({ children, onClick, Type = "button" }) => {
  return (
    <C.Button type={Type} onClick={onClick}>
      {children}
    </C.Button>
  );
};

export default Button;
