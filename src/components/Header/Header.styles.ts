import { styled } from "../../theme/theme";

export const StyledHeader = styled("div", {
  display: "none",
  "@bp1": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export const StyledContainerLinks = styled("div", {});

export const StyledLink = styled("a", {
    color: "$dark",
    textDecoration: "none",
    fontSize: 16,
    fontWeight: "700",
    lineHeight: "22px",
    marginLeft: "54px",
    display: "inline-block",
    cursor: "pointer",
  "&:hover": {
    color: "$primary",
  },
});

export const StyledSidebarContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 16px",
  flexDirection:"row",
  "@bp1": {
    display: "none",
  },
});