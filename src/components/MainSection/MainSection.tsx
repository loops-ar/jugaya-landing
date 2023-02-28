import React from "react";
import Button from "../Button/Button";
import ButtonGoogle from "../ButtonGoogle/ButtonGoogle";
import {
  StyledBody,
  StyledContainerButton,
  StyledContainerButtonImg,
  StyledContainerDescription,
  StyledContainerImg,
  StyledContainerLinks,
  StyledDescription,
  StyledHeader,
  StyledImg,
  StyledLink,
  StyledLogo,
  StyledMainSection,
  StyledTitleMain,
  StyledTitleSecondary,
} from "./MainSection.styles";

const MainSection = () => {
  return (
    <StyledMainSection>
      <StyledHeader>
        <StyledLogo src="/img/logo-black.svg"></StyledLogo>
        <StyledContainerLinks>
          <StyledLink href="#main">Inicio</StyledLink>
          <StyledLink href="#contact">Contacto</StyledLink>
          <StyledLink href="#features">Características</StyledLink>
        </StyledContainerLinks>
      </StyledHeader>
      <StyledBody>
        <StyledContainerDescription>
          <StyledTitleMain>
            La mejor app para gestionar tus canchas
          </StyledTitleMain>
          <StyledTitleSecondary>
            Gestiona las reservas de tu club sin preocupaciones
          </StyledTitleSecondary>
          <StyledDescription>
            Te ofrecemos una herramienta completa para que puedas administrar
            tus espacios deportivos de manera eficiente y sencilla. Con
            características únicas y un equipo de soporte dedicado.
          </StyledDescription>
          <StyledContainerButton>
            <Button onClick={() => console.log("click")}>
              {"VERSION WEB"}
            </Button>
            <ButtonGoogle onClick={() => console.log("click")}></ButtonGoogle>
          </StyledContainerButton>
        </StyledContainerDescription>
        <StyledContainerImg>
          <StyledImg src="/img/phone-1.png"></StyledImg>
          <StyledContainerButtonImg>
            <Button onClick={() => console.log("click")}>
              {"VERSION WEB"}
            </Button>
            <ButtonGoogle onClick={() => console.log("click")}></ButtonGoogle>
          </StyledContainerButtonImg>
        </StyledContainerImg>
      </StyledBody>
    </StyledMainSection>
  );
};

export default MainSection;
