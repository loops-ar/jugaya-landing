import React, { useState } from "react";
import {
  StyledCalculator,
  StyledCalculatorInputContainer,
  StyledCalculatorPrice,
  StyledCalculatorPriceContainer,
  StyledCalculatorPriceSD,
  StyledCalculatorPriceXTurno,
  StyledCalculatorTitle,
  StyledCanchasContainer,
  StyledDiscountMessageLarge,
  StyledDiscountMessageSmall,
} from "./Calculator.styles";
import Select from "../Select/Select";
import Input from "../Input/Input";
import {
  Deporte,
  calcularPrecioPorMes,
  calcularPrecioPorTurno,
  deportesOptions,
  durationOptions,
} from "../../utils/calculadora";

const MIN_CANCHAS = 1;
const MAX_CANCHAS = 20;
const MIN_TURNOS = 1;
const MAX_TURNOS = 50000;

const Calculator = () => {
  const [deporte, setDeporte] = useState<Deporte>("padel");
  const [duracion, setDuracion] = useState<number>(1);
  const [canchas, setCanchas] = useState("1");
  const [turnos, setTurnos] = useState("1");

  const precioPorTurno =
    Math.round(
      calcularPrecioPorTurno(deporte, duracion, parseInt(canchas || "1", 10)) *
        100
    ) / 100;

  const precioPorTurnoSD =
    Math.round(calcularPrecioPorTurno(deporte, duracion, 1) * 100) / 100;

  const precioPorMes = calcularPrecioPorMes(
    precioPorTurno,
    parseInt(turnos || "1", 10)
  );

  const precioPorMesSD = calcularPrecioPorMes(
    precioPorTurnoSD,
    parseInt(turnos || "1", 10)
  );

  const descuento = -((precioPorMes * 100) / precioPorMesSD - 100);
  const ahorro = precioPorMesSD - precioPorMes;

  return (
    <StyledCalculator>
      <StyledCalculatorTitle>Calculadora de precios</StyledCalculatorTitle>
      <StyledCalculatorInputContainer>
        <Select
          name="Deporte"
          label="Deporte"
          options={deportesOptions}
          value={deporte}
          onChange={(event) => {
            const selectedDeporte = event.target.value as Deporte;
            setDeporte(selectedDeporte);
          }}
        ></Select>
        <Select
          name="Duracion"
          label="Duración del turno"
          options={durationOptions}
          value={duracion}
          onChange={(event) => setDuracion(parseFloat(event.target.value))}
        ></Select>
        <StyledCanchasContainer>
          <Input
            name="canchas"
            value={canchas}
            onChange={(event) => {
              const canchasStr = event.target.value;
              if (!canchasStr) {
                setCanchas("");
              } else {
                const canchas = parseInt(canchasStr, 10);
                if (canchas >= MIN_CANCHAS && canchas <= MAX_CANCHAS) {
                  setCanchas(canchas.toString());
                }
              }
            }}
            onBlur={(event) => {
              if (!event.target.value) {
                setCanchas("1");
              }
            }}
            label="Cantidad de canchas"
          ></Input>
          {ahorro > 0 && (
            <>
              <StyledDiscountMessageSmall>
                Ahorrás ${ahorro}
              </StyledDiscountMessageSmall>
              <StyledDiscountMessageLarge>
                {descuento}% OFF
              </StyledDiscountMessageLarge>
            </>
          )}
        </StyledCanchasContainer>
        <Input
          name="turnos"
          value={turnos}
          onChange={(event) => {
            const turnosStr = event.target.value;
            if (!turnosStr) {
              setTurnos("");
            } else {
              const turnos = parseInt(turnosStr, 10);
              if (turnos >= MIN_TURNOS && turnos <= MAX_TURNOS) {
                setTurnos(turnos.toString());
              }
            }
          }}
          onBlur={(event) => {
            if (!event.target.value) {
              setTurnos("1");
            }
          }}
          label="Turnos estimados por mes"
        ></Input>
      </StyledCalculatorInputContainer>
      <StyledCalculatorPriceContainer>
        <StyledCalculatorPriceSD>
          {descuento > 0 && `$ ${precioPorMesSD}/mes`}
        </StyledCalculatorPriceSD>

        <StyledCalculatorPrice>$ {precioPorMes}/mes</StyledCalculatorPrice>
        <StyledCalculatorPriceXTurno>
          $ {precioPorTurno}/turno
        </StyledCalculatorPriceXTurno>
      </StyledCalculatorPriceContainer>
    </StyledCalculator>
  );
};

export default Calculator;
