import { styled } from "../../theme/theme";

export const StyledTutorialLayout = styled("div", {
  display: "flex",
  flexDirection: "column",
  background: "linear-gradient(180deg, #FFFFFF 12.54%, #F0F0F0 100%)",
  margin: "0 auto",
});

export const StyledTutorialLayoutHeader = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "36px 0",
});

export const StyledTutorialLayoutTitle = styled("div", {
  marginTop: "24px",
});

export const StyledTutorialLayoutCardContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  margin: "24px 0",
  "@bp1": {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "24px",
  },
  "@bp2": {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "24px",
  },
});
