import React from "react";
import Container from "../Container/Container";
import FeatureItem from "../FeatureItem/FeatureItem";
import { StyledFooter } from "../MainSection/MainSection.styles";
import Title from "../Title/Title";
import {
  StyledButtonSection,
  StyledFeatureImage,
  StyledFeaturesAndImageContainer,
  StyledFeaturesLeftContainer,
  StyledFeaturesRightContainer,
  StyledFeaturesSection,
} from "./FeaturesSection.styles";

const FeaturesSection = () => {
  return (
    <StyledFeaturesSection id="features">
      <Container>
        <Title>Características</Title>
        <StyledFeaturesAndImageContainer>
          <StyledFeaturesLeftContainer>
            <FeatureItem
              title="Eficiencia"
              align="right"
              description="Ahorra tiempo y recursos en tareas administrativas"
            />
            <FeatureItem
              title="Simpleza"
              align="right"
              description="Nuestra plataforma es intuitiva y cualquiera puede usarla"
            />
            <FeatureItem
              title="Notificaciones"
              align="right"
              description="Recibí notificaciones para gestionar tus reservas en tiempo real"
            />
          </StyledFeaturesLeftContainer>
          <StyledFeatureImage src="/img/phone-2.png"></StyledFeatureImage>
          <StyledFeaturesRightContainer>
            <FeatureItem
              title="Flexibilidad"
              align="left"
              description="Habilitá o deshabilitá horarios y creá reservas recurrentes"
            />
            <FeatureItem
              title="Seguridad"
              align="left"
              description="Accedé a los datos de contacto del jugador ante cualquier inconveniente"
            />
            <FeatureItem
              title="Soporte"
              align="left"
              description="Te ayudamos ante cualquier duda o inconveniente con la app"
            />
          </StyledFeaturesRightContainer>
        </StyledFeaturesAndImageContainer>
        <StyledFooter>
          <StyledButtonSection
            onClick={() => {
              window.location.href = "#contact";
            }}
            src="/img/scroll-icon.svg"
            alt="scroll"
          />
        </StyledFooter>
      </Container>
    </StyledFeaturesSection>
  );
};

export default FeaturesSection;
