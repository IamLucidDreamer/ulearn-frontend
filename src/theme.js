// src/theme.js
import { createTheme } from "@mui/material/styles";
import { fontFamily } from "@mui/system";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#5A51AD",
    },
    secondary: {
      main: "#FFB348",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F5F5F5",
    },
    alternate: {
      main: "#8C7DDF",
      light: "#F3DFFF",
      dark: "#925700",
    },
    dark: {
      100: "#F5F5F5",
      200: "#CCCCCC",
      300: "#A6A6A6",
    },
  },
  typography: {
    fontFamily: "'Lato', 'Scada', 'Nobile', sans-serif",
    h1: {
      fontFamily: "'Lato', sans-serif",
      fontSize: "2rem",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "'Scada', sans-serif",
      fontSize: "1.5rem",
      fontWeight: 500,
    },
    p: {
      fontFamily: "'Nobile', sans-serif",
      fontSize: "1rem",
      fontWeight: 400,
    },
  },
});

export default theme;
