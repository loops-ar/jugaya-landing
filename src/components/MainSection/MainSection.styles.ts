import { styled } from "../../theme/theme";

export const StyledMainSection = styled("div", {
  background: "linear-gradient(180deg, #FFFFFF 12.54%, #F0F0F0 100%)",
  padding: "28px",
});

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
  },
  "&:hover": {
    color: "$primary",
  },
});

export const StyledLogo = styled("img", {});
