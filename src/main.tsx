import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

// Optional: Customize your theme
const theme = createTheme({
  palette: {
    mode: "light", // can also be 'dark'
    primary: { main: "#ffffff" },
    secondary: { main: "#0b2c5d" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        outlinedPrimary: ({ theme }) => ({
          borderColor: theme.palette.primary.main,

          "&:hover": {
            borderColor: "#6DB04B",
            color: "#6DB04B",
            backgroundColor: "transparent", // optional (removes gray hover fill)
          },
          "&.Mui-focusVisible": {
            color: "#6DB04B",
          },
          "&:focus": {
            borderColor: "#ffffff",
            color: "#ffffff",
            outline: "#ffffff",
          },
        }),
      },
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
);
