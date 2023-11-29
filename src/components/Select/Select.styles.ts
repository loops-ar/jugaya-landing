import { styled } from "../../theme/theme";

export const StyledTextSelect = styled("select", {
  border: "none",
  borderRadius: "10em",
  padding: "14px",
  fontWeight: 400,
  fontSize: 16,
  lineHeight: "22px",
  color: "$dark",
  boxShadow: "0px 2px 4px rgba(10, 10, 10, 0.2)",
  outline: "none",
  display: "flex",
  flexDirection: "column",
  width: "100%",
});

export const StyledSelectContainer = styled("div", {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const StyledLabel = styled("label", {
  fontWeight: 700,
  fontSize: 16,
  lineHeight: "19px",
  paddingBottom: "6px",
  width: "100%",
  position: "relative",
});
