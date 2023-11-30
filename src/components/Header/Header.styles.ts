import { styled } from "../../theme/theme";

export const StyledHeader = styled("div", {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "@bp1": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  });

  export const StyledLogo = styled("img", {});

  export const StyledContainerLinks = styled("div", {});

export const StyledLink = styled("a", {
  display: "none",
  "@bp1": {
    color: "$dark",
    textDecoration: "none",
    fontSize: 16,
    fontWeight: "700",
    lineHeight: "22px",
    marginLeft: "54px",
    display: "inline-block",
    cursor: "pointer",
  },
  "&:hover": {
    color: "$primary",
  },
});