import React from "react";
import {
  StyledPriceSection,
  StyledPriceSectionCalculatorContainer,
  StyledPriceSectionText,
} from "./PriceSection.styles";
import Title from "../Title/Title";
import Description from "../Description/Description";
import Calculator from "../Calculator/Calculator";
import Button from "../Button/Button";

const PriceSection = () => {
  return (
    <StyledPriceSection>
      <StyledPriceSectionText>
        <Title>Precios</Title>
        <Description size="small">
          Sabemos que cada club tiene necesidades unicas, por eso ajustamos
          nuestros precios según el deporte, la duración de los turnos y la
          cantidad de canchas. Buscamos que el costo siempre te favorezca,
          independientemente del tamaño de tu club! Utilizá la calculadora de
          precios para tener un mejor precio aproximado
        </Description>
      </StyledPriceSectionText>
      <StyledPriceSectionCalculatorContainer>
        <Calculator></Calculator>
      </StyledPriceSectionCalculatorContainer>
      <Button onClick={() => console.log("click")}>COMENZA LA PRUEBA GRATUITA</Button>
    </StyledPriceSection>
  );
};

export default PriceSection;
