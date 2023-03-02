import { styled } from "../../theme/theme";

export const StyledButton = styled("button", {
  fontWeight: 600,
  fontSize: "12px",
  lineHeight: "19px",
  color: "$white",
  borderRadius: "28px",
  border: "none",
  background:
    "linear-gradient(180deg, rgba(145, 195, 1, 0.8) 0%, rgba(145, 195, 1, 0.98) 100%)",
  padding: "14px 28px",
  cursor: "pointer",
  whiteSpace: "nowrap",
  "@bp2": {
    fontSize: "14px",
    padding: "18px 36px",
  },
});
