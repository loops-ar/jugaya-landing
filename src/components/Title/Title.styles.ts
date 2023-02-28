import { styled } from "../../theme/theme";

export const StyledTitle = styled("span", {
  fontWeight: 700,
  fontSize: "36px",
  lineHeight: "49px",
  textAlign: "center",
  "@bp1": {
    fontWeight: 700,
    fontSize: "64px",
    lineHeight: "87px",
    textAlign: "center",
  },
});
