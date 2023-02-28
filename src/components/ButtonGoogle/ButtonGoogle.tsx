import React, { FC } from "react";
import { StyledButtonGoogle } from "./ButtonGoogle.styles";

interface ButtonGoogleProps {
  text: string;
  onClick: () => void;
}

const ButtonGoogle: FC<ButtonGoogleProps> = ({ text, onClick }) => {
  return <StyledButtonGoogle src="/img/playstore.png" alt="button-playstore" onClick={onClick} />;
};

export default ButtonGoogle;
