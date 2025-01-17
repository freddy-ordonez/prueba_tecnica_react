import { createTheme } from "@mui/material";

export const dashboardTheme = createTheme({
  palette: {
    background: {
      default: "#E0E0E0", // Fondo general gris claro
    },
    primary: {
      main: "#4F4F4F", // Texto gris oscuro
    },
    secondary: {
      main: "#B0B0B0", // Acentos gris medio
    },
    text: {
      primary: "#2B2B2B", // Texto principal
      secondary: "#6F6F6F", // Texto secundario
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h6: {
      fontWeight: 500,
    },
    body1: {
      fontSize: "0.9rem",
      color: "#4F4F4F",
    },
  },
});