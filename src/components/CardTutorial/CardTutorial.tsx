import { FC } from "react";
import {
  StyledCardDescriptionItem,
  StyledCardDescriptionTitle,
  StyledCardTitle,
  StyledCardTutorial,
  StyledCardUserType,
} from "./CardTutorial.styles";

interface CardTutorialProps {
  userType?: "admin" | "user";
  title?: string;
  items?: string[];
  onClick?: () => void;
}

const CardTutorial: FC<CardTutorialProps> = ({ userType, title, items, onClick }) => {
  return (
    <StyledCardTutorial onClick={onClick}>
      <StyledCardTitle>{title}</StyledCardTitle>
      <StyledCardUserType userType={userType}>{userType === "admin" ? "Administrador" : "Todos los usuarios"}</StyledCardUserType>

      <StyledCardDescriptionTitle>Aprende a:</StyledCardDescriptionTitle>
      {items?.map((item, index) => (
        <StyledCardDescriptionItem key={index}>
          {item}
        </StyledCardDescriptionItem>
      ))}
    </StyledCardTutorial>
  );
};

export default CardTutorial;
