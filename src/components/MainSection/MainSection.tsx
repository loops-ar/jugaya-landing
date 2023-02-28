import React from "react";
import {
  StyledContainerLinks,
  StyledHeader,
  StyledLink,
  StyledLogo,
  StyledMainSection,
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
    </StyledMainSection>
  );
};

export default MainSection;
