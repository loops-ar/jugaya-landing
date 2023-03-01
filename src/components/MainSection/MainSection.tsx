import React from "react";
import Button from "../Button/Button";
import ButtonGoogle from "../ButtonGoogle/ButtonGoogle";
import Container from "../Container/Container";
import {
  StyledBody,
  StyledButtonSection,
  StyledContainerButton,
  StyledContainerButtonImg,
  StyledContainerDescription,
  StyledContainerImg,
  StyledContainerLinks,
  StyledDescription,
  StyledFooter,
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
    <StyledMainSection id="main">
      <Container>
        <StyledHeader>
          <StyledLogo src="/img/logo-black.svg"></StyledLogo>
          <StyledContainerLinks>
            <StyledLink href="#main">Inicio</StyledLink>
            <StyledLink href="#features">Características</StyledLink>
            <StyledLink href="#contact">Contacto</StyledLink>
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
              <Button
                onClick={() => {
                  window.location.href = "https://jugaya.ar/";
                }}
              >
                {"VERSION WEB"}
              </Button>
              <ButtonGoogle
                onClick={() => {
                  window.location.href =
                    "https://play.google.com/store/apps/details?id=ar.jugaya.twa";
                }}
              ></ButtonGoogle>
            </StyledContainerButton>
          </StyledContainerDescription>
          <StyledContainerImg>
            <StyledImg src="/img/phone-1.png"></StyledImg>
            <StyledContainerButtonImg>
              <Button
                onClick={() => {
                  window.location.href = "https://jugaya.ar/";
                }}
              >
                {"VERSION WEB"}
              </Button>
              <ButtonGoogle
                onClick={() => {
                  window.location.href =
                    "https://play.google.com/store/apps/details?id=ar.jugaya.twa";
                }}
              ></ButtonGoogle>
            </StyledContainerButtonImg>
          </StyledContainerImg>
        </StyledBody>
        <StyledFooter>
          <StyledButtonSection
            onClick={() => {
              window.location.href = "#features";
            }}
            src="/img/scroll-icon.svg"
            alt="scroll"
          />
        </StyledFooter>
      </Container>
    </StyledMainSection>
  );
};

export default MainSection;
