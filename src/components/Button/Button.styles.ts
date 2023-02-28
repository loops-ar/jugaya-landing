import { styled } from "../../theme/theme";

export const StyledButton = styled("button", {
  fontWeight: 600,
    fontSize: "12px",
    lineHeight: "19px",
    color: "$white",
    borderRadius: "28px",
    border: "none",
    backgroundColor: "$primary",
    padding: "14px 24px",
    cursor: "pointer",
    whiteSpace: "nowrap",
  "@bp1": {
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "19px",
    color: "$white",
    borderRadius: "28px",
    border: "none",
    backgroundColor: "$primary",
    padding: "18px 36px",
    cursor: "pointer",
  },
});
