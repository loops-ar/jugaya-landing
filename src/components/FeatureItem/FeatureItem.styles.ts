import { styled } from "../../theme/theme";

export const StyledFeatureItem = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "280px",
  "@bp1": {
    display: "flex",
    flexDirection: "column",
    width: "280px",
  },
  variants: {
    align: {
      left: {
        textAlign: "center",
        "@bp1": {
          textAlign: "left",
        },
      },
      right: {
        textAlign: "center",
        "@bp1": {
          textAlign: "right",
        },
      },
    },
  },
});

export const StyledFeatureTitle = styled("span", {
  fontWeight: 700,
  fontSize: "28px",
  lineHeight: "38px",
  marginBottom: "16px",
});

export const StyledFeatureDescription = styled("span", {
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: "22px",
});
