import { styled } from "../../theme/theme";

export const StyledCardLink = styled("a", {
  textDecoration: "none",
  color: "inherit",
});

export const StyledCardTutorial = styled("div", {
  background: "$white",
  display: "flex",
  flexDirection: "column",
  padding: "16px",
  borderRadius: "28px",
  minWidth: "320px",
  boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.08)",
  cursor: "pointer",
  position: "relative",
  "@bp1": {
    minHeight: "224px",
  },
});

export const StyledCardTitle = styled("h1", {
  fontSize: "20px",
  fontWeight: "700",
  lineHeight: "33px",
  color: "$dark",
  margin: "0 0 8px 0",
});

export const StyledCardUserType = styled("span", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "fit-content",
  fontSize: "12px",
  fontWeight: "700",
  lineHeight: "16px",
  marginBottom: "24px",
  padding: "2px 8px",
  borderRadius: "16px",
  color: "white",
  variants: {
    userType: {
      admin: { backgroundColor: "$primary" },
      user: { backgroundColor: "$secondary" },
    },
  },
});

export const StyledCardDescriptionTitle = styled("h3", {
  margin: "0 0 8px 0",
  fontSize: "16px",
  fontWeight: "600",
});

export const StyledCardDescriptionItem = styled("li", {
  listStyle: "none",
  fontSize: "14px",
  fontWeight: "400",
});
