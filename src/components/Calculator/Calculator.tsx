import React from "react";
import {
  StyledCalculator,
  StyledCalculatorInputContainer,
  StyledCalculatorPrice,
  StyledCalculatorPriceContainer,
  StyledCalculatorPriceXTurno,
  StyledCalculatorTitle,
} from "./Calculator.styles";
import Select from "../Select/Select";
import Input from "../Input/Input";

// Definir un tipo para el objeto valorPorDeporte
type ValorPorDeporte = {
  [deporte: string]: {
    "1 hora": number;
    "1:30 horas": number;
    "2 horas": number;
  };
};

const valorPorDeporte: ValorPorDeporte = {
  Padel: {
    "1 hora": 40,
    "1:30 horas": 60,
    "2 horas": 80,
  },
  "Futbol 5": {
    "1 hora": 100,
    "1:30 horas": 150,
    "2 horas": 200,
  },
  "Futbol 7": {
    "1 hora": 150,
    "1:30 horas": 225,
    "2 horas": 300,
  },
  "Futbol 11": {
    "1 hora": 200,
    "1:30 horas": 300,
    "2 horas": 400,
  },
};

const Calculator = () => {
  const [deporte, setDeporte] = React.useState("Padel");
  const [duracion, setDuracion] = React.useState("1 hora");
  const [canchas, setCanchas] = React.useState("1");
  const [turnos, setTurnos] = React.useState("1");

  // Usar el tipo ValorPorDeporte en la función calcularPrecio
  const calcularPrecio = (deporte: string): number | undefined => {
    const parsedCanchas = parseInt(canchas);
    const parsedTurnos = parseInt(turnos);

    if (parsedCanchas >= 1 && parsedCanchas <= 3) {
      if (duracion === "1 hora") {
        return valorPorDeporte[deporte]["1 hora"] * parsedTurnos;
      } else if (duracion === "1:30 horas") {
        return valorPorDeporte[deporte]["1:30 horas"] * parsedTurnos;
      } else if (duracion === "2 horas") {
        return valorPorDeporte[deporte]["2 horas"] * parsedTurnos;
      }
    } else if (parsedCanchas >= 4 && parsedCanchas <= 6) {
      if (duracion === "1 hora") {
        return valorPorDeporte[deporte]["1 hora"] * parsedTurnos * 0.8;
      } else if (duracion === "1:30 horas") {
        return valorPorDeporte[deporte]["1:30 horas"] * parsedTurnos * 0.8;
      } else if (duracion === "2 horas") {
        return valorPorDeporte[deporte]["2 horas"] * parsedTurnos * 0.8;
      }
    } else if (parsedCanchas >= 7) {
      if (duracion === "1 hora") {
        return valorPorDeporte[deporte]["1 hora"] * parsedTurnos * 0.6;
      } else if (duracion === "1:30 horas") {
        return valorPorDeporte[deporte]["1:30 horas"] * parsedTurnos * 0.6;
      } else if (duracion === "2 horas") {
        return valorPorDeporte[deporte]["2 horas"] * parsedTurnos * 0.6;
      }
    }
    return 0;
  };

  const calcularPrecioXTurno = (deporte: string): number | undefined => {
    const parsedCanchas = parseInt(canchas);
    const parsedTurnos = parseInt(turnos);

    if (parsedCanchas >= 1 && parsedCanchas <= 3) {
      if (duracion === "1 hora") {
        return valorPorDeporte[deporte]["1 hora"];
      } else if (duracion === "1:30 horas") {
        return valorPorDeporte[deporte]["1:30 horas"];
      } else if (duracion === "2 horas") {
        return valorPorDeporte[deporte]["2 horas"];
      }
    } else if (parsedCanchas >= 4 && parsedCanchas <= 6) {
      if (duracion === "1 hora") {
        return valorPorDeporte[deporte]["1 hora"] * 0.8;
      } else if (duracion === "1:30 horas") {
        return valorPorDeporte[deporte]["1:30 horas"] * 0.8;
      } else if (duracion === "2 horas") {
        return valorPorDeporte[deporte]["2 horas"] * 0.8;
      }
    } else if (parsedCanchas >= 7) {
      if (duracion === "1 hora") {
        return valorPorDeporte[deporte]["1 hora"] * 0.6;
      } else if (duracion === "1:30 horas") {
        return valorPorDeporte[deporte]["1:30 horas"] * 0.6;
      } else if (duracion === "2 horas") {
        return valorPorDeporte[deporte]["2 horas"] * 0.6;
      }
    }
    return 0;
  };
  return (
    <StyledCalculator>
      <StyledCalculatorTitle>Calculadora de precios</StyledCalculatorTitle>
      <StyledCalculatorInputContainer>
        <Select
          name="Deporte"
          label="Deporte"
          options={["Padel", "Futbol 5", "Futbol 7", "Futbol 11"]}
          onChange={(event) => setDeporte(event.target.value)}
        ></Select>
        <Select
          name="Duracion"
          label="Duración del turno"
          options={["1 hora", "1:30 horas", "2 horas"]}
          onChange={(event) => setDuracion(event.target.value)}
        ></Select>
        <Input
          name="canchas"
          value={canchas}
          onChange={(event) => setCanchas(event.target.value)}
          label="Cantidad de canchas"
        ></Input>
        <Input
          name="turnos"
          value={turnos}
          onChange={(event) => setTurnos(event.target.value)}
          label="Turnos estimados por mes"
        ></Input>
      </StyledCalculatorInputContainer>
      <StyledCalculatorPriceContainer>
        <StyledCalculatorPrice>{`$ ${calcularPrecio(
          deporte
        )} / Mes`}</StyledCalculatorPrice>
        <StyledCalculatorPriceXTurno>
          {`$ ${calcularPrecioXTurno(deporte)} / Turno`}
        </StyledCalculatorPriceXTurno>
      </StyledCalculatorPriceContainer>
    </StyledCalculator>
  );
};

export default Calculator;
