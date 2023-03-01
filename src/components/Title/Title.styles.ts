import { styled } from "../../theme/theme";

export const StyledTitle = styled("span", {
  fontWeight: 700,
  fontSize: "36px",
  lineHeight: "49px",
  textAlign: "center", 
  variants: {
    color: {
      white: {
        color: "$white",
      },
      black: {
        color: "$black",
      },
    },
  },
  "@bp1": {
    fontWeight: 700,
    fontSize: "64px",
    lineHeight: "87px",
    textAlign: "center",
  },
});
