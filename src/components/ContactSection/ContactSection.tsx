import React from "react";
import Button from "../Button/Button";
import Container from "../Container/Container";
import Title from "../Title/Title";
import {
  StyledContactSection,
  StyledContainerContact,
  StyledImage,
  StyledSpan,
} from "./ContactSection.styles";

const ContactSection = () => {
  return (
    <StyledContactSection id="contact">
      <Container>
        <Title color="white">Contactanos</Title>
        <StyledSpan>
          Si te interesa añadir tu club a JugaYa completá el formulario de
          inscripción y nos pondremos en contacto{" "}
        </StyledSpan>
        <StyledContainerContact>
          <Button onClick={() => console.log("click")}>
            FORMULARIO DE INSCRIPCIÓN
          </Button>
        </StyledContainerContact>
        <StyledSpan>
          Si tenes alguna duda comunicate con nosotros por mail a
          contacto@jugaya.ar.
        </StyledSpan>
        <StyledContainerContact>
          <StyledImage src="/img/logo-white.svg"></StyledImage>
        </StyledContainerContact>
      </Container>
    </StyledContactSection>
  );
};

export default ContactSection;
