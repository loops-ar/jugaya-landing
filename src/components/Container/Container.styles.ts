import { styled } from "../../theme/theme";

export const StyledContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  margin: "0 auto",
  "@bp1": {
    width: "95%",
    maxWidth: "840px",
  },
  "@bp2": {
    maxWidth: "1200px",
  },
});
