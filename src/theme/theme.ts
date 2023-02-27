import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      red: "#f63737",
      green: "#91C301",
      blue: "#4B0BB4",
      yellow: "#FF912C",
      white: "#ffffff",
      primary: "$green",
      dark: "#333333",
      gray: "#a1a1a1",
      secondary: "$blue",
      light: "#e9e9e9",
      lighter: "#fafafa",
      success: "$green",
      warning: "$yellow",
    },
  },
  utils: {
    marginX: (value: number) => ({ marginLeft: value, marginRight: value }),
  },
});
