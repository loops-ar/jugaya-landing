import { FC } from "react";
import {
  StyledCardDescriptionItem,
  StyledCardDescriptionTitle,
  StyledCardLink,
  StyledCardTitle,
  StyledCardTutorial,
  StyledCardUserType,
} from "./CardTutorial.styles";

interface CardTutorialProps {
  userType?: "admin" | "user";
  title?: string;
  items?: string[];
  link?: string;
}

const CardTutorial: FC<CardTutorialProps> = ({
  userType,
  title,
  items,
  link,
}) => {
  return (
    <StyledCardLink href={link}>
      <StyledCardTutorial>
        <StyledCardTitle>{title}</StyledCardTitle>
        <StyledCardUserType userType={userType}>
          {userType === "admin" ? "Administrador" : "Todos los usuarios"}
        </StyledCardUserType>

        <StyledCardDescriptionTitle>Aprende a:</StyledCardDescriptionTitle>
        {items?.map((item, index) => (
          <StyledCardDescriptionItem key={index}>
            {item}
          </StyledCardDescriptionItem>
        ))}
      </StyledCardTutorial>
    </StyledCardLink>
  );
};

export default CardTutorial;
