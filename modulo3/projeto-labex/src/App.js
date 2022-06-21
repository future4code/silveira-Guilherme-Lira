import React from "react";
import { Header } from './components/main/Header'
import { Footer } from './components/main/Footer'
import { WebSite } from "./components/main/styles";
import { Router } from "./routes/Router";

function App() {
  return (
    <WebSite>
      <Header />
      <Router />
      <Footer />
    </WebSite>
  );
}

export default App;
