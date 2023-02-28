import React, { FC } from "react";
import { StyledTitle } from "./Title.styles";

interface TitleProps {
  children: React.ReactNode;
}

const Title: FC<TitleProps> = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
