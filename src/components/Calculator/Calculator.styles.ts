import { styled } from "../../theme/theme";

export const StyledCalculator = styled("div", {
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    gap:"24px",
    boxShadow: "0 1px 20px rgba(0, 0, 0, 0.1)",
    borderRadius: "30px",
    padding:"12px 36px 24px 36px",
});

export const StyledCalculatorTitle = styled("h1", {
    fontSize: "24px",
});

export const StyledCalculatorInputContainer = styled("div", {
    display:"grid",
    gridTemplateColumns:"1fr 1fr",
    gap:"24px",
});

export const StyledCalculatorPriceContainer = styled("div", {
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
});

export const StyledCalculatorPrice = styled("span", {
    fontSize: "36px",
    color: "$primary",
});

export const StyledCalculatorPriceXTurno = styled("span", {
    fontSize: "24px",
    color: "$dark",
});

