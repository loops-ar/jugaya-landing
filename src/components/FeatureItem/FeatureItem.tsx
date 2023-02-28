import React, { FC } from "react";
import {
  StyledFeatureDescription,
  StyledFeatureItem,
  StyledFeatureTitle,
} from "./FeatureItem.styles";

interface FeatureItemProps {
  title: string;
  description: string;
  align?: "left" | "right";
}

const FeatureItem: FC<FeatureItemProps> = ({ title, description, align }) => {
  return (
    <StyledFeatureItem align={align}>
      <StyledFeatureTitle>{title}</StyledFeatureTitle>
      <StyledFeatureDescription>{description}</StyledFeatureDescription>
    </StyledFeatureItem>
  );
};

export default FeatureItem;
