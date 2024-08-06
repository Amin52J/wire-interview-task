import { DefaultTheme } from "styled-components";

const theme = {
  colors: {
    background: "#ffffff",
    brightLink: "#00acee",
    darkShadow: "#aaaaaa",
    darkPrimary: "#f1c03e",
    header: "#ffcc2f",
    lightText: "#ffffff",
    lightShadow: "#eeeeee",
    link: "#008ec4",
    mediumLightShadow: "#dddddd",
    notificationBackground: "#2188b6",
    secondaryLink: "#2baf2b",
    shadow: "#CCCCCC",
    text: "#543729",
  },
  sizes: {
    pageWidth: "1000px",
  },
  breakpoints: {
    mobile: 680,
  },
  spacing: 10,
  typography: {
    smallFontSize: 14,
    fontSize: 16,
    mediumFontSize: 17,
    largeFontSize: 18,
    footerFontSize: "0.9em",
  },
};

export type ThemeType = typeof theme;

const defaultTheme: DefaultTheme = theme;

export default defaultTheme;
