export type Deporte = "padel" | "tenis" | "futbol5" | "futbol7" | "futbol11";

const multiCanchas: Record<number, number> = {
  1: 1,
  2: 0.95,
  3: 0.9,
  4: 0.8,
  5: 0.7,
  6: 0.6,
};

const ppp = 50;

const precioPorDeporte: Record<Deporte, number> = {
  padel: 4 * ppp,
  tenis: 4 * ppp,
  futbol5: 10 * ppp,
  futbol7: 14 * ppp,
  futbol11: 22 * ppp,
};

export const calcularPrecioPorTurno = (
  deporte: Deporte,
  duracion: number,
  canchas: number
) => {
  const baseDeporte = precioPorDeporte[deporte];
  let multiCancha = 1;
  Object.keys(multiCanchas).forEach((key) => {
    const cant = parseInt(key);
    if (canchas >= cant) {
      multiCancha = multiCanchas[cant];
    }
  });
  return baseDeporte * duracion * multiCancha;
};

export const calcularPrecioPorMes = (
  precioPorTurno: number,
  turnos: number
) => {
  return precioPorTurno * turnos;
};

export const deportesOptions: Array<{ value: Deporte; label: string }> = [
  {
    value: "padel",
    label: "Padel",
  },
  {
    value: "tenis",
    label: "Tenis",
  },
  {
    value: "futbol5",
    label: "Futbol 5",
  },
  {
    value: "futbol7",
    label: "Futbol 7",
  },
  {
    value: "futbol11",
    label: "Futbol 11",
  },
];

export const durationOptions: Array<{ value: string; label: string }> = [
  {
    value: "1",
    label: "1 hora",
  },
  {
    value: "1.5",
    label: "1 hora y media",
  },
  {
    value: "2",
    label: "2 horas",
  },
];
