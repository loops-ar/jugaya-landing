import React, { FC } from "react";
import { StyledButton } from "./Button.styles";

interface ButtonProps {
  onClick: () => void;
  children: string;
}

const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
