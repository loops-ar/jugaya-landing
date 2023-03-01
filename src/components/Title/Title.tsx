import React, { FC } from "react";
import { StyledTitle } from "./Title.styles";

interface TitleProps {
  children: React.ReactNode;
  color?: "white" | "black";
}

const Title: FC<TitleProps> = ({ children, color }) => {
  return <StyledTitle color={color}>{children}</StyledTitle>;
};

export default Title;
