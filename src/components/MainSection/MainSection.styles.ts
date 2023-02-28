import { styled } from "../../theme/theme";

export const StyledMainSection = styled("div", {
  background: "linear-gradient(180deg, #FFFFFF 12.54%, #F0F0F0 100%)",
  padding: "28px 50px",
  "@bp1": {
    padding: "28px 100px",
  },
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

export const StyledBody = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  "@bp1": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export const StyledContainerDescription = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  "@bp1": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
});

export const StyledContainerImg = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const StyledTitleMain = styled("span", {
  fontWeight: 700,
  fontSize: "38px",
  lineHeight: "48px",
  textAlign: "center",
  marginTop: "24px",
  "@bp1": {
    fontWeight: 700,
    fontSize: "76px",
    lineHeight: "84px",
    marginBottom: "60px",
  },
});

export const StyledTitleSecondary = styled("span", {
  display: "none",
  "@bp1": {
    fontWeight: 600,
    fontSize: "20px",
    lineHeight: "23px",
    marginBottom: "20px",
    display: "block",
  },
});

export const StyledDescription = styled("span", {
  display: "none",
  "@bp1": {
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "20px",
    display: "block",
  },
});

export const StyledImg = styled("img", {
  width: 280,
  objectFit: "contain",
  "@bp1": {
    width: "582px",
    height: "696px",
    objectFit: "contain",
  },
});

export const StyledContainerButton = styled("div", {
  display: "none",
  "@bp1": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: "60px",
    "& > *:not(:last-child)": {
      marginRight: "16px",
    },
  },
});

export const StyledContainerButtonImg = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "24px",
  "& > *:not(:last-child)": {
    marginRight: "12px",
  },
  "@bp1": {
    display: "none",
  },
});
