import Router from "./Routes/Router";
import React from "react"
import { ThemeProvider } from "@mui/material"
import theme from "./Constants/theme"
import { GlobalStyled } from "./GlobalStyled";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled/>
      <Router/>
    </ThemeProvider>
  );
}

export default App;
