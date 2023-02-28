import React, { FC } from "react";
import { StyledButton } from "./Button.styles";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({ text, onClick }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

export default Button;
