import React from "react";
import Button from "../Button/Button";
import Title from "../Title/Title";
import { StyledContactSection, StyledImage, StyledSpan } from "./ContactSection.styles";

const ContactSection = () => {
  return <StyledContactSection id="contact">
    <Title color="white">Contactanos</Title>
    <StyledSpan>Si te interesa añadir tu club a JugaYa completá el formulario de inscripción y nos pondremos en contacto </StyledSpan>
    <Button onClick={() => console.log("click")}>FORMULARIO DE INSCRIPCIÓN</Button>
    <StyledSpan>Si tenes alguna duda comunicate con nosotros por mail a contacto@jugaya.ar.</StyledSpan>
    <StyledImage src="/img/logo-white.svg"></StyledImage>
  </StyledContactSection>;
};

export default ContactSection;
