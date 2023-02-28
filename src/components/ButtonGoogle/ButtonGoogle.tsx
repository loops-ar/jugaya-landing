import React, { FC } from "react";
import { StyledButtonGoogle } from "./ButtonGoogle.styles";

interface ButtonGoogleProps {
  onClick: () => void;
}

const ButtonGoogle: FC<ButtonGoogleProps> = ({onClick }) => {
  return <StyledButtonGoogle src="/img/playstore.png" alt="button-playstore" onClick={onClick} />;
};

export default ButtonGoogle;
