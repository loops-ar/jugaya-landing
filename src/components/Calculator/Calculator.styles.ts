import { styled } from "../../theme/theme";

export const StyledCalculator = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "16px",
  boxShadow: "0 1px 20px rgba(0, 0, 0, 0.1)",
  borderRadius: "30px",
  padding: "12px 36px 24px 36px",
});

export const StyledCalculatorTitle = styled("h1", {
  fontSize: "24px",
});

export const StyledCalculatorInputContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  "@bp1": {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "24px",
  },
});

export const StyledCalculatorPriceContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const StyledCalculatorPriceSD = styled("span", {
  fontSize: "18px",
  color: "#616161",
  textDecoration: "line-through",
  height: 24,
  display: "block",
});

export const StyledCalculatorPrice = styled("span", {
  fontSize: "36px",
  color: "$dark",
  "@bp1": {
    fontSize: "48px",
  },
});

export const StyledCalculatorPriceXTurno = styled("span", {
  fontSize: "24px",
  color: "#616161",
});

export const StyledCanchasContainer = styled("div", {
  position: "relative",
});

export const StyledDiscountMessageSmall = styled("span", {
  position: "absolute",
  top: 24,
  right: 10,
  fontSize: "14px",
  color: "$dark",
  fontWeight: 300,
  pointerEvents: "none",
});

export const StyledDiscountMessageLarge = styled("span", {
  position: "absolute",
  bottom: 8,
  right: 10,
  fontSize: "18px",
  color: "$primary",
  fontWeight: 600,
  pointerEvents: "none",
});
