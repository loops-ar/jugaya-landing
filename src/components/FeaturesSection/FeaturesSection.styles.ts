import { styled } from "../../theme/theme";

export const StyledFeaturesSection = styled("div", {
  backgroundImage: "url('/img/feature-bg.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "right",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "46px 0",
});

export const StyledFeaturesAndImageContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "46px",
  "@bp1": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "0",
  },
});

export const StyledFeaturesLeftContainer = styled("div", {
  "& > * + *": {
    marginTop: "26px",
  },
  "@bp1": {
    "& > * + *": {
      marginTop: "56px",
    },
  },
});

export const StyledFeaturesRightContainer = styled("div", {
  "& > * + *": {
    marginTop: "26px",
  },
  "@bp1": {
    "& > * + *": {
      marginTop: "56px",
    },
  },
});

export const StyledFeatureImage = styled("img", {});

export const StyledButtonSection = styled("img", {
  display: "none",
  "@bp1": {
    display: "block",
    cursor: "pointer",
    width: 14,  
    objectFit: "contain",
  },
});
