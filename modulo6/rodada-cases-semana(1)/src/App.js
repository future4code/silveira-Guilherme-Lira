import Router from "./Routes/Router";
import React from "react"
import { ThemeProvider } from "@mui/material"
import theme from "./Constants/theme"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router/>
    </ThemeProvider>
  );
}

export default App;
