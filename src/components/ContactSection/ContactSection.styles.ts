import { styled } from "../../theme/theme";

export const StyledContactSection = styled("div", {
  background: "linear-gradient(180deg, #2B2B2B 12.54%, #151515 100%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "0 0 36px 0",
});

export const StyledSpan = styled("span", {
  textAlign: "center",
  margin: "56px 0 46px 0",
  color: "$white",
  padding:"0 50px",
  "@bp1": {
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "22px",
  },
});

export const StyledImage = styled("img", {
  width: "84px",
  objectFit: "contain",
});

export const StyledContainerContact = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "@bp1": {
    justifyContent: "center",
  },
});