import { styled } from "../../theme/theme";

export const StyledDescription = styled("span", {
  variants: {
    color: {
      white: {
        color: "$white",
      },
      black: {
        color: "$dark",
      },
    },
    size: {
      small: {
        fontSize: 16,
        fontWeight: "400",
        lineHeight: "22px",
      },
      medium: {
        fontSize: 24,
        fontWeight: "400",
        lineHeight: "32px",
      },
      large: {
        fontSize: 32,
        fontWeight: "400",
        lineHeight: "42px",
      },
    },
  },
});
