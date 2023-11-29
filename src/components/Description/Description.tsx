import React, { FC } from "react";
import { StyledDescription } from "./Description.styles";

interface DescriptionProps {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  color?: "white" | "black";
}

const Description: FC<DescriptionProps> = ({ children, size = "medium", color = "black" }) => {
  return <StyledDescription size={size} color={color}>{children}</StyledDescription>;
};

export default Description;
