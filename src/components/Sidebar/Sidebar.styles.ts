import { styled } from "../../theme/theme";

export const StyledSidebar = styled("div", {
  display: "flex",
  flexDirection: "column",
  position: "relative",
});

export const StyledSidebarIcon = styled("img", {
  width: "30px",
  cursor: "pointer",
  "@bp1": {
    display: "none",
  },
});

export const StyledSidebarMenuContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  top: "36px",
  right: "8px",
  padding: "20px 40px",
  backgroundColor: "$white",
  borderRadius: "16px",
  zIndex: 100,
  boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.4)",
  visibility: "hidden",
  opacity: 0,
  transition: "none 0.2s ease-in-out",
  transitionProperty: "visibility, opacity",
  border: "1px solid $grey",
  variants: {
    isOpen: {
      true: {
        visibility: "visible",
        opacity: 1,
      },
    },
  },
});

export const StyledSidebarMenuButton = styled("button", {
  borderLeft: "none",
  borderRight: "none",
  borderTop: "none",
  borderBottom: "1px solid $grey",
  backgroundColor: "transparent",
  padding: "16px",
  cursor: "pointer",
  fontSize: "20px",
  fontWeight: "600",
  whiteSpace: "nowrap",
  fontFamily: "sans-serif",
  color: "$dark",
  "&:last-child": {
    borderBottom: "none",
  },
});

export const StyledSidebarMenuButtonLink = styled("a", {
  borderLeft: "none",
  borderRight: "none",
  borderTop: "none",
  borderBottom: "1px solid $grey",
  backgroundColor: "transparent",
  padding: "16px",
  textAlign: "center",
  fontFamily: "sans-serif",
  textDecoration: "none",
  color: "$dark",
  cursor: "pointer",
  fontSize: "20px",
  fontWeight: "600",
  whiteSpace: "nowrap",
  "&:last-child": {
    borderBottom: "none",
  },
});
